import Home from "./Components/Home.jsx";
import React, { useState } from "react";
import Form from "./Components/AddAccountForm.jsx";
// import Form from "./Components/AddAccountForm.jsx";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    serial: "",
    group: "",
    upgradeStatus: "",
    account: "",
    proxy: "",
    status: "",
    action: "",
  });
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Home formData={formData} />
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
