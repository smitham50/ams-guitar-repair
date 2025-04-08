import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_CITY, BUSINESS_STATE, BUSINESS_ZIP } from "@/constants/constants";

const Footer: React.FC = () => {
  return (
    <footer className="flex bottom-0 fixed sticky md:h-34 bg-[#ededed] font-[Gowun_Dodum]">
      <div className="m-auto">
        <p>{BUSINESS_NAME}</p>
        <p>{BUSINESS_ADDRESS}</p>
        <p>{`${BUSINESS_CITY}, ${BUSINESS_STATE} ${BUSINESS_ZIP}`}</p>
      </div>
    </footer>
  );
}

export default Footer;