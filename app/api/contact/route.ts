import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, _gotcha } = body;

  // Honeypot check
  if (_gotcha) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Campi obbligatori mancanti." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "noreply@valeriomannucci.com",
    to: "valerio@valeriomannucci.com",
    replyTo: email,
    subject: `Nuovo messaggio da ${name} — broker-automations`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message ?? "(nessun messaggio)"}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Invio fallito." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
