function EducationalExperienceForm({
  educationExperience,
  setEducationExperience,
}) {
  const handleChange = (e) => {
    setEducationExperience({
      ...educationExperience,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="education">
      <h2>Education:</h2>
      <input
        type="text"
        name="schoolName"
        placeholder="School Name"
        value={educationExperience.schoolName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="courseTitle"
        placeholder="Course Title"
        value={educationExperience.courseTitle}
        onChange={handleChange}
      />
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={educationExperience.startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={educationExperience.endDate}
        onChange={handleChange}
      />
    </div>
  );
}

export default EducationalExperienceForm;
