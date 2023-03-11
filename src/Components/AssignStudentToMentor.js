import { useState } from "react";
import axios from "axios";

function AssignStudentToMentor() {
  const [mentor, setMentor] = useState({
    mentorName: "",
    students: [],
  });
  const [student, setStudent] = useState({});

  const handleChange = (value) => {
    return setMentor((e) => {
      return { ...e, ...value };
    });
  };

  const handleStudent = (e) => {
    let newStudent = [];
    let s = e.students.split(",");

    for (let x of s) {
      let trimmed = x.trim();
      newStudent.push(trimmed);
    }
    setStudent({ students: newStudent });
    setMentor((e) => {
      return { ...e, ...student };
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `http://localhost:4000/API/assign-student`,
        mentor,
        { withCredentials: true }
      );
      console.log(response)
      if (response.data.message) {
        alert("Mentor assigned successfully ...");
      }
    } catch (error) {
      console.log("Error: ", error);
      alert(error.message);
    }
  };

    console.log(mentor);

  return (
    <div className="App">
      <h1 className="header">Assign students to mentor</h1>
      <form>
        <label className="label" htmlFor="name">
          Mentor Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Type mentor name"
          onChange={(e) => handleChange({ mentorName: e.target.value })}
        />
        <br />

        <label className="label" htmlFor="students">
          Students
        </label>
        <textarea
          className="input"
          id="students"
          name="students"
          rows="5"
          cols="30"
          placeholder="Enter student name list by comma seperated formate ex: kalaiselvan, kalaiselvi, kalaivani"
          onChange={(e) => handleStudent({ students: e.target.value })}
        ></textarea>
        <br />

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AssignStudentToMentor;
