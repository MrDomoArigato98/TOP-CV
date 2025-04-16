function Employment({ employment, onChange, addEmployment, deleteEmployment }) {
  return (
    <>
      <h2>Employment History</h2>
      {employment.map((employment, index) => (
        <div key={employment.id} className="employment">
          <h2>Employment {index + 1}</h2>
          <input
            name="companyName"
            value={employment.companyName}
            placeholder="Company Name"
            onChange={(e) => onChange(employment.id, e)}
          />
          <input
            name="title"
            value={employment.title}
            placeholder="Title"
            onChange={(e) => onChange(employment.id, e)}
          />
          <textarea
            name="responsibility"
            value={employment.responsibility}
            placeholder="Responsibility"
            onChange={(e) => onChange(employment.id, e)}
          />
          <input
            name="startDate"
            type="date"
            value={employment.startDate}
            placeholder="Employment start date"
            onChange={(e) => onChange(employment.id, e)}
          />
          <input
            name="endDate"
            type="date"
            value={employment.endDate}
            placeholder="Employment end date"
            onChange={(e) => onChange(employment.id, e)}
          />
          <button onClick={() => deleteEmployment(employment.id)}>-</button>
        </div>
      ))}
      <button onClick={() => addEmployment()}>+</button>
      </>
  );
}

export default Employment;
