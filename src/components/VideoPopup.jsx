import { Link } from 'react-router-dom';

const VideoPopup = () => {
    return (
        <>
            <div style={{margin: "0" ,  }} className="video-popup ">
                <div className="container container-two">
                    <div className="video-popup__thumb">
                        <img  src="assets/images/imagenes-inicio/imagen-topografia.jpeg" alt="" className="cover-img"/>
                        <Link to="https://www.youtube.com/watch?v=ebb1dqiMZO8" className="popup-video-link video-popup__button">
                            <i className="fas fa-play"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoPopup;