import { useState } from 'react';
import Link from 'next/link';
import { VscGithubAlt } from '../Misc/Icons.collection';
import TextLink from '../Misc/TextLink.component';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="font-jost py-8 flex justify-between items-center">
      <div>
        <div className="hidden sm:flex sm:flex-row sm:gap-x-4">
          {navigation.map((item) => (
            <TextLink key={item.name} text={item.name} url={item.href} />
          ))}
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-200 font-bold"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <Link href="https://github.com/andreidorinm" passHref className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo">
          <VscGithubAlt />
      </Link>
    </header>
  );
};

export default Header;
