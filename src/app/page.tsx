import Image from "next/image";
import { TopNavbarPart } from "../feature/top-navbar-part/index";
import { CompanyPart } from "../feature/company-part/index";
import { CompanyLogoAnimation } from "../feature/company-logo/index";
import { SablePartOne } from "../feature/sable-part-one/index";
import { SablePartTwo } from "../feature/sable-part-two/index";
import { SableBrand } from "../feature/sable-brand/index";


export default function Home() {
  return (
    <div className=" min-h-screen ">
      <TopNavbarPart />
      <CompanyPart />
      <CompanyLogoAnimation />
      <SablePartOne />
      <SablePartTwo/>
      
      <SableBrand/>


    </div>
  );
}
