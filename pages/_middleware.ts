// pages/_middleware.ts

import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log('BRUNOOOOOOOOOOOOOOOxxx', req, 'xxxxxxxxxxxxx', ev);
  return new Response('Hello, world!2')
}