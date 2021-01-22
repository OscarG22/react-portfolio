

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Project from "./components/pages/Project";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Project} />
        
        
      </div>
    </Router>
  );
}

export default App;