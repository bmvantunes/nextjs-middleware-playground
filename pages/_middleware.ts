// pages/_middleware.ts

import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("BRUNOOOOOOOOOOOOOOOxx222xgeo", 
  JSON.stringify(req.geo), 
  "xxxxxxxxxxxxxbody", 
  req.body,
  "xxxxxxxxxxxxxnexturl", 
  JSON.stringify(req.nextUrl),"xxxxxxxxxxxxxbodyjson", 
  JSON.stringify(req.body),"xxxxxxxxxxxxxip", 
  JSON.stringify(req.ip),"xxxxxxxxxxxxxua", 
  JSON.stringify(req.ua),);

  NextResponse.next();
}
