import Link from 'next/link';

const HeaderMobile = (): JSX.Element => {
  return (
    <header className="bg-blue-500 p-4">
      <nav>
        <ul className="flex justify-evenly">
          <li className="px-4 bg-blue-200">
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li className="px-4 bg-blue-200">
            <Link href="/news">
              <a>news</a>
            </Link>
          </li>
          <li className="px-4 bg-blue-200">
            <Link href="/events">
              <a>events</a>
            </Link>
          </li>
          <li className="px-4 bg-blue-200">
            <Link href="/dashboard">
              <a>dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
