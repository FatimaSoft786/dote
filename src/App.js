import NavBar from "../src/NavBar/navBar";
import { useState } from "react";
import Home from "./HomeSection/Home";
import Footer from "../src/HomeSection/Footer";
import Parents from "../src/Parents/Parents";
import PreSchool from "../src/Preschool/PreSchool";
import Early from "../src/EarlyEducation/Early_Education";
import Stories from "../src/Stories/Customer_Srories";
import Pricing from "../src/Pricing/Pricing";
import LessonPlans from "../src/LessonPlans/LessonPlans";
import CenterManagement from "../src/CenterManagement/centerManagement";
import Communication from "../src/Communication/communication";
import Ebooks from "../src/Ebooks/Ebooks";
import Blog from "../src/Blogs/Blog";
import Blogs from "../src/Blogs/Blogs";
import Webinar from "../src/Webinar/Webinar";
import Billing from "../src/Billing/Billing";
import Login from "../src/Account/login";
import Register from "../src/Account/register";
import Forgot from "../src/Account/forgotPassword";
import Reset from "../src/Account/ResetPassword";
import Sidebar from "../src/Dashboard/Sidebar";
import DashBoard from "../src/Dashboard/dashboard"
import StudentList from "../src/Students/StudentList";
import ChildFeed from "../src/Students/ChildFeed";
import Profile from "./Students/Profile";
import Attachment from "./Students/attachment";
import DailyReport from "./Students/DailyReport";
import ParentList from "./Students/ParentsList";
import RoomList from "./Students/Roomslist"
import Schedule from "./Staff/addSchedule";
import Schedules from "./Staff/Schedule";
import Library from "./Billing/Library"
import Upcoming from "./Billing/Upcoming";
import AccountDetails from "./Billing/AccountDetails";
import TransactionHistory from "./Billing/TransactionHistory";
import Payers from "./Billing/Payers";
import CurrentActivity from "./Billing/CurrentActivity";
import NewProgram from "./Program/NewProgram";
import ProgramList from "./Program/Programlist";
import Waitlist from "./Program/Waitlist";
import RegistrationForm from "./Account/RegistrationForm";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Student from "../src/Students/addStudent";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Router>
    
          <NavBar/>

          
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/forgot" element={<Forgot />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path = "/pricing" element={<Pricing/>}/>
            <Route exact path="/resources" element={<Parents/>}/>
            <Route exact path="/sidebar" element={<Sidebar/>}>{isLoggedIn && <NavBar />}</Route>
          </Routes>
        

        {/* <Parents/> */}
        {/* <Home /> */}
        {/* <PreSchool/> */}
        {/* <Early/> */}
        {/* <Stories/> */}
        {/* <Pricing/> */}

        {/* <LessonPlans/> */}

        {/* <CenterManagement/> */}

        {/* <Communication/> */}

        {/* <Ebooks/> */}
        {/* <Blog/> */}
        {/* <Blogs/> */}

        {/* <Webinar/> */}
        {/* <Billing/> */}

        {/* <Register/> */}
        {/* <Forgot/> */}

        {/* <Sidebar/> */}
        
     
        {/* <DashBoard/> */}
   {/* <Student/> */}

   {/* <StudentList/> */}

   {/* <ChildFeed/> */}

   {/* <Profile/> */}

   {/* <Attachment/> */}

   {/* <DailyReport/> */}

   {/* <ParentList/> */}
   {/* <RoomList/> */}
   {/* <Schedules/> */}
   {/* <Library/> */}
   {/* <Upcoming/> */}

   {/* <AccountDetails/> */}

   {/* <TransactionHistory/> */}
   {/* <Payers/> */}
     {/* <CurrentActivity/> */}

   {/* <NewProgram/> */}

   {/* <ProgramList/> */}

   {/* <Waitlist/> */}

   {/* <RegistrationForm/> */}



      </Router>
   
    </div>
  );
}

export default App;


//  <Route exact path="/">
// {isLoggedIn ? <Redirect to="/dashboard" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
// </Route>