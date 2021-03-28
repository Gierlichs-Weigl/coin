import { isDesktop } from 'utils/globals';

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul className="flex w-full p-1 bg-indigo-400">{isDesktop() ? <li>HELLO FLO</li> : <li>MOBILE FLO</li>}</ul>
      </nav>
    </header>
  );
};

export default Header;
