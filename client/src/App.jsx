import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { AuthProvider } from "./context/auth";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Container>
            <Menubar />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/register" Component={Register} />
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
