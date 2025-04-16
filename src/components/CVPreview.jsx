//Could use (props) here, but I know the destructured valeus coming in
function CVPreview({ personalInfo, education, employment }) {
  return (
    <>
      <div className="personal-preview">
        <h2>{personalInfo.fullName}</h2>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
      </div>
      <br></br>
      <div className="education-preview">
        <h2>Education: </h2>
        {education.map((item) => (
          <div className="education-cv" key={item.id}>
            <h2>*{item.schoolName}</h2>
            <h2>{item.courseTitle}</h2>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>
      <br></br>
      <div className="employment-preview">
        <h2>Employment History: </h2>
        {employment.map((item) => (
          <div className="education-cv" key={item.id}>
            <h2>*{item.companyName}</h2>
            <h2>{item.title}</h2>
            <p>{item.responsibility}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CVPreview;
