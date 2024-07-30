'use client'; // Mark this file as a client component

import { useRouter } from 'next/navigation';

const NavButtons = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <button onClick={() => handleNavigation('/one')}>one</button>
      <button onClick={() => handleNavigation('/two')}>two</button>
      <button onClick={() => handleNavigation('/three')}>three</button>
      <button onClick={() => handleNavigation('/products')}>products</button>
      <button onClick={() => handleNavigation('/dashboard')}>dashboard</button>
      <button onClick={() => handleNavigation('/_lib')}>private folder</button>
      <button onClick={() => handleNavigation('/complex-dashboard')}>complex dashboard</button>
    </div>
  );
};

export default NavButtons;
