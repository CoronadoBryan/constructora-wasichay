import React from 'react';
import Header from './../common/Header';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import BannerThree from '../components/BannerThree';
import AboutThree from './../components/AboutThree';
import MessageThree from '../components/MessageThree';
import TestimonialThree from '../components/TestimonialThree';
import PageTitle from '../common/PageTitle';
import PropertyTypeThree from '../components/PropertyTypeThree';
import ContenedorNumeros  from '../components/ContenedorNumeros';
import VideoPopup  from '../components/VideoPopup';

const HomeThree = () => {
    return (
        <>
        
        <PageTitle title="CityScape - Home Three" />
            <OffCanvas/>
            <MobileMenu/>
            
            <main className="body-bg">

                {/* Header */}
                <Header 
                    headerClass="bg-transparent" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass="ms-auto menu-right"
                    btnClass="btn btn-main  d-lg-block d-none"
                    btnLink="/add-new-listing"
                    btnText="Add Listing"
                    spanClass="icon-right" 
                    showHeaderBtn={true}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={false}
                />

                {/* Banner Three */}
                <BannerThree/>
                <ContenedorNumeros/>


                {/* About Three */}
                <AboutThree/>
                <VideoPopup/>

                {/* Property Type Three */}
                {/* <PropertyTypeThree/> */}

                 {/* Property Two */}
                {/* <PropertyTwo/>  */}

               

                 {/* Newsletter */}
                {/* <Newsletter/>  */}

                {/* Testimonial Three */}
                {/* <TestimonialThree/> */}

                 {/* Message Three */}
                 <MessageThree/>

                {/* Counter Three */}
                {/* <CounterThree/> */}

                {/* Faq */}
                {/* <Faq/> */}

            

                {/* Blog Three */}
                {/* <BlogThree/> */}

                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeThree;