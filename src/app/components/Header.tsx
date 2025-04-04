import { BUSINESS_NAME } from "@/constants/constants";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 h-34 grid grid-cols-3 gap-4 text:white @container">
      <p className="m-auto text-white text-2xl font-[Gowun_Dodum]">{BUSINESS_NAME}</p>
    </header>
  );
}

export default Header;