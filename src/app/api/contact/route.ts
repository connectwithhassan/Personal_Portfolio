import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 1. Required field checks
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please write a message before submitting." },
        { status: 400 }
      );
    }

    // 2. Length guards against payload abuse
    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long (max 100 chars)." }, { status: 400 });
    }
    if (email.length > 150) {
      return NextResponse.json({ error: "Email is too long (max 150 chars)." }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long (max 5000 chars)." }, { status: 400 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = (typeof subject === "string" && subject.trim()) || "Portfolio Project Inquiry";
    const cleanMessage = message.trim();

    const rawOrigin = req.headers.get("origin") || "";
    const origin = !rawOrigin || rawOrigin.includes("localhost")
      ? "https://connectwithhassan.vercel.app"
      : rawOrigin;
    const referer = `${origin}/`;

    // Forward to FormSubmit to deliver straight into connect.hassanabbas@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/connect.hassanabbas@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify({
        Name: cleanName,
        Email: cleanEmail,
        Subject: cleanSubject,
        Message: cleanMessage,
        _subject: `[Portfolio Inquiry] ${cleanSubject} from ${cleanName}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: result.message || "Message dispatched successfully.",
        needsActivation: typeof result.message === "string" && result.message.includes("Activation"),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Could not send message automatically. Please email directly." },
      { status: 500 }
    );
  }
}
