import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    clientId: process.env.MELI_CLIENT_ID ?? null,
    redirectUri: process.env.MELI_REDIRECT_URI ?? null,
  });
}