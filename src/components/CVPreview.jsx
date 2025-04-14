import { useState } from "react";

//Could use (props) here, but I know the destructured valeus coming in
function CVPreview({ personalInfo }) {
  return (
    <>
      <div>
        <h1>{personalInfo.fullName}</h1>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
      </div>
    </>
  );
}

export default CVPreview;
