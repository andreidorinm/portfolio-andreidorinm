import Link from 'next/link';
import { FaGithub } from '../Misc/Icons.collection';
import TextLink from '../Misc/TextLink.component';
import useRevealAnimation from '../../lib/hooks/useRevealAnimation';

const Header = () => {
  const { ref } = useRevealAnimation();

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header ref={ref} className="font-jost py-8 flex justify-between items-center hidden-component">
      <div>
        <div className="hidden sm:flex sm:flex-row sm:gap-x-4">
          {navigation.map((item) => (
            <TextLink key={item.name} text={item.name} url={item.href} />
          ))}
        </div>
      </div>

      <Link href="https://github.com/andreidorinm" passHref className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github-repo"
        prefetch={false}>
        <FaGithub />
      </Link>
    </header>
  );
};

export default Header;
