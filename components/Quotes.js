import React, { useState } from 'react';

export default function Quotes({ click }) {
  const [quotes, setQuotes] = useState(null);

  const quotesHandler = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    setQuotes(data);
  };

  return (
    <>
      {!quotes ? (
        <>
          <p className="font-bold text-center md:text-3xl text-2xl md:w-10/12 w-11/12 md:pt-10 pt-6 pb-5 md:px-5 px-1">
            &ldquo;Welcome to Random Quotes Generator by Syahroni Bawafi&rdquo;
          </p>
          <i className="md:text-xl text-lg">&minus; Syahroni &minus;</i>
        </>
      ) : (
        <>
          <p className="font-bold text-center md:text-3xl text-2xl md:w-10/12 w-11/12 md:pt-10 pt-6 pb-5 md:px-5 px-1">
            &ldquo;{quotes.content}&rdquo;
          </p>
          <i className="md:text-xl text-lg">&minus; {quotes.author} &minus;</i>
        </>
      )}
      <button
        type="button"
        className="py-2 px-4 dark:bg-slate-300 dark:text-slate-800 bg-slate-800 text-white rounded-full my-8 hover:opacity-80 shadow-md"
        onClick={() => quotesHandler()}>
        Generate New Qoute
      </button>
    </>
  );
}
