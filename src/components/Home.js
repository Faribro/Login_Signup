import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Link } from 'react-router-dom';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello, Welcome <br />
        {user && user.email } <br />
          to CRUD
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
       <div>
      <Link to="https://g7uw79-3000.csb.app/employee/create">
        <button>Let's CRUD</button>
      </Link>
    </div>
    </>
  );
};

export default Home;
