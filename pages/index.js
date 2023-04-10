import React, { useState } from 'react';
import Image from 'next/image';
import QuotesContent from '@/components/QuotesContent';

export default function Home() {
  const [dark, SetDark] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col ${
        dark ? 'dark' : ''
      } items-center justify-center py-24 font-serif container mx-auto `}>
      <div className="flex flex-col rounded-lg border  border-black w-7/12 dark:bg-slate-800 dark:text-white">
        <div className="flex justify-between px-7 items-center py-4">
          <ul className="flex justify-center space-x-1">
            <li className="block bg-red-500 w-4 h-4 rounded-full"></li>
            <li className="block bg-yellow-500 w-4 h-4 rounded-full"></li>
            <li className="block bg-green-500 w-4 h-4 rounded-full"></li>
          </ul>
          <h1 className="font-bold text-center text-2xl">Random Quotes Generator</h1>
          <button onClick={() => SetDark(!dark)}>
            <Image src={dark ? '/moon.svg' : '/sun.svg'} alt="sun" width={25} height={25} />
          </button>
        </div>
        <hr className="border-t border-black dark:border-slate-300" />
        <QuotesContent />
      </div>
      <footer className="text-base my-5">Random Quotes Generator By Syahroni Bawafi</footer>
    </main>
  );
}
