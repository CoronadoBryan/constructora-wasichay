import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import PageTitle from "../common/PageTitle";

import ServiceSection from "../components/ServiceSection";
import OffCanvas from "../common/OffCanvas";
import MobileMenu from "../common/MobileMenu";

const Services = () => {
    return (
        <>
            <PageTitle title="Wasichay - Servicios" />
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
                    btnLink="https://api.whatsapp.com/send?phone=51935681025&text=%C2%A1Hola!%20Buen%20d%C3%ADa%20%F0%9F%98%8A%2C%20quisiera%20saber%20mas%20informaci%C3%B3n%20a%20cerca%20de%20los%20servicios%20Topogr%C3%A1ficos%20que%20ofrece."
                    btnText="CONTACTAR"
                    spanClass="icon-right text-gradient"
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={false}
                />

                {/* BreadCrumb */}
                <Breadcrumb pageTitle="Servicios" pageName="Servicios" />

                <ServiceSection />

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
};

export default Services;
