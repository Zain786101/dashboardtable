import React, { useState } from "react";
import "./addaccountform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function AddAccountForm({ onClose }) {
  const [formData, setFormData] = useState({
    group: "",
    upgradeStatus: "",
    account: "",
    proxy: "",
    status: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user", formData);
      console.log("Form data submitted successfully:", response.data);
      setFormData({
        group: "",
        upgradeStatus: "",
        account: "",
        proxy: "",
        status: "",
      });
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Handle error state or display error message
    }
  };

  return (
    <div className="user-form">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <form className="form-outer-group" onSubmit={handleSubmit}>
              <div className="close-btn">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onClose}
                >
                  <FontAwesomeIcon icon={faTimes} className="close-icon" />
                </button>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 mb-3">
                  <label htmlFor="groupInput">Group</label>
                  <input
                    type="text"
                    name="group"
                    className="form-control"
                    id="groupInput"
                    value={formData.group}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="statusInput">Upgrade Status</label>
                  <input
                    type="text"
                    name="upgradeStatus"
                    className="form-control"
                    id="statusInput"
                    value={formData.upgradeStatus}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="accountInput">Account</label>
                  <input
                    type="text"
                    name="account"
                    className="form-control"
                    id="accountInput"
                    value={formData.account}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="proxyInput">Proxy</label>
                  <input
                    type="text"
                    name="proxy"
                    className="form-control"
                    id="proxyInput"
                    value={formData.proxy}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="statusDetailInput">Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    id="statusDetailInput"
                    value={formData.status}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <button className="form-button btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccountForm;
