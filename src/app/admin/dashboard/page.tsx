"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, Upload, Trash2, Pencil, Check, X, Image as ImageIcon, Loader2 } from "lucide-react";

interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch gallery");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setFile(null);
        setCaption("");
        // Reset file input
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        
        await fetchGallery();
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      alert("An error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`/api/gallery?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (error) {
      alert("Error deleting image");
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const res = await fetch(`/api/gallery`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, caption: editCaption }),
      });

      if (res.ok) {
        setItems(items.map((item) => item.id === id ? { ...item, caption: editCaption } : item));
        setEditingId(null);
      } else {
        alert("Failed to update");
      }
    } catch (error) {
      alert("Error updating caption");
    }
  };

  return (
    <div className="min-h-screen bg-brand-blue-tint/20 pb-20">
      {/* Mobile-friendly Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-white" />
          </div>
          <h1 className="font-bold text-brand-navy text-lg">Admin Gallery</h1>
        </div>
        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </header>

      <main className="container mx-auto px-4 mt-6 max-w-2xl space-y-8">
        
        {/* Upload Form */}
        <section className="bg-white p-5 rounded-2xl shadow-sm border border-border/50">
          <h2 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-brand-orange" />
            Upload New Image
          </h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-brand-gray mb-1">
                Select Photo (Camera Roll)
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full text-sm text-brand-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-blue-tint file:text-brand-navy hover:file:bg-brand-blue-tint/80"
                required
              />
            </div>
            <div>
              <label htmlFor="caption" className="block text-sm font-medium text-brand-gray mb-1">
                Caption (Optional)
              </label>
              <Input
                id="caption"
                placeholder="e.g. Loading AGO at Mombasa depot"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="rounded-xl"
              />
            </div>
            <Button 
              type="submit" 
              disabled={!file || isUploading} 
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl"
            >
              {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Upload Image"}
            </Button>
          </form>
        </section>

        {/* Gallery List */}
        <section>
          <h2 className="text-lg font-bold text-brand-navy mb-4">Manage Gallery</h2>
          
          {isLoading ? (
            <div className="flex justify-center p-8">
              <Loader2 className="w-8 h-8 animate-spin text-brand-orange" />
            </div>
          ) : items.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl text-center border border-dashed border-border">
              <p className="text-brand-gray">No images in the gallery yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 flex">
                  <div className="relative w-32 h-32 shrink-0 bg-brand-blue-tint">
                    <Image 
                      src={item.url} 
                      alt={item.caption || "Gallery image"} 
                      fill 
                      className="object-cover"
                      unoptimized // Because these are local dynamic uploads, next/image might struggle without unoptimized
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    {editingId === item.id ? (
                      <div className="flex gap-2 items-center">
                        <Input
                          value={editCaption}
                          onChange={(e) => setEditCaption(e.target.value)}
                          className="text-sm h-8 rounded-lg"
                          placeholder="Enter caption"
                        />
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(item.id)} className="text-green-600 hover:bg-green-50 h-8 w-8 p-0 rounded-full shrink-0">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setEditingId(null)} className="text-gray-400 hover:bg-gray-50 h-8 w-8 p-0 rounded-full shrink-0">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <p className="text-sm text-brand-navy font-medium line-clamp-2">
                        {item.caption || <span className="text-gray-400 italic">No caption</span>}
                      </p>
                    )}
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-brand-gray">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => { setEditingId(item.id); setEditCaption(item.caption); }}
                          className="text-brand-navy hover:text-brand-orange hover:bg-brand-blue-tint/30 h-8 w-8 p-0 rounded-full"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 h-8 w-8 p-0 rounded-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
