import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                    <h5> {d.name}</h5>
                    <h5>{d.price}</h5>
                    <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll  btn-margin "
                >
                 ADD TO CART
                </a>{" "}
                  </div>
                  
                ))
              : "Loading..."}
              
          </div>
        </div>
      </div>
    </div>
  );
};
