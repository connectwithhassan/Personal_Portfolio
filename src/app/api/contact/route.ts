import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const rawOrigin = req.headers.get("origin") || "";
    // FormSubmit requires a valid public web origin (not localhost)
    const origin = !rawOrigin || rawOrigin.includes("localhost")
      ? "https://hassanabbas.dev"
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
        Name: name,
        Email: email,
        Subject: subject || "Portfolio Project Inquiry",
        Message: message,
        _subject: `[Portfolio Inquiry] ${subject || "New Project Message"} from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: result.message || "Message dispatched successfully.",
      needsActivation: typeof result.message === "string" && result.message.includes("Activation"),
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Could not send message automatically. Please email directly." },
      { status: 500 }
    );
  }
}
