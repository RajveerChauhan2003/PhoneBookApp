import "./Form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom'; 

function Form1() {
    const location = useLocation();
    const { id ,fname, mname, lname, email, PhoneNo1, PhoneNo2, Address } = location.state;

    const [formState, setFormState] = useState({
        id:id,
        fname: fname || "",
        mname: mname || "",
        lname: lname || "",
        email: email || "",
        PhoneNo1: PhoneNo1 || "",
        PhoneNo2: PhoneNo2 || "",
        Address: Address || "",
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/edit", formState);
            console.log("Data sent to backend");
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Edit Contact</legend>
                    <div className="input">
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            value={formState.fname}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="mname"
                            name="mname"
                            onChange={handleChange}
                            placeholder="Middle Name"
                            value={formState.mname}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                            value={formState.lname}
                        />
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
                                value={formState.PhoneNo1}
                            />
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                id="phone-number-2"
                                name="PhoneNo2"
                                onChange={handleChange}
                                placeholder="Phone No. 2"
                                value={formState.PhoneNo2}
                            />
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
                            value={formState.email}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            id="address"
                            name="Address"
                            onChange={handleChange}
                            placeholder="Address"
                            required
                            value={formState.Address}
                        />
                    </div>
                    <button type="submit" className="button">Save</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form1;
