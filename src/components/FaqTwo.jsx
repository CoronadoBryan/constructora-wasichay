import React from "react";
import FaqAccordion from "../common/FaqAccordion";
import FaqTwoThumb from "../../public/assets/images/thumbs/faq-two-img.png";
import SectionHeading from "../common/SectionHeading";

const FaqTwo = () => {
  return (
    <section className="faq-two padding-y-120">
      <div className="container container-two">
        <SectionHeading
          headingClass=""
          subtitle="Preguntas y respuestas"
          subtitleClass="bg-gray-100"
          title="Preguntas frecuentes"
          renderDesc={false}
          desc=""
          renderButton={false}
          buttonClass="btn-main"
          buttonText="View More"
        />

        <div className="row gy-4">
          <div className="col-lg-6">
            <FaqAccordion accordionClass="style-two" itemClass="" />
          </div>
          <div className="col-lg-6 ps-lg-4 d-lg-block d-none">
            <div className="faq-two-thumb">
              <img src='https://media.istockphoto.com/id/1130050123/es/foto/top%C3%B3grafo-ingeniero-trabajando-con-abej%C3%B3n-en-el-sitio-de-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=U442Wz6Kx5iGTPOfBdi5Jy2l3tzXBsZu96wjpwTywLY=' style={{borderRadius:"10px"}} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTwo;
