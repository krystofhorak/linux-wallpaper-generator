import { useState, useRef } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';

import type { FormEvent } from 'react';

import type { Distribution } from '../typings/distroTypes';

const HomePage = (): JSX.Element => {
  const [currentDistro, setCurrentDistro] = useState<Distribution>('arch');
  const [iconSize, setIconSize] = useState<number>(1);

  const distroSelectRef = useRef<HTMLSelectElement | null>(null);
  const sizeSelectRef = useRef<HTMLSelectElement | null>(null);

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    if (!distroSelectRef.current || !sizeSelectRef.current) return;
    setCurrentDistro(distroSelectRef.current.value as Distribution);
    setIconSize(Number(sizeSelectRef.current.value));
  };

  return (
    <DefaultLayout>
      <h1>Linux Ricing Generator</h1>
      <div className="canvas">
        <img
          className="distribution-logo"
          src={`/distributions/${currentDistro}.svg`}
          alt="Arch"
          style={{
            height: `${iconSize * 32}px`,
          }}  
        />
      </div>
      <h2>Generation</h2>
      <form onSubmit={handleGenerate}>
        <label htmlFor="distribution">Distribution:</label><br />
        <select name="distribution" ref={distroSelectRef}>
          <option value="arch">Arch</option>
          <option value="debian">Debian</option>
          <option value="mint">Mint</option>
          <option value="fedora">Fedora</option>
          <option value="manjaro">Manjaro</option>
          <option value="opensuse">openSUSE</option>
          <option value="ubuntu">Ubuntu</option>
        </select><br />
        <label htmlFor="size">Size:</label><br />
        <select name="size" ref={sizeSelectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select><br /><br />
        <input type="submit" value="Generate" />
      </form>
    </DefaultLayout>
  );
};

export default HomePage;
