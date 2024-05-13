import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGear,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import profileImg from "../images/person_3.jpg";
import userProfile from "../images/person_1.jpg";
import AddAccountForm from "./AddAccountForm";
import Menubar from "./Menubar";
import ToggleButton from "./ToggleButton";
function Home() {
  // State to manage form visibility
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (data) => {
    // Update formData, tableData, and filteredData with new data
    const updatedTableData = [...tableData, data];
    setFormData([...formData, data]);
    setTableData(updatedTableData);
    setFilteredData(updatedTableData);
    toggleForm(); // Hide the form after submission
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user");
        setFormData(response.data); // Update tableData state with API response
        setTableData(response.data); // Initialize tableData with all data
        setFilteredData(response.data); // Initialize filteredData with all dat
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Fetch user data when component mounts
  }, []);
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredResult = formData.filter(
      (item) =>
        item.serial.toLowerCase().includes(searchValue) ||
        item.group.toLowerCase().includes(searchValue) ||
        item.upgradeStatus.toLowerCase().includes(searchValue) ||
        item.account.toLowerCase().includes(searchValue) ||
        item.proxy.toLowerCase().includes(searchValue) ||
        item.status.toLowerCase().includes(searchValue)
    );
    setFilteredData(filteredResult);
  };
  return (
    <div>
      {/* Start Navbar Section */}
      <section className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center logoName">
              <h4>TindAPI</h4>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center profile-container">
              <div className="profile">
                <img alt="profileImage" src={profileImg} />
              </div>
            </div>

            <div className="brekline"></div>
          </div>
        </div>
      </section>
      {/*End Navbar Section */}

      {/*Start Search Bar Section */}
      <section className="search-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4  user-profile order-sm-first">
              <img alt="User Profile" src={userProfile} />
              <div className="userinfo">
                <h4>Username</h4>
                <p>364/500 Tokens</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-8  justify-content-center ">
              <form class="form-inline">
                <input
                  className="form-control mr-sm-2  searchBar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleSearch}
                />
              </form>
            </div>
            <div className="col-sm-12 d-block d-sm-inlinecol-sm-12 d-block d-sm-inline mb-3 mb-sm-0">
              <button
                className="btn btn-outline-secondary d-block d-sm-none" // Show on sm screens only
                // onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faSliders} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*End Search Bar Section */}

      {/*Start Table Section */}
      <section className="table-section">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <Menubar />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 ">
              <div className="table-responsive main-table ">
                <table className="table table-striped table-dark table-custom">
                  <thead>
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Group</th>
                      <th scope="col">Upgrade Status</th>
                      <th scope="col">Acount #</th>
                      <th scope="col">Proxy</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.group}</td>
                        <td>{item.upgradeStatus}</td>
                        <td>{item.account}</td>
                        <td>{item.proxy}</td>
                        <td>{item.status}</td>
                        <td>
                          <div className="toggle-button">
                            <button className="btn btn-outline-secondary">
                              <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                            <span style={{ margin: "0 5px" }}></span>
                            <ToggleButton />
                            <span style={{ margin: "0 5px" }}></span>
                            <button className="btn btn-outline-secondary">
                              <FontAwesomeIcon icon={faGear} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Button to toggle form */}
              <div className="table-button">
                <button type="button" onClick={toggleForm}>
                  Add Account
                </button>
              </div>
              {/* Popup Add Account Form */}
              {showForm && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <AddAccountForm
                      onSubmit={handleFormSubmit}
                      onClose={toggleForm}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/*End Table Section */}
    </div>
  );
}
export default Home;
