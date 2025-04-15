//Could use (props) here, but I know the destructured valeus coming in
function PersonalInfoForm({ personalInfoForm, setPersonalInfoForm, onSubmit }) {
  const handleChange = (e) => {
    setPersonalInfoForm({
      ...personalInfoForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form
        className="personal-info"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h2>Personal Information:</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={personalInfoForm.fullName}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={personalInfoForm.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={personalInfoForm.phone}
          onChange={handleChange}
        />
        <button type="Save">Save</button>
      </form>
    </>
  );
}

export default PersonalInfoForm;
