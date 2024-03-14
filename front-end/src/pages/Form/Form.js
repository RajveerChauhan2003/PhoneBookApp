import "./Form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Form() {
  const [formState, setFormState] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    PhoneNo1: "",
    PhoneNo2: "",
    Address: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/add", formState)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    console.log("Data send to backend");
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Contact</legend>
            <div className="input">
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={handleChange}
                placeholder="First Name"
                required
              ></input>
            </div>

            <div className="input">
              <input
                type="text"
                id="mname"
                name="mname"
                onChange={handleChange}
                placeholder="Middle Name"
              ></input>
            </div>

            <div className="input">
              <input
                type="text"
                id="lname"
                name="lname"
                onChange={handleChange}
                placeholder="Last Name"
                required
              ></input>
            </div>

            <div className="contacts">
              <div className="input">
                <input
                  type="text"
                  id="phone-number-1"
                  name="PhoneNo1"
                  onChange={handleChange}
                  placeholder="Phone No. 1"
                  required
                ></input>
              </div>

              <div className="input">
                <input
                  type="text"
                  id="phone-number-2"
                  name="PhoneNo2"
                  onChange={handleChange}
                  placeholder="Phone No. 2"
                ></input>
              </div>
            </div>

            <div className="input">
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                required
              ></input>
            </div>

            <div className="input">
              <input
                type="text"
                id="address"
                name="Address"
                onChange={handleChange}
                placeholder="Address"
                required
              ></input>
            </div>
            <button type="submit"  className="button">Save</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
