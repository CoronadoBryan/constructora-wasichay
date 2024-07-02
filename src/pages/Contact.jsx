import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import ContactTop from "../components/ContactTop";
import ContactUsSection from "../components/ContactUsSection";
import PageTitle from "../common/PageTitle";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";

const Contact = () => {
  return (
    <>
      <PageTitle title="Grupo Wasichay - Contacto" />
      <OffCanvas />
      <MobileMenu />
      <main className="body-bg">
        {/* Header */}
        <Header
          headerClass="dark-header has-border"
          logoBlack={false}
          logoWhite={true}
          headerMenusClass="mx-auto"
          btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
          btnLink="/add-new-listing"
          btnText="Add Listing"
          spanClass="icon-right text-gradient"
          showHeaderBtn={true}
          showOffCanvasBtn={false}
          offCanvasBtnClass=""
          showContactNumber={false}
        />

        {/* BreadCrumb */}
        <Breadcrumb pageTitle="Contáctanos" pageName="Contáctanos" />

        {/* Contact Top */}
        <ContactTop />

        <div className="contact-map address-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.7540832304024!2d-77.07995473037398!3d-11.973370887338076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce3fd5b28fbb%3A0x3e0786a6afa008d9!2sVelez%20De%20Villa%2C%20Los%20Olivos%2015306!5e0!3m2!1ses!2spe!4v1713449713907!5m2!1ses!2spe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Us Section */}
        <ContactUsSection />

        {/* Cta */}
        <Cta ctaClass="" />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Contact;
