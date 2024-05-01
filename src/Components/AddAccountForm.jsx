import React, { useState } from "react";
import "./addaccountform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Form({ onClose }) {
  const [formData, setFormData] = useState({
    serial: "",
    group: "",
    upgradeStatus: "",
    account: "",
    proxy: "",
    status: "",
    action: "",
  });

  const handleInput = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      // Send form data to backend server (assuming it's running locally)
      const response = await axios.post("http://localhost:3000/user", formData);
      // POST request to update the JSON file

      // Reset form fields after successful submission
      setFormData({
        serial: "",
        group: "",
        upgradeStatus: "",
        account: "",
        proxy: "",
        status: "",
        action: "",
      });

      console.log("Form data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Handle error state or display error message
    }
  };
  const handleCancel = () => {
    if (onClose) {
      onClose(); // Call the onClose function passed from the parent component
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
                <div className="close-btn">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleCancel}
                  >
                    <FontAwesomeIcon icon={faXmark} className="close-icon" />
                  </button>
                </div>

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
                  <button
                    className="form-button btn btn-primary"
                    type="submit"
                    // onClick={onFormSubmit}
                  >
                    Submit form
                  </button>
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
