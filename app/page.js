import CompanyInfo from "./components/CompanyInfo";
import OurServices from "./components/OurServices";
import Technologies from "./components/Technologies";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <CompanyInfo />
      <OurServices />
      <Technologies />
      <Clients />
      <Footer />
    </div>
  )
}
