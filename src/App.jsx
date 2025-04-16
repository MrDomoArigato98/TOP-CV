import { useState } from "react";
import "./reset.css";
import "./App.css";
import Personal from "./components/Personal.jsx";
import CVPreview from "./components/CVPreview.jsx";
import Education from "./components/Education.jsx";
import Employment from "./components/Employment.jsx";

function App() {
  // personal OR education OR work
  const [displayInput, setDisplayInput] = useState("personal");

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Bloggs",
    email: "definitelyRealEmail@gmail.com",
    phone: "+35308291823",
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
      schoolName: "Technological University Dublin",
      courseTitle: "Computer Science Infrastructure",
      startDate: "16/09/2016",
      endDate: "01/05/2020",
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

  //Employment begin
  const [employment, setEmployment] = useState([
    {
      id: 1,
      companyName: "AWS",
      title: "Cloud Support Engineer II",
      responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima, perferendis fugiat assumenda fugit molestias repellendus. Molestias aperiam sunt numquam ducimus voluptates sit vero aliquid explicabo error velit, quaerat necessitatibus!",
      startDate: "01/07/2020",
      endDate: "24/11/2024",
    },
  ]);

  function handleAddEmployment() {
    setEmployment([
      ...employment,
      {
        id: Date.now(),
        companyName: "",
        title: "",
        responsibility: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function handleChangeEmployment(id, e) {
    const { name, value } = e.target;
    /*
    This is the same as:
      const name = e.target.name;
      const value = e.target.value
    */

    setEmployment((prevEmployment) =>
      prevEmployment.map((employment) =>
        employment.id === id ? { ...employment, [name]: value } : employment
      )
    );
  }

  function handleDeleteEmployment(id) {
    setEmployment((prevEmployment) =>
      prevEmployment.filter((employment) => employment.id !== id)
    );
  }
  // Employment end
  

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
        <div className="input-area">
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
          {displayInput == "work" && (
            <Employment
              employment={employment}
              onChange={handleChangeEmployment}
              addEmployment={handleAddEmployment}
              deleteEmployment={handleDeleteEmployment}
            />
          )}
        </div>
        {/* We can maybe hide this somewhere ? */}
        <div className="preview">
          <CVPreview
            personalInfo={personalInfo}
            education={education}
            employment={employment}
          />
        </div>
      </div>
    </>
  );
}

export default App;
