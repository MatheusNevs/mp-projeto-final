import { NextResponse, type NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("next-auth.session-token");
  const url = request.url;

  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (
    (pathname.startsWith("/minhas-doacoes") || pathname == "/doar") &&
    !token
  ) {
    return NextResponse.redirect(new URL("/login", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/minhas-doacoes/:path?", "/login", "/doar"],
};
