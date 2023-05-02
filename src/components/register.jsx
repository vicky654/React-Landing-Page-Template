import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';


export const Register = (props) => {

    const checkUrl = () => {
        alert("hi")
    }

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





                        </div>


                    </div>
                </div>

            </section>

            <div className="search-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-3">
                            <h3 class="card-title justify-content-center align-items-center">Registration Code:</h3>
                        </div>
                        <div className="col-md-6 col-lg-5 mb-3 mb-lg-0">
                            <Formik
  initialValues={{ search: '' }}
  validate={(values) => {
    const errors = {};
    if (!values.search) {
      errors.search = 'Search field is required';
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
   
    window.location.href = 'https://streamingtvcode.com/index.php/your-code-has-been-redeemed/?fname=';
    console.log(values,"vlaues")
  }}
>
  {({ isSubmitting }) => (
    <Form>
      <div className="form-group d-flex align-items-center">
     <div>
     <Field type="search" name="search" className="form-control mr-3" required placeholder="e.g: AED5CH" />
       
     </div>
        <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'SUBMIT NOW'}
        </button>
      </div>
    </Form>
  )}
</Formik>

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
