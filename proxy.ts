import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LOCALE = "en";

/**
 * Serves the English homepage at "/" by internally rewriting it to
 * "/en" — the URL bar still shows "/", and "/en" / "/id" are untouched
 * and continue to resolve to app/[locale] directly.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
