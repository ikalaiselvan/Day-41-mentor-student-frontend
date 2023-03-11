import './App.css';
import {Routes, Route} from "react-router-dom";
import CreateMentor from './Components/CreateMentor';
import CreateStudent from './Components/CreateStudent';
import AssignStudentToMentor from './Components/AssignStudentToMentor';
import AssignMentorForStudent from './Components/AssignMentorForStudent';
import ShowStudentForMentor from './Components/ShowStudentsForMentor';
import Home from './Components/Home';

function App() {

  return (
    <div className="App">
      <Home />
      <Routes>
        <Route
          path="/"
          element={<h1 style={{"color":"green", "justifyContent": "center","text-align": "center", "display": "flex", "height": "100vh", "alignItems": "center"}}>Welcome to Mentor and student assign app</h1>}
        />
        <Route path="/mentor" element={<CreateMentor />} />
        <Route path="/student" element={<CreateStudent />} />
        <Route path="/assign-student" element={<AssignStudentToMentor />} />
        <Route path="/assign-mentor" element={<AssignMentorForStudent />} />
        <Route path="/show-students" element={<ShowStudentForMentor />} />
      </Routes>
    </div>
  );
}

export default App;