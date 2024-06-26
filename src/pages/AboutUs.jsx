import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import AboutThree from "../components/AboutThree";
import PropertyTypeThree from "../components/PropertyTypeThree";
import ContactTop from "../components/ContactTop";
import PageTitle from "../common/PageTitle";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import Faq from "../components/Faq";

const AboutUs = () => {
  return (
    <>
      <PageTitle title="Wasichay - About Us" />
      <OffCanvas />
      <MobileMenu />
      {/* Header */}
      <Header
        headerClass="dark-header has-border"
        logoBlack={false}
        logoWhite={true}
        headerMenusClass="mx-auto"
        btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
        btnLink="/add-new-listing"
        btnText="CONTACTAR"
        spanClass="icon-right text-gradient"
        showHeaderBtn={true}
        showOffCanvasBtn={false}
        offCanvasBtnClass=""
        showContactNumber={false}
      />
      <Breadcrumb pageTitle="Nosotros" pageName="Nosotros" />
      <AboutThree />
      <Cta />
      <PropertyTypeThree />
      <Faq />
      <ContactTop />
      <Footer />
    </>
  );
};

export default AboutUs;
