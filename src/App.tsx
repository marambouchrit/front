import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { UserDashboardPage } from "./Modules/UserDashboard/pages/UserDashboardPage";
import { Box, styled } from "@mui/material";
import Navbar from "./Modules/NavBar/Narbar";
import SuperviseurEquipe from "./Modules/SuperviseurDashboardPage/SuperviseurEquipe";
import AdminDashboardPage from "./Modules/AdminDashboard/pages/AdminDashboardPage";
import NoMatch from "./Modules/UserDashboard/components/NoMatch";
import LoginFormPage from "./Modules/UserDashboard/pages/LoginFormPage";
import { Navigate } from "react-router-dom";
//import SuperviseurEquipe from './Modules/SuperviseurDashboardPage/SuperviseurEquipe';
//import AdminDashboardPage from './Modules/AdminDashboard/pages/AdminDashboardPage';
//import NavbarSupervisor from './Modules/NavBar/NavBarSupervisor';

const AppBody = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[100],
}));
const MaxWidthBox = styled(Box)(() => ({
  padding: "0 2rem",
  maxWidth: "1280px",
  margin: "0 auto",
}));
function App() {
  return (
    <>
      <BrowserRouter>
        <AppBody>
          <Routes>
            <Route path="/login" element={<LoginFormPage />} />
          </Routes>
          <Navbar />
          <MaxWidthBox>
            <CssBaseline />
            <Routes>
              <Route path="/user-dashboard" element={<UserDashboardPage />} />
              <Route path="/mon-equipe" element={<SuperviseurEquipe />} />
              <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </MaxWidthBox>
        </AppBody>
      </BrowserRouter>
    </>
  );
}

export default App;
