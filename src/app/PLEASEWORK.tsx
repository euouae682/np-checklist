'use client';

import { useState, useEffect } from 'react';

export default function Goofy() {
  const [goofyValue, setGoofyValue] = useState(-1);
  
  useEffect(() => {
    console.log("effect triggered");
    fetch('/api/goofy')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setGoofyValue(parseInt(data.goofy_level));
      })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-mono font-bold">{ goofyValue >= 3 ? "LETS GET GOOFY" : "boooooo" }</h1>
    </main>
  )
}
