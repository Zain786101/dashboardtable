import React from "react";
import "./home.css";
import profileImg from "../images/person_3.jpg";
import userProfile from "../images/person_1.jpg";
import Menubar from "./Menubar";
function Home() {
  return (
    <div>
      {/* Start Navbar Section */}
      <section className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 logoName">
              <h4>TindAPI</h4>
            </div>
            <div className="col-6 ">
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
      <div className="search-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="user-profile">
                <img alt="User Profile" src={userProfile} />
                <div className="userinfo">
                  <h4>Username</h4>
                  <p>364/500 Tokens</p>
                </div>
              </div>
            </div>

            <div className="col-8">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*End Search Bar Section */}

      {/*Start Table Section */}
      <div className="table-section">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <Menubar />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 ">
              <div className="main-table">
                <table className="table ">
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Model1</td>
                      <td>Free</td>
                      <td>tx393</td>
                      <td>proxy1.com</td>
                      <td>running</td>
                      <td>Action</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-button">
                <button type="button">Add Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Table Section */}
    </div>
  );
}
export default Home;
