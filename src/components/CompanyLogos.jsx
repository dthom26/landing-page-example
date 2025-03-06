import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="font-grotesk font-light text-xs tracking-tagline uppercase mb-6 text-center text-[#FFFFFF]/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img width={134} height={28} src={logo} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
