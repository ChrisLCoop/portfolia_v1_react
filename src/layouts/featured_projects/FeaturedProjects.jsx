import React from 'react'
import projectA from '../../assets/img/project-laser-cut.png'
import './featuredproject.css'

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
                        <img className='bkg-pc' src={projectA} alt="" />
                    </div>
                    <div className="card-ctn-ffn">
                        <div className="cont-info-dtl-prj">
                            <p className='ttl-fp-f'>ecomerce REACT + DJANGO</p>
                            <p>This project was build with REACT + SWC for FRONT and DJANGO REST FRAMEWORK for API-REST (backend), for the Authentication was used JWT and the ENDPOINT delicated  of the API was protected with IsAuthenticated in the ViewSet</p>
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
