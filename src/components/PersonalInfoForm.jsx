import { useState } from "react";

//Could use (props) here, but I know the destructured valeus coming in
function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={handleChange}
      ></input>

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={handleChange}
      />
    </>
  );
}

export default PersonalInfoForm;
