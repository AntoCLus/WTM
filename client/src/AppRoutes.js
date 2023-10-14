/*import { Routes, Route } from "react-router-dom";
import  ExpenseItem from "../src/components/ExpenseItem";
//import LoginForm from "./auth/LoginForm" <Route path="/login" element={<LoginForm />} />
import { useNavigate } from "react-router-dom";
import CalendarWTM from "../src/components/Calendar";
import LandingPage from "./components/LandingPage";

export const AppRoutes = () => {
  
  const isAuthenticated = true;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login"); // Redirect to login if not authenticated
  }

  return (
    <Routes>
      <Route path="/" element={<CalendarWTM />} />
      <Route path="/expenses" element={<ExpenseItem />} />
      <Route path="/home" element={<LandingPage />} />
      
    </Routes>
  );
};*/