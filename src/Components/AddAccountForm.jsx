import React from "react";
import "./addaccountform.css";

function Form() {
  return (
    <div>
      <div className="user-form">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            {/* <div className="col-6"></div> */}
            <div className="col-6">
              <form className="form-outer-group">
                <div className="row mt-5">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationServer01">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationServer01"
                      placeholder=""
                      value=""
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationServer02">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationServer02"
                      placeholder=""
                      value=""
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationServerUsername">Username</label>
                    <div className="input-group">
                      {/* <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend3"
                        >
                          @
                        </span>
                      </div> */}
                      <input
                        type="text"
                        className="form-control"
                        id="validationServerUsername"
                        placeholder=""
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                      {/* <div className="invalid-feedback">
                        Please choose a username.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer03">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationServer03"
                      placeholder=""
                      required
                    />
                    {/* <div className="invalid-feedback">
                      Please provide a valid city.
                    </div> */}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationServer04">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationServer04"
                      placeholder=""
                      required
                    />
                    {/* <div className="invalid-feedback">
                        Please provide a valid state.
                      </div> */}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationServer05">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationServer05"
                      placeholder=""
                      required
                    />
                    {/* <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div> */}
                  </div>
                </div>
                <div className="form-group">
                  {/* <div className="form-check">
                    <input
                      className="form-check-input is-invalid"
                      type="checkbox"
                      value=""
                      id="invalidCheck3"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck3">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div> */}
                  <button className="form-button btn btn-primary" type="submit">
                    Submit form
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
