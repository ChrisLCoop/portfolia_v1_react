import React from 'react'
import projectA from '../../assets/img/store-3d-1.webp'
import './featuredproject.css'
import projectB from '../../assets/img/tech-tec-store-1.webp'
import projectC from '../../assets/img/project-metalmecanica-react.webp'
import projectD from '../../assets/img/bsa-1.webp'
import projectE from '../../assets/img/fast-api.webp'

const FeaturedProjects = () => {
  return (
    <>
      <div className="content-all-fp">
        <div className="cont-blq-bk">
            <div className="cont-back-a">
                <h2>featured projects</h2>
            </div>
            <div className="cont-back-c">
                <div className="cards-inf-prj">
                    <div className="card-ctn-ffr">
                        <img className='bkg-pc' src={projectA} alt="proyecto ecommerce" />
                    </div>
                    <div className="card-ctn-ffn">
                        <div className="cont-info-dtl-prj">
                            <a href='https://caelum-linea.web.app' target='_blank' className='ttl-fp-f'>ecomerce REACT + FastAPI</a>
                            <p>This project was build with REACT + SWC for FRONT and Python FastAPI FRAMEWORK for API-REST (backend), for the Authentication was used JWT and the ENDPOINT delicated  of the API was protected with IsAuthenticated in the ViewSet, with AR visualization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-blq-bk">
            <div className="cont-back-a">
            </div>
            <div className="cont-back-c">
                <div className="cards-inf-prj">
                    <div className="card-ctn-ffr">
                        <img className='bkg-pc' src={projectB} alt="proyecto erp" />
                    </div>
                    <div className="card-ctn-ffn">
                        <div className="cont-info-dtl-prj">
                            <a href='https://clpc-47348.web.app' target='_blank' className='ttl-fp-f'>Ecommerce tech + fastapi</a>
                            <p>This project was build with REACT + SWC for FRONT and Python FastAPI FRAMEWORK for API-REST (backend), with JWT for Authentication, shopping cart, profile of configuration, different types of filters and searches</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-blq-bk">
            <div className="cont-back-a">
            </div>
            <div className="cont-back-c">
                <div className="cards-inf-prj">
                    <div className="card-ctn-ffr">
                        <img className='bkg-pc' src={projectC} alt="proyecto metalmecanica" />
                    </div>
                    <div className="card-ctn-ffn">
                        <div className="cont-info-dtl-prj">
                            <a href='https://cl-metalmecanica.web.app' target='_blank' className='ttl-fp-f'>REACT SWC + fastapi</a>
                            <p>This project was built with REACT + SWC for FRONT, it contains multiple pages of different content, projects, products, services, navigation is built with Link ok React Router DOM, with AR visualization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-blq-bk">
            <div className="cont-back-a">
            </div>
            <div className="cont-back-c">
                <div className="cards-inf-prj">
                    <div className="card-ctn-ffr">
                        <img className='bkg-pc' src={projectD} alt="proyecto galeria,eventos" />
                    </div>
                    <div className="card-ctn-ffn">
                        <div className="cont-info-dtl-prj">
                            <a href='https://cl-bsa.web.app' target='_blank' className='ttl-fp-f'>REACT SWC + fastapi</a>
                            <p>This project features simple, search-friendly navigation, with buttons for quick sharing on the web and mobile. It's a page that allows you to serve a series of photos from an external server.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont-blq-bk">
            <div className="cont-back-a">
            </div>
            <div className="cont-back-c">
                <div className="cards-inf-prj">
                    <div className="card-ctn-ffr">
                        <img className='bkg-pc' src={projectE} alt="proyecto fastapi" />
                    </div>
                    <div className="card-ctn-ffn">
                        <div className="cont-info-dtl-prj">
                            <a href='https://api.christianlimas.com/docs' target='_blank' className='ttl-fp-f'>Python + fastapi</a>
                            <p>This project serves different services, has public and private routes, secure endpoint with JWT and configured for automatic password recovery response with a custom email, includes PostgreSQL, launched to AWS with Docker.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProjects
