//Could use (props) here, but I know the destructured valeus coming in
function Personal({ personalInfo, handlePersonalChange }) {
  return (
    <>
    <div className="personal-info">
      <h2>Personal Information:</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={handlePersonalChange}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={handlePersonalChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={personalInfo.phone}
        onChange={handlePersonalChange}
      />
      </div>
    </>
  );
}

export default Personal;
