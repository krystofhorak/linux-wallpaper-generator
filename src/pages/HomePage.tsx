import DefaultLayout from '../layouts/DefaultLayout';

import type { FormEvent } from 'react';

const HomePage = (): JSX.Element => {
  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <DefaultLayout>
      <h1>Linux Ricing Generator</h1>
      <div className="canvas" />
      <h2>Generation</h2>
      <form onSubmit={handleGenerate}>
        <label htmlFor="distribution">Distribution:</label><br />
        <select name="distribution">
          <option value="arch">Arch</option>
          <option value="debian">Debian</option>
          <option value="mint">Mint</option>
          <option value="fedora">Fedora</option>
          <option value="manjaro">Manjaro</option>
          <option value="opensuse">openSUSE</option>
          <option value="ubuntu">Ubuntu</option>
        </select><br /><br />
        <input type="submit" value="Generate" />
      </form>
    </DefaultLayout>
  );
};

export default HomePage;
