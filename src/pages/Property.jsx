import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import PropertyPageSection from "../components/PropertyPageSection";
import Cta from "../components/Cta";
import PageTitle from "../common/PageTitle";

import CoursePageSection from "../components/CoursePageSection";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";

const Property = () => {
  return (
    <>
      <PageTitle title="CityScape - Property" />
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
        <Breadcrumb pageTitle="Cursos" pageName="Cursos" />

        {/* Property Page Section */}
        {/* <PropertyPageSection/> */}

        <CoursePageSection />

        {/* Cta */}
        <Cta ctaClass="" />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Property;
