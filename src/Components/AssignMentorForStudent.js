import { useState } from "react";
import axios from "axios";

function AssignMentorForStudent() {
  const [student, setStudent] = useState({
    studentName: "",
    mentorName: ""
  });

  const handleChange = (event) => {
    setStudent((e) => {
      return { ...e, ...event };
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `http://localhost:4000/API/assign-mentor`,
        student,
        { withCredentials: true }
      );
      if (response.data.message) {
        alert("Student assigned successfully ...");
      }
    } catch (error) {
      console.log("Error: ", error);
      alert(error.message);
    }
  };

  console.log(student);

  return (
    <div className="App">
      <h1 className="header">Assign mentor for student</h1>
      <form>
        <label className="label" htmlFor="student">
          Student Name
        </label>
        <input
          className="input"
          type="text"
          id="student"
          name="student"
          placeholder="Type mentor name"
          onChange={(e) => handleChange({ studentName: e.target.value })}
        />
        <br />
        
        <label className="label" htmlFor="mentor">
          Mentor Name
        </label>
        <input
          className="input"
          type="text"
          id="mentor"
          name="mentor"
          placeholder="Enter mentor name"
          onChange={(e) => handleChange({ mentorName: e.target.value })}
        />
        <br />

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AssignMentorForStudent;