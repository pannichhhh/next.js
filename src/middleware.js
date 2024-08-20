import { NextResponse } from "next/server";

export function middleware(req){
    console.log(req.url);
    return NextResponse.redirect(new URL('/',req.url))
}

export const config = {
    matcher: '/admin/:path*',
}