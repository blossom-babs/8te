// pages/api/finances.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { date, timestamp, type, category,note, amount } = body;

    // Perform your operations (e.g., save to the database)
    const finance = await prisma.finance.create({
      data: {
        date,
        timestamp,
        type,
        category,
        note,
        amount: parseFloat(amount),
      },
    });
    console.log(finance);

    // Return a JSON response
    return NextResponse.json({ message: 'Finance data received', data: body });
} catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
}
}

export async function GET() {
  try {
    const finances = await prisma.finance.findMany();
    
    return NextResponse.json({ message: 'Finance data retrieved', data: finances });
  } catch (error) {
    console.error('Error fetching finance data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}