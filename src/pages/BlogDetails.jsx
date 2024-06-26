import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Contact from '../components/ContactUsSection'
import { useLocation } from 'react-router-dom';
import BlogDetailsSection from '../components/BlogDetailsSection';
import PageTitle from '../common/PageTitle';
import Faq from '../components/Faq';

const BlogDetails = () => {

    const location = useLocation(); 
    
    return (
        <>
            <PageTitle title="Wasichay - Blog Details" />

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
            <Breadcrumb 
                pageTitle="Blog Details"
                pageName={location.state.title}
            />

            <BlogDetailsSection/>
            
            <Faq />

            {/* Cta */}
            <Contact />
            

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BlogDetails;

