import Image from "next/image";
import { TopNavbarPart } from "./feature/top-navbar-part";
import { CompanyPart } from "./feature/company-part";
import { CompanyLogoAnimation } from "./feature/company-logo";

export default function Home() {
  return (
    <div className=" min-h-screen  dark:bg-black">
    <TopNavbarPart/>
    <CompanyPart/>
    <CompanyLogoAnimation/>
    </div>
  );
}
