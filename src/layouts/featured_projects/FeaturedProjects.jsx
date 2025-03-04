import React from 'react'
import projectA from '../../assets/img/project-laser-cut.png'
import './featuredproject.css'
import projectB from '../../assets/img/erp-project-react-django.png'
import projectC from '../../assets/img/project-metalmecanica-react.png'

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
                            <a href='https://decoration-world-lc.web.app' target='_blank' className='ttl-fp-f'>ecomerce REACT + DJANGO</a>
                            <p>This project was build with REACT + SWC for FRONT and DJANGO REST FRAMEWORK for API-REST (backend), for the Authentication was used JWT and the ENDPOINT delicated  of the API was protected with IsAuthenticated in the ViewSet</p>
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
                            <a href='https://erp-chris-proyect.web.app' target='_blank' className='ttl-fp-f'>ERP REACT + DJANGO</a>
                            <p>This project was build with REACT + SWC for FRONT and DJANGO REST FRAMEWORK for API-REST (backend), with JWT and the ENDPOINT delicated  have Authentication, this ERP is BASIC and have 6 module's available. </p>
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
                            <a href='https://cl-metalmecanica.web.app' target='_blank' className='ttl-fp-f'>REACT + SWC</a>
                            <p>This project was built with REACT + SWC for the FRONT, it has a DB.js that handles all the main information, the other pages are linked with the react-router-dom LINK.</p>
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
