import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({
      erro: "Código de autorização não recebido."
    });
  }

  return NextResponse.json({
    sucesso: true,
    code
  });
}