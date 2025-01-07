'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className="">
      <div className="h-20 max-w-7xl mx-auto flex justify-between items-center">
        <Image
          alt="Logo"
          src="/logo.png"
          width={50}
          height={50}
          className="rounded-xl"
        />
        <nav className="flex items-center gap-4">
          <Link href="https://github.com/mxvsh/sapphire" target="_blank">
            <h1 className="hover:underline">GitHub</h1>
          </Link>
          <Select onValueChange={setTheme}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
