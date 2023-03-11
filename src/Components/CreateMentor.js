import { useState } from "react";
import axios from "axios";

function CreateMentor() {
  const [mentor, setMentor] = useState({
    mentorName: "",
    department: "",
    time: "",
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
        `http://localhost:4000/API/mentor`,
        mentor,
        { withCredentials: true }
      );
        if (response.data.response.acknowledged) {
          alert("Mentor assigned successfully ...");
        }
    } catch (error) {
      console.log("Error: ", error);
      alert(error.response.data.message);
    }
  };

//   console.log(mentor);

  return (
    <div className="App">
      <h1 className="header">Create Mentor Profile</h1>
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
        <label className="label" htmlFor="name">
          Department
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Full stack development"
          onChange={(e) => handleChange({ department: e.target.value })}
        />
        <br />
        <label className="label" htmlFor="time">
          Available time
        </label>
        <select
          className="input"
          id="time"
          name="time"
          onChange={(e) => handleChange({ time: e.target.value })}
        >
          <option value="">select option</option>
          <option value="Weeek day">Weeek day</option>
          <option value=">Week end">Week end</option>
        </select>
        <br />

        {/* <label htmlFor="availability">Availability:</label> */}
        {/* <select id="availability" name="availability">
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="flexible">Flexible</option>
        </select> */}

        <label className="label" htmlFor="description">
          Students
        </label>
        <textarea
          className="input"
          id="description"
          name="description"
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

export default CreateMentor;
