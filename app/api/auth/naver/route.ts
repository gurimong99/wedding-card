import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const clientId = process.env.NAVER_CLIENT_ID;
  const requestUrl = new URL(request.url);
  const redirectUri =
    process.env.NAVER_REDIRECT_URI ??
    `${requestUrl.origin}/api/auth/naver/callback`;

  if (!clientId) {
    requestUrl.searchParams.set("login", "naver-config-required");
    return NextResponse.redirect(requestUrl.origin);
  }

  const state = crypto.randomUUID();
  const authorizeUrl = new URL("https://nid.naver.com/oauth2.0/authorize");

  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("naver_oauth_state", state, {
    httpOnly: true,
    maxAge: 60 * 10,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
