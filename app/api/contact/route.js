import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, phone, message } = await req.json();

    await Contact.create({ name, email, phone, message });

    return NextResponse.json({ success: true, message: "Message Saved" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error saving data" },
      { status: 500 }
    );
  }
}
