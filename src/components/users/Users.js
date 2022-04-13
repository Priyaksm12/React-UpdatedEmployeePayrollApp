import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import profile1 from '../../Assets/profile-images/Ellipse -3.png';
import profile2 from '../../Assets/profile-images/Ellipse -1.png';
import profile3 from '../../Assets/profile-images/Ellipse -8.png';
import profile4 from '../../Assets/profile-images/Ellipse -7.png';
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        name: '',
            profileArray: [
                { url: '../../Assets/profile-images/Ellipse -3.png' },
                { url: '../../Assets/profile-images/Ellipse -1.png' },
                { url: '../../Assets/profile-images/Ellipse -8.png' },
                { url: '../../Assets/profile-images/Ellipse -7.png' }
    
            ],
            allDepartment: [
                'HR', 'Sales', 'Finance', 'Engineer', 'Others'
            ],
            departMentValue: [],
            gender: '',
            salary: '',
            day: '',
            month: '',
            year: '',
            startDate: '',
            notes: '',
            id: '',
            profilePic: '',
            isUpdate: false,
            error: {
                department: '',
                name: '',
                gender: '',
                salary: '',
                profilePic: '',
                startDate: ''
            }
      });
      const { id } = useParams();
    useEffect(() => {
      loadUser();
    }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="">
          <div>
              <h1 className="display-4">User Id: {user.id}</h1>
              
          </div>
          <div className="card">
                <img  src={
                            user.profilePic ===
                            "../../Assets/profile-images/Ellipse -3.png"
                              ? profile1
                              : user.profilePic ===
                                "../../Assets/profile-images/Ellipse -1.png"
                              ? profile2
                              : user.profilePic ===
                                "../../Assets/profile-images/Ellipse -4.png"
                              ? profile3
                              : profile4
                          } alt="Avatar" style={{"width":"50%"}}/>
                <div className="card-content">
                    <h4><b> {user.name}</b></h4> 
                    <p>Department : <b>{user.departMentValue}</b></p> 
                    <p>Gender : <b>{user.gender}</b></p>
                    <p>Salary : <b>{user.salary}</b></p>
                    <p>Start Date : <b>{user.day+'-'+user.month+'-'+user.year}</b></p>
                </div>
          </div>
         
      <div style={{"margin":"25px"}}>
        <Link className="backbutton" to="/">Back to Home</Link> 
      </div>
    </div>
  );
};

export default User;



