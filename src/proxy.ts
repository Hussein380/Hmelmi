import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  // Protect /admin/dashboard
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    const token = request.cookies.get("admin_session")?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    const verifiedToken = await verifyToken(token);
    
    if (!verifiedToken) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // Protect POST/DELETE /api/gallery (allow GET for public)
  if (request.nextUrl.pathname === "/api/gallery" && request.method !== "GET") {
    const token = request.cookies.get("admin_session")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const verifiedToken = await verifyToken(token);
    if (!verifiedToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*", "/api/gallery"],
};
