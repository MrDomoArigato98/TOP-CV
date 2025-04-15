//Could use (props) here, but I know the destructured valeus coming in
function CVPreview({ personalInfo, educationExperience }) {
  return (
    <>
      <div>
        <h2>{personalInfo.fullName}</h2>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
      </div>

      <div>
        <h2>{educationExperience.schoolName}</h2>
        <h2>{educationExperience.courseTitle}</h2>
        <p>{educationExperience.startDate}</p>
        <p>{educationExperience.endDate}</p>
      </div>
    </>
  );
}

export default CVPreview;
