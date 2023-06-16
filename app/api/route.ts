import { NextResponse, NextRequest } from "next/server";
import requestIp from "request-ip";

export async function GET(request: Request) {
  //@ts-ignore
  const ip = requestIp.getClientIp(request);
  console.log("Requested from:", ip);

  return NextResponse.json({ message: "Hello", ip });
}
