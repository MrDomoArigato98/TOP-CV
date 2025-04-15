import { useState } from "react";
import "./reset.css";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm.jsx";
import CVPreview from "./components/CVPreview.jsx";
import EducationalExperienceForm from "./components/EducationalExperienceForm.jsx";

function App() {
  // Personal Info
  const [personalInfoForm, setPersonalInfoForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [editingPersonalInfo, setEditingPersonalInfo] = useState(true);

  // Personal Info End

  const [educationExperience, setEducationExperience] = useState({
    schoolName: "",
    courseTitle: "",
    startDate: "",
    endDate: "",
  });

  return (
    <>
      <div className="test">
        <div className="">
          {editingPersonalInfo && (
            <PersonalInfoForm
              personalInfoForm={personalInfoForm}
              setPersonalInfoForm={setPersonalInfoForm}
              onSubmit={() => {
                setPersonalInfo(personalInfoForm);
                setEditingPersonalInfo(false);
              }}
            />
          )}
          <EducationalExperienceForm
            educationExperience={educationExperience}
            setEducationExperience={setEducationExperience}
          />
        </div>
        {/* We can maybe hide this somewhere ? */}
        <div className="">
          <CVPreview
            personalInfo={personalInfo}
            educationExperience={educationExperience}
          />
          <button onClick={() => setEditingPersonalInfo(true)}>Edit</button>
        </div>
      </div>
    </>
  );
}

export default App;
