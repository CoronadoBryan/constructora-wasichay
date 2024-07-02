import Header from "./../common/Header";
import Footer from "../common/Footer";
import MobileMenu from "../common/MobileMenu";
import OffCanvas from "../common/OffCanvas";
import BannerThree from "../components/BannerThree";
import AboutThree from "./../components/AboutThree";
import MessageThree from "../components/MessageThree";
import TestimonialThree from "../components/TestimonialThree";
import PageTitle from "../common/PageTitle";
import PropertyTypeThree from "../components/PropertyTypeThree";
import ContenedorNumeros from "../components/ContenedorNumeros";
import VideoPopup from "../components/VideoPopup";

const HomeThree = () => {
  return (
    <>
      <PageTitle title="Wasichay - Inicio" />
      <OffCanvas />
      <MobileMenu />

      <main className="body-bg">
        {/* Header */}
        <Header
          headerClass="bg-transparent"
          logoBlack={true}
          logoWhite={false}
          headerMenusClass="ms-auto menu-right"
          btnClass="btn btn-main  d-lg-block d-none"
          btnLink="https://api.whatsapp.com/send?phone=51935681025&text=%C2%A1Hola!%20Buen%20d%C3%ADa%20%F0%9F%98%8A%2C%20quisiera%20saber%20mas%20informaci%C3%B3n%20a%20cerca%20de%20los%20servicios%20Topogr%C3%A1ficos%20que%20ofrece."
          btnText="Contactar"
          spanClass="icon-right"
          showHeaderBtn={true}
          showOffCanvasBtn={false}
          offCanvasBtnClass=""
          showContactNumber={false}
        />

        {/* Banner Three */}
        <BannerThree />
        <ContenedorNumeros />

        {/* About Three */}
        <AboutThree />


        
        <VideoPopup />

        {/* Property Type Three */}
        {/* <PropertyTypeThree/> */}

        {/* Property Two */}
        {/* <PropertyTwo/>  */}

        {/* Newsletter */}
        {/* <Newsletter/>  */}

        {/* Testimonial Three */}
        {/* <TestimonialThree/> */}

        {/* Message Three */}
        <MessageThree />

        {/* Counter Three */}
        {/* <CounterThree/> */}

        {/* Faq */}
        {/* <Faq/> */}

        {/* Blog Three */}
        {/* <BlogThree/> */}

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default HomeThree;
