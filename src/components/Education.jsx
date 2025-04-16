function Education({
  education,
  onChange,
  addEducation,
  deleteEducation,
  errors,
}) {
  return (
    <>
      <h2 className="fade-right">Education: </h2>
      {education.map((item, index) => (
        <div className="education fade-right" key={item.id}>
          <h2>School {index + 1}</h2>
          <input
            type="text"
            name="schoolName"
            value={item.schoolName}
            placeholder="School"
            onChange={(e) => onChange(item.id, e)}
          />
          <input
            type="text"
            name="courseTitle"
            value={item.courseTitle}
            placeholder="Course Title"
            onChange={(e) => onChange(item.id, e)}
          ></input>
          <input
            type="date"
            name="startDate"
            value={item.startDate}
            placeholder="Start Date"
            onChange={(e) => onChange(item.id, e)}
          ></input>
          <label htmlFor=""></label>
          <input
            type="date"
            name="endDate"
            value={item.endDate}
            placeholder="Start Date"
            onChange={(e) => onChange(item.id, e)}
          ></input>

          <button className="del-btn" onClick={() => deleteEducation(item.id)}>
            {" "}
            Remove{" "}
          </button>
        </div>
      ))}
      <button className="add-btn fade-right" onClick={addEducation}>
        {" "}
        Add more{" "}
      </button>
    </>
  );
}

export default Education;
