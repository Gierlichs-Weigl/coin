const HeaderMobile = (): JSX.Element => {
  return (
    <header className={'bg-blue-500 p-2'}>
      <nav>
        <ul className={'flex justify-evenly'}>
          <li className={'px-4 bg-blue-200'}>icon</li>
          <li className={'px-4 bg-blue-200'}>icon</li>
          <li className={'px-4 bg-blue-200'}>icon</li>
          <li className={'px-4 bg-blue-200'}>icon</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
