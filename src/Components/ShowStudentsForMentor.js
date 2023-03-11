import { useState } from "react";
import axios from "axios";

function ShowStudentForMentor() {
  const [student, setStudent] = useState({
    mentorName: "",
  });
  const[ data, setData] = useState([{}])
//   data.map((e)=>console.log(e));

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `https://day-41-mentor-student-backend-production.up.railway.app/API/show-students`,
        student,
        { withCredentials: true }
      );
      setData(response.data.result);
      
      if (response.data.message) {
        alert("Student assigned successfully ...");
      }
    } catch (error) {
      console.log("Error: ", error);
      alert(error.message);
    }
  };

  // console.log(data);

  return (
    <div className="App">
      <h1 className="header">Show students list for mentor </h1>
      <form>
        <label className="label" htmlFor="mentor">
          Mentor Name
        </label>
        <input
          className="input"
          type="text"
          id="mentor"
          name="mentor"
          placeholder="Ragav kumar"
          onChange={(e) => setStudent({ mentorName: e.target.value })}
        />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
        <br />
        <br />
        <br />
        <label style={{ fontSize: "30px", color: "green" }} htmlFor="mentor">
          Students list for particular mentor
        </label>
        {data.map((e) => (
            <ul>
             <li>{e.studentName}</li>
           </ul>
        ))}
      </form>
    </div>
  );
}

export default ShowStudentForMentor;

