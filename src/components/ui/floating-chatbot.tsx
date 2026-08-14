"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm the HM Elmi AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to UI
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      
      if (res.ok && data.text) {
        setMessages([...newMessages, { role: "assistant", content: data.text }]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later or contact us via WhatsApp." }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, a network error occurred. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden w-80 sm:w-96 flex flex-col h-[500px] max-h-[70vh]"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Elmi AI</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-blue-tint/5">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                      msg.role === "user" 
                        ? "bg-brand-orange text-white rounded-br-none" 
                        : "bg-white border border-border/50 text-brand-navy rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-p:leading-snug prose-a:text-brand-orange max-w-none">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border/50 text-brand-navy rounded-2xl rounded-bl-none shadow-sm px-5 py-4 flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-border/50 flex gap-2 shrink-0">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-brand-blue-tint/20 border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-brand-navy hover:bg-brand-orange text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-brand-navy"
              >
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 px-5 py-3"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Bot className="w-5 h-5" />
            <span className="text-sm font-bold">Ask AI</span>
          </>
        )}
      </button>
    </div>
  );
}
