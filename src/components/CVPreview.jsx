//Could use (props) here, but I know the destructured valeus coming in
function CVPreview({ personalInfo, education }) {
  return (
    <>
      <div>
        <h2>{personalInfo.fullName}</h2>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
      </div>

      <div className="education-preview">
        {education.map((item) => (
          <div className="education-cv" key={item.id}>
            {console.log(item)}
            <h2>{item.schoolName}</h2>
            <h2>{item.courseTitle}</h2>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CVPreview;
