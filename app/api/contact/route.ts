import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function normalizeField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = normalizeField(body.name);
  const email = normalizeField(body.email);
  const message = normalizeField(body.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      message
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Unable to save your message right now." }, { status: 500 });
    }

    return NextResponse.json({ message: "Thanks, your message has been received." }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }
}
