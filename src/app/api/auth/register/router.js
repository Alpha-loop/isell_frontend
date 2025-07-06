import { NextResponse } from 'next/server';
import { register } from '@/lib/controllers/authController';

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await register(body);
    
    if (result.error) {
      return NextResponse.json(
        { message: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Registration failed' },
      { status: 500 }
    );
  }
}