import React, { useState } from "react";
import "./addaccountform.css";

function Form() {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    serial: "",
    group: "",
    upgradeStatus: "",
    account: "",
    proxy: "",
    status: "",
    action: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(tableData);
  };

  const onFormSubmit = (event) => {
    const checkVal = !Object.values(setFormData).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, setFormData];
      setTableData(dataObj);
      console.log(dataObj);
      const isEmpty = {
        serial: "",
        group: "",
        upgradeStatus: "",
        account: "",
        proxy: "",
        status: "",
        action: "",
      };
      setFormData(isEmpty);
    }
  };

  return (
    <div>
      <div className="user-form">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            {/* <div className="col-6"></div> */}
            <div className="col-lg-6 col-sm-12 col-md-8">
              <form className="form-outer-group  " onSubmit={handleSubmit}>
                <div className="row mt-5">
                  <div className="col-md-4 col-sm-4 mb-3">
                    <label htmlFor="validationServer01">Serial No</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationServer01"
                      name="serial"
                      value={formData.serial}
                      onChange={handleInput}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 mb-3">
                    <label htmlFor="validationServer02">Group</label>
                    <input
                      type="text"
                      name="group"
                      className="form-control"
                      id="validationServer02"
                      value={formData.group}
                      onChange={handleInput}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 mb-3">
                    <label htmlFor="validationServerUsername">
                      Upgrade Status
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="upgradeStatus"
                        className="form-control"
                        id="validationServerUsername"
                        value={formData.upgradeStatus}
                        onChange={handleInput}
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
                  <div className="col-md-3 col-sm-8 mb-3">
                    <label htmlFor="validationServer03">Account</label>
                    <input
                      type="text"
                      name="account"
                      className="form-control"
                      id="validationServer03"
                      value={formData.account}
                      onChange={handleInput}
                      placeholder=""
                      required
                    />
                    {/* <div className="invalid-feedback">
                      Please provide a valid city.
                    </div> */}
                  </div>
                  <div className="col-md-3 col-sm-8 mb-3">
                    <label htmlFor="validationServer04">Proxy</label>
                    <input
                      type="text"
                      name="proxy"
                      className="form-control"
                      id="validationServer04"
                      value={formData.proxy}
                      onChange={handleInput}
                      placeholder=""
                      required
                    />
                    {/* <div className="invalid-feedback">
                        Please provide a valid state.
                      </div> */}
                  </div>
                  <div className="col-md-3 col-sm-8 mb-3">
                    <label htmlFor="validationServer05">Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      id="validationServer05"
                      value={formData.status}
                      onChange={handleInput}
                      placeholder=""
                      required
                    />
                    {/* <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div> */}
                  </div>
                  <div className="col-md-3 col-sm-8 mb-3">
                    <label htmlFor="validationServer05">Action</label>
                    <input
                      name="action"
                      type="text"
                      className="form-control"
                      id="validationServer05"
                      value={formData.action}
                      onChange={handleInput}
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
                  <button
                    className="form-button btn btn-primary"
                    type="submit"
                    onClick={onFormSubmit}
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>{tableData.serial}</h2>
        <h2>{formData.serial}</h2>
      </div>
    </div>
  );
}

export default Form;
