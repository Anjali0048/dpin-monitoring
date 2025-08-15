"use client";

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ModeToggle } from './ModeToggle';

export function Bar() {
  return (
    <div className="flex items-center justify-between h-16 px-8 shadow-md bg-white">
      <div className="text-xl font-bold text-[#6c47ff]">Dpin-monitoring</div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}
