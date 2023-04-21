
import Header from './Components/Header/Header';
import './App.css'
import SkillContainer from './Components/SkillContainer/SkillContainer';
import TopContainer from './Components/TopContainer/TopContainer';
import ProjectContainer from "./Components/ProjectContainer/ProjectContainer"
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div >
      <Header></Header>
      <div>
      <TopContainer></TopContainer>
      <SkillContainer></SkillContainer>
      <ProjectContainer></ProjectContainer>
      <Contact></Contact>
      </div>
      
      
    </div>
  );
}

export default App;
