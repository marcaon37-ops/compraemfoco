import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    envs: Object.keys(process.env).filter(k => k.startsWith("MELI")),
    clientId: process.env.MELI_CLIENT_ID || "NÃO ENCONTRADO",
    redirectUri: process.env.MELI_REDIRECT_URI || "NÃO ENCONTRADO",
  });
}