import axios from "axios";
import Logo from "../Logo/Logo";
import "./Modals.css";
import {  CircleX } from "lucide-react";
import { useNavigate } from 'react-router-dom';
// import Form from '../Form/Form.js'

export default function Modals(props) {
    const navigate = useNavigate();
    let {id, fname , mname , lname , email , PhoneNo1 , PhoneNo2 , Address} = props
    const editContact = (e)=>{
        e.preventDefault();
        navigate('/edit', {
            state: {
                id,
                fname,
                mname,
                lname,
                email,
                PhoneNo1,
                PhoneNo2,
                Address
              }
          });
    }
    function deleteContact()
    {
        axios(`http://localhost:5000/delete?id=${id}`)
        props.setShowModal(false)
        navigate('/')
        window.location.reload();
    }

  return (
    <div className="Modal-wrapper">
      <div className="Modal">
        <div className="icons">
          <Logo className="logo" />
          <CircleX
            className="close"
            onClick={() => props.setShowModal(false)}
          ></CircleX>
        </div>

        <div className="details">
          <div>
            <span>
              Name : {props.fname} {props.mname} {props.lname}
            </span>
          </div>
          <div>
            <span>Email : {props.email}</span>
          </div>
          <div>
            <span>PhoneNo1 : {props.PhoneNo1}</span>
          </div>
          <div>
            <span>PhoneNo2 : {props.PhoneNo2}</span>
          </div>
          <div>
            <span>Address : {props.Address}</span>
          </div>
        </div>
        <div className="operations">
          <button className="editbtn" onClick={editContact}>Edit</button>
          <div className="deletebtn" onClick={deleteContact}>Delete</div>
        </div>
      </div>
    </div>
  );
}
