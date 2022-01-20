import { BrowserRouter as Router } from "react-router-dom";

import { AnimateSharedLayout } from "framer-motion";
import MyRoutes from "./routes";
import { NewBuildProvider } from "./context/NewBuildContext/NewBuildContext";
import { NavBarProvider } from "./context/NavBarContext/NavBarContex";

function App() {
  return (
    <NavBarProvider>
      <NewBuildProvider>
        <Router>
          <AnimateSharedLayout>
            <div className="App">
              <MyRoutes />
            </div>
          </AnimateSharedLayout>
        </Router>
      </NewBuildProvider>
    </NavBarProvider>
  );
}

export default App;
