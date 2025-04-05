import { BUSINESS_NAME } from "@/constants/constants";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 h-34 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-2 md:gap-4 text:white @container">
      <p className="my-auto ml-5 text-white text-lg md:text-2xl font-[Gowun_Dodum]">{BUSINESS_NAME}</p>
    </header>
  );
}

export default Header;