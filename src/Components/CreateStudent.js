import { useState } from "react";
import axios from "axios";

function CreateStudent() {
  const [student, setStudent] = useState({
    studentName: "",
    department: "",
    time: "",
    mentorName: "",
    batch: "",
  });

  const handleChange = (event) => {
    setStudent((e) =>{
        return { ...e, ...event}
    })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `http://localhost:4000/API/student`,
        student,
        { withCredentials: true }
      );
      if (response.data.response.acknowledged) {
        alert("Student assigned successfully ...");
      }
    } catch (error) {
      console.log("Error: ", error);
      alert(error.response.data.message);
    }
  };

  console.log(student);

  return (
    <div className="App">
      <h1 className="header">Create Student Profile</h1>
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
        <label className="label" htmlFor="department">
          Department
        </label>
        <input
          className="input"
          type="text"
          id="department"
          name="department"
          placeholder="Full stack development"
          onChange={(e) => handleChange({ department: e.target.value })}
        />
        <br />
        <label className="label" htmlFor="batch">
          Batch
        </label>
        <input
          className="input"
          type="text"
          id="batch"
          name="batch"
          placeholder="Enter batch name"
          onChange={(e) => handleChange({ batch: e.target.value })}
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
        <br />

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateStudent;
