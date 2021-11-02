// pages/_middleware.ts

import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log('BRUNOOOOOOOOOOOOOOOxx222x', req, 'xxxxxxxxxxxxx', ev);
  
  
  NextResponse.next();
}