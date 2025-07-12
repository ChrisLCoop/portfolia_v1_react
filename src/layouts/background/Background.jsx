import React from "react";
import "./background.css";

const Background = () => {
  return (
    <>
      <div className="content-all-background">
        <div className="cont-blq-bk">
          <div className="cont-back-a">
            <h2>background</h2>
          </div>
          <div className="cont-back-b">
            <p>
              I'm currently study Supervised Machine Learning: Regression and
              Classification in Coursera, at the same time s a Full-Stack Developer, I enjoy build applications that can be
              of great help to people.
            </p>
          </div>
        </div>
        <div className="cont-blq-bk">
          <div className="cont-back-a">
            <h2>skills</h2>
          </div>
          <div className="cont-back-b fd-ts-back">
            <div className="card-back-b">
              <h3>languajes</h3>
              <p>python</p>
              <p>SQL</p>
              <p>R</p>
              <p>css</p>
              <p>html</p>
              <p>javascript</p>
              
            </div>
            <div className="card-back-b">
              <h3>frameworks</h3>
              <p>django</p>
              <p>react</p>
              <p>fast api</p>
              <p>django rest framework </p>
            </div>
            <div className="card-back-b">
              <h3>tools</h3>
              <p>git & github</p>
              <p>postman</p>
              <p>tableau</p>
              <p>excel</p>
              <p>power bi</p>
              <p>Mongo DB</p>
            </div>
            <div className="card-back-b">
              <h3>model 3d</h3>
              <p>blender</p>
              <p>solidworks</p>
              <p>autocad</p>
              <p>inventor</p>
            </div>
          </div>
        </div>
        <div className="cont-blq-bk">
          <div className="cont-back-a">
            <h2>study</h2>
          </div>
          <div className="cont-back-b">
            <div className="cards-exp-b">
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">coursera</p>
                  <p className="ttl-crrcr">
                    Supervised Machine Learning: Regression and Classification
                  </p>
                </div>
                <div className="crd-inf-y">
                  <p>Jul 2025 - Present</p>
                </div>
              </div>
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">coursera</p>
                  <p className="ttl-crrcr">Google AI Essentials</p>
                </div>
                <div className="crd-inf-y">
                  <p>March 2025 - Jun 2025</p>
                </div>
              </div>
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">coursera</p>
                  <p className="ttl-crrcr">Google Cybersecurity</p>
                </div>
                <div className="crd-inf-y">
                  <p>March 2025 - Jun 2025</p>
                </div>
              </div>
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">coursera</p>
                  <p className="ttl-crrcr">data analysis</p>
                </div>
                <div className="crd-inf-y">
                  <p>Aug 2024 - Feb 2025</p>
                </div>
              </div>
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">tecsup</p>
                  <p className="ttl-crrcr">full stack web developer</p>
                </div>
                <div className="crd-inf-y">
                  <p>nov 2023 - feb - 2024</p>
                </div>
              </div>
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">SENATI</p>
                  <p className="ttl-crrcr">industrial design (TI)</p>
                </div>
                <div className="crd-inf-y">
                  <p>Jan 2011 - Jul - 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-blq-bk">
          <div className="cont-back-a">
            <h2>experience - (personal project)</h2>
          </div>
          <div className="cont-back-b">
            <div className="cards-exp-b">
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">erp (React + Django)</p>
                  <p className="p-info-ex-p">
                    design and implementation with independent module , how
                    user, sales, inventory etc
                  </p>
                  <p className="p-info-ex-p">integration with React + SWC</p>
                  <p className="p-info-ex-p">
                    backend's build with django, using serializers and viewset
                  </p>
                  <p className="p-info-ex-p">
                    focus in the security, implementation of JWT
                  </p>
                </div>
                <div className="crd-inf-y">
                  <p>jan 2025 - Feb 2025</p>
                </div>
              </div>
              <div className="card-dtl-info-exp">
                <div className="crd-inf-x">
                  <p className="ttl-prsk">ecommerce (react + django)</p>
                  <p className="p-info-ex-p">
                    design of cart, bonus, discount dynamic for each product
                  </p>
                  <p className="p-info-ex-p">
                    login, account, checkout, and buy section is authenticated
                    by JWT (API)
                  </p>
                  <p className="p-info-ex-p">
                    model 3D integration and view AR (Augmented Reality) for
                    increment the view of product
                  </p>
                </div>
                <div className="crd-inf-y">
                  <p>nov 2024 - jan 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
