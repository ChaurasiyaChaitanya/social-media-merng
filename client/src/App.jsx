import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { AuthProvider } from "./context/auth";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Postform from "./pages/Postform";
import Singlepost from "./pages/Singlepost";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Container>
            <Menubar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/postform" element={<Postform />} />
              <Route exact path="/posts/:postId" element={<Singlepost />} />
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
