import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../components/Cta";
import FaqTwo from "../components/FaqTwo";
import FaqContactUs from "../components/FaqContactUs";
import CounterThree from "../components/CounterThree";
import PageTitle from "../common/PageTitle";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";
import ContactUsSection from "../components/ContactUsSection";

const FaqPage = () => {
  return (
    <>
      <PageTitle title="Wasichay - Preguntas Frecuentes" />
      <OffCanvas />
      <MobileMenu />
      {/* Header */}
      <Header
        headerClass="dark-header has-border"
        logoBlack={false}
        logoWhite={true}
        headerMenusClass="mx-auto"
        btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
        btnLink="https://api.whatsapp.com/send?phone=51935681025&text=%C2%A1Hola!%20Buen%20d%C3%ADa%20%F0%9F%98%8A%2C%20quisiera%20saber%20mas%20informaci%C3%B3n%20a%20cerca%20de%20los%20servicios%20Topogr%C3%A1ficos%20que%20ofrece."
        btnText="CONTACTAR"
        spanClass="icon-right text-gradient"
        showHeaderBtn={true}
        showOffCanvasBtn={false}
        offCanvasBtnClass=""
        showContactNumber={false}
      />

      {/* BreadCrumb */}
      <Breadcrumb
        pageTitle="Preguntas y Resuestas"
        pageName="Preguntas y Respuestas"
      />

      {/* Faq Two */}
      <FaqTwo />

      {/* Faq Contact Us */}
      <ContactUsSection />

      {/* Counter Four */}
      <CounterThree />

      {/* Cta */}
      <Cta ctaClass="" />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FaqPage;
