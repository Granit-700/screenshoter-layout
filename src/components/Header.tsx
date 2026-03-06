const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <a href="/">
        <img src="src/assets/icons/logo-mobile.svg" alt="Screenshoter +" />
      </a>
      <img src="src/assets/icons/burger-menu.svg" alt="Menu" className="relative left-2.25"/>
    </header>
  );
};

export default Header;
