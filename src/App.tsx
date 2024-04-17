import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Menu from "./components/menu/Menu";
import "./App.css";

const ImportFiles = lazy(() => import("./components/importFiles/ImportFiles"));

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <Row>
          <Router>
            <Col sm={2}>
              <Menu />
            </Col>
            <Col sm={10}>
              <Routes>
                <Route
                  path="/import-files"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ImportFiles />
                    </Suspense>
                  }
                />
              </Routes>
            </Col>
          </Router>
        </Row>
      </Container>
    </>
  );
}
