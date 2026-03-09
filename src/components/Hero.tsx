const Hero = () => {
  return (
    <section className="mt-5 relative pt-7.5">
      <div
        className="absolute top-0 bg-linear-to-b from-[#7421B0] to-[#D08EFF] left-11.75 w-85 h-74.75 rounded-l-[35px] z-[-1]"
      />
      <img
        src="src/assets/Images/screenshot-hero.png"
        alt="Screenshot workspace"
      />
      <div
        className="px-5.75 py-[8.8px] relative -top-5.25 ml-22 mr-17.75 rounded-[10px] backdrop-blur-[20.02px] bg-[#C4C4C4]/10 border-[0.5px] border-solid border-[#FFFFFF26]"
      >
        <span
          className="font-[Rubik] text-white font-normal text-[12px]/[160%]"
        >
          Бесплатная программа для Windows
        </span>
      </div>
      <div
        className="absolute bg-[url(src/assets/icons/decorative-line-hero-mobile-1.svg)] left-[50%] transform-[translateX(-50%)] bg-no-repeat w-screen h-screen z-[-1] top-6"
      />
      <h1
        className="mt-15 font-bold text-[24px]/[117%] text-center font-[Rubik] text-[#131313]"
      >
        Делайте снимки и записывайте экран
        <br />
        <span
          className="text-[#7421B0] font-[Rubik] relative"
        >
          в 1 клик
        </span>
      </h1>
      <p
        className="mt-5 font-[Rubik] font-normal text-[12px]/[180%] text-center text-[#828282] w-65 mx-auto"
      >
        Вместе со Screenshoter можно в один клик сделать снимок или записать
        происходящее на экране ПК, чтобы поделиться с кем угодно
      </p>
      <button
        className="mt-5.5 bg-linear-to-r from-[#7421B0] to-[#D08EFF] rounded-[5px] px-7 py-3.25 mx-auto flex text-white font-[Rubik] font-medium text-[12px]/[150%]"
      >
        Скачать бесплатно
      </button>
    </section>
  );
};

export default Hero;
