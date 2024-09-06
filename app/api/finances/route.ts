// pages/api/finances.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body);

    const { month, day, category, note, amount } = body;

    // Perform your operations (e.g., save to the database)

    // Return a JSON response
    return NextResponse.json({ message: 'Finance data received', data: body });
} catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
}
}