import { FaArrowAltCircleDown } from "react-icons/fa";

const Header = () => {
  return (
    <section
      className="relative bg-[url('/assets/images/hero-img.jpg')] min-h-screen mb-4 bg-cover bg-center mx-auto w-[100%] flex flex-col items-center justify-center"
      id="home"
    >
      <div className="absolute inset-0 bg-linear-100 from-black to-transparent" />
      <div className="relative mx-auto  p-2 flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-light text-white m-2 z-10 text-center">
          Por uma Comunidade Mais Justa e Resiliente
        </h1>
        <p className="text-white m-2 z-10 sm:text-[20px] lg:w-[700px] text-center">
          Promovemos o empoderamento de mulheres e raparigas, a saúde
          comunitária e a preservação ambiental para transformar vidas e
          fortalecer comunidades.
        </p>
        <button
          type="button"
          className="flex items-center gap-2 bg-[#F24822] hover:bg-[#F25922] duration-500 cursor-pointer p-2 mt-4 rounded-2xl text-white lg:p-5"
        >
          Quero Saber Mais <FaArrowAltCircleDown />
        </button>
      </div>
    </section>
  );
};

export default Header;
