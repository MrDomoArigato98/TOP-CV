import { useState } from "react";
import "./reset.css";
import "./App.css";
import Personal from "./components/Personal.jsx";
import CVPreview from "./components/CVPreview.jsx";
import Education from "./components/Education.jsx";

function App() {
  // personal OR education OR work
  const [displayInput, setDisplayInput] = useState("personal");

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prevPersonal) => ({ ...prevPersonal, [name]: value }));
  }
  // Personal Info End

  //Education Experience Start
  const [education, setEducation] = useState([
    {
      id: 1,
      schoolName: "Test",
      courseTitle: "test",
      startDate: "",
      endDate: "",
    },
  ]);

  function handleEducationChange(id, e) {
    const { name, value } = e.target;
    setEducation((prevEducation) =>
      prevEducation.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  }

  function handleAddEducation() {
    setEducation([
      ...education,
      {
        id: Date.now(),
        schoolName: "",
        courseTitle: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleDeleteEducation(id) {
    setEducation((prevEducation) =>
      prevEducation.filter((item) => item.id !== id)
    );
  }
  //Education Experience EndŪ

  return (
    <>
      <div className="page">
        <div className="navigation-btns">
          <button onClick={() => setDisplayInput("personal")}>
            Personal Info
          </button>
          <button onClick={() => setDisplayInput("education")}>
            Education
          </button>
          <button onClick={() => setDisplayInput("work")}>Work</button>
        </div>
        <div>
          {displayInput == "personal" && (
            <>
              <Personal
                personalInfo={personalInfo}
                handlePersonalChange={handlePersonalChange}
              />
            </>
          )}
          {displayInput == "education" && (
            <Education
              education={education}
              onChange={handleEducationChange}
              addEducation={handleAddEducation}
              deleteEducation={handleDeleteEducation}
            />
          )}
          {displayInput == "work" && <div> </div>}
        </div>
        {/* We can maybe hide this somewhere ? */}
        <div className="preview">
          <CVPreview
            personalInfo={personalInfo}
            education={education}
          />
        </div>
      </div>
    </>
  );
}

export default App;
