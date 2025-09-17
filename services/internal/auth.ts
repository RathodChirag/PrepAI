import { adminAuth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function createSessionCookie(idToken: string) {
  const cookieStore = await cookies();
  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000,
  });
  cookieStore.set('session', sessionCookie, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: '/',
    sameSite: 'lax',
  });
}
