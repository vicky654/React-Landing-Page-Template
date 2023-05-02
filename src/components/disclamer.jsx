import React from "react";

export const Disclaimer = (props) => {
  return (
    <>
      
      <div id="features" className="text-center">
        <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>PRIVACY POLICY</h2>
        </div>
          <div className="row">
          <div className="col-md-12 col-xs-12">
<div className="card">
  <div className="card-body text-start ">
     {/* <h5 className="card-title">
      {props.data ? props.data.title1 : "loading..."}
    </h5> */}
    <p className="card-text">
      {props.data ? props.data.paragraph1 : "loading..."}
    </p>
  </div>
  <div className="card-body text-start">
    <h5 className="card-title">
      {props.data ? props.data.title2: "loading..."}
    </h5>
    <p className="card-text">
      {props.data ? props.data.paragraph2 : "loading..."}
    </p>
  </div>
  <div className="card-body text-start">
    <h5 className="card-title">
      {props.data ? props.data.title3 : "loading..."}
    </h5>
    <p className="card-text">
      {props.data ? props.data.paragraph3 : "loading..."}
    </p>
  </div>
  <div className="card-body text-start">
    <h5 className="card-title">
      {props.data ? props.data.title4 : "loading..."}
    </h5>
    <p className="card-text">
      {props.data ? props.data.paragraph5 : "loading..."}
    </p>
  </div>
  <div className="card-body text-start">
    <h5 className="card-title">
      {props.data ? props.data.title6 : "loading..."}
    </h5>
    <p className="card-text">
      {props.data ? props.data.paragraph6 : "loading..."}
    </p>
  </div> 
  <div className="card-body text-start">
    <h5 className="card-title">
      {props.data ? props.data.title7 : "loading..."}
    </h5>
    <p className="card-text">
      {props.data ? props.data.paragraph7 : "loading..."}
    </p>
  </div>
</div>
</div> 
          
          </div>
        </div>
      </div>
      <div id="features" className="text-center">
        <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>DISCLAIMER</h2>
        </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-start">
                    {props.data ? props.data.title : "loading..."}
                  </h5>
                  <p className="card-text text-start">
                    {props.data ? props.data.paragraph : "loading..."}
                  </p>

                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2023 THE BLACKWING CODERSHOP FEATURES.</p>
        </div>
      </div>
    </>
  );
};

// export default Disclaimer;



