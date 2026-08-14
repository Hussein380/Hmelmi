import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db("hmelmi");
  return db.collection("gallery");
}

// GET: Fetch all gallery images
export async function GET() {
  try {
    const collection = await getCollection();
    const items = await collection.find({}).sort({ createdAt: -1 }).toArray();
    
    // Map _id to id for the frontend
    const mappedItems = items.map(item => ({
      id: item._id.toString(),
      url: item.url,
      caption: item.caption,
      createdAt: item.createdAt
    }));
    
    return NextResponse.json(mappedItems);
  } catch (error) {
    console.error("GET Gallery Error:", error);
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}

// POST: Upload a new image (Base64)
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const file = formData.get("image") as File;
    const caption = formData.get("caption") as string || "";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to Base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/jpeg';
    const base64Image = `data:${mimeType};base64,${buffer.toString("base64")}`;

    const collection = await getCollection();
    
    const newItem = {
      url: base64Image,
      caption,
      createdAt: new Date().toISOString()
    };

    const result = await collection.insertOne(newItem);

    return NextResponse.json({
      id: result.insertedId.toString(),
      ...newItem
    }, { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}

// DELETE: Remove an image
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const { ObjectId } = require('mongodb');
    const collection = await getCollection();
    
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
  }
}

// PATCH: Update an image caption
export async function PATCH(request: Request) {
  try {
    const { id, caption } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const { ObjectId } = require('mongodb');
    const collection = await getCollection();
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { caption: caption || "" } }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, caption });
  } catch (error) {
    console.error("Patch error:", error);
    return NextResponse.json({ error: "Failed to update caption" }, { status: 500 });
  }
}
