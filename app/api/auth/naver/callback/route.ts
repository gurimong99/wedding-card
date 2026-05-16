import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const homeUrl = new URL("/", requestUrl.origin);

  homeUrl.searchParams.set("login", "naver-callback");

  return NextResponse.redirect(homeUrl);
}
