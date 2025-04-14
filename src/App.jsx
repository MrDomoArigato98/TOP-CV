import { useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

    
      {/* We can maybe hide this somewhere ? */}
      <p>Below is the preview for now:</p>
      <CVPreview 
      personalInfo={personalInfo}
      />
    </>
  );
}

export default App;
