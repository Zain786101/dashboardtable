import React from "react";
import "./home.css";
import profileImg from "../images/person_3.jpg";
// import Menubar from "./Menubar";
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
      {/* <Menubar />  */}
      {/*Start Search Bar Section */}
      <div className="search-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4"></div>
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
      <div className="table-section"></div>
    </div>
  );
}
export default Home;
