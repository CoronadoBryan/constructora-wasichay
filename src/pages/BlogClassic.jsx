import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import BlogClassicSection from '../components/BlogClassicSection';
import PageTitle from '../common/PageTitle';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';
const BlogClassic = () => {
    return (
        <>
        <PageTitle title="Wasichay - Blog " />
        <OffCanvas/>
        <MobileMenu/>
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

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Blog "
                pageName="Blog "
            />

            <BlogClassicSection/> 

            {/* Cta */}
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BlogClassic;