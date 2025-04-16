//Could use (props) here, but I know the destructured valeus coming in
function Personal({ personalInfo, handlePersonalChange, errors }) {
  return (
    <>
      <div className="personal-info fade-right">
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
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={personalInfo.phone}
          onChange={handlePersonalChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
    </>
  );
}

export default Personal;
