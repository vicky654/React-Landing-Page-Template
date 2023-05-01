import React from "react";

export const Register = (props) => {
    return (
        <div id="register" className="text-center">
            <section className="register-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="register-container">
                                <h1>Register A Device</h1>
                            </div>


                        </div>


                    </div>
                </div>

            </section>

            <section className="border-top" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="register-header">
                                <h2 className="p-0">Register your compatible TV or device</h2>
                                <p>
                                    Enter the code shown on your TV or device to register it with your Prime account.
                                </p>
                            </div>


                            {/* <div className="register-main">
                                <div>
                                <h3>Registration Code: </h3>
                                </div>
                                <div>
                                    <input  type="search"></input>
                                </div>
                                <div>
                                    <button type="button">Submit Now</button>
                                </div>
                            </div> */}


                        </div>


                    </div>
                </div>

            </section>
            {/* <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="width-100">
                            <div class="card">
                            <div class="card-body main-div">
  <div  className="width-50">
    <h3 class="card-title justify-content-center align-items-center">Registration Code:</h3>
  </div>
  <div   className="width-50">
    <form>
      <div class="form-group d-flex align-items-center">
        <input type="search" class="form-control mr-3" placeholder="Enter code" />
        <button type="submit" class="btn btn-primary submit-btn">SUBMIT NOW</button>
      </div>
    </form>
  </div>
</div>

                            </div>
                        </div>
                    </div>
                </div>


            </section> */}
             <div className="search-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-3">
          <h3 class="card-title justify-content-center align-items-center">Registration Code:</h3>
          </div>
          <div className="col-md-6 col-lg-5 mb-3 mb-lg-0">
            <form>
              <div className="form-group d-flex align-items-center">
                <input type="search" className="form-control mr-3" required placeholder="" />
                <button type="submit" class="btn btn-primary submit-btn">SUBMIT NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            <section className="border-top mb-4">
                <div className="container">
                    <h2>Where's my registration code?</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 box">
                            <h4>Step 1</h4>
                            <h6>Open the Prime Video app on your TV or device.</h6>

                        </div>
                        <div className="col-md-4  col-sm-4 box">
                            <h4>Step 2</h4>
                            <h6>Select “Register on the Prime website.”</h6>

                        </div>
                        <div className="col-md-4  col-sm-4 box">
                            <h4>Step 3</h4>
                            <h6>Your registration code appears on the left of the screen.</h6>

                        </div>


                    </div>

                </div>
            </section>


        </div>
    );
};
