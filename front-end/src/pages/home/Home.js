import "./Home.css";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import Modals from "../modals/Modals";
import axios from "axios";

export default function Home() {
  let [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const[search , setSearch] = useState("")
  const[option , setOption] = useState("FirstName")
  useEffect(() => {
    if (search.trim() !== '')
    {
        axios.post('http://localhost:5000/search', { searchData: search, Option: option })
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error:', error.message);
        });
    }
   
  }, [search,option]);

  useEffect(() => {
    if (search.trim() === '') { // Check if search field is empty
      fetch("http://localhost:5000/get")
        .then((response) => response.json())
        .then((data) => {
          const sorted_data = data.sort((a, b) =>
            a["FirstName"].localeCompare(b["FirstName"])
          );
          setUserData(sorted_data);
        })
        .catch((error) => {
          console.error("Error while fetching data: ", error);
        });
    }
  }, [search]);
  function handleOnChangeSearch(e)
  {
     setSearch(e.target.value)
     console.log(e.target.value)
  }
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setOption(selectedValue);
  }
  return (
    <div className="home">
      {showModal && <Modals {...modalData} setShowModal={setShowModal}></Modals>}
      <div className="sidebar">
        <div className="profile">
          <img src="https://rb.gy/u00sgm" alt="" />
          HI LUFFY
          <Link className="addnewbtn" to="/add">
            Add New
          </Link>
        </div>
        <div className="options">
          <LogOut />
          Log out
        </div>
      </div>
      <div className="contacts">
        <div className="search">
          <input
            type="text"
            placeholder="Search here...
                    " onChange={handleOnChangeSearch}
          /><select defaultValue={option} onChange={handleSelectChange}>
            <option value='FirstName'>FirstName</option>
            <option value='MiddleName'>MiddleName</option>
            <option value='LastName'>LastName</option>
            <option value='PhoneNo1'>PhoneNo1</option>
            <option value='PhoneNo2'>PhoneNo2</option>
            <option value='Address'>Address</option>
          </select>
        </div>

        
        <div className="cards">
          {userData.map((data, index) => {
            return (
              <Card
                id = {data.id}
                fname={data.FirstName}
                lname={data.LastName}
                mname={data.MiddleName}
                email={data.Email}
                PhoneNo1={data.PhoneNo1}
                PhoneNo2={data.PhoneNo2}
                Address={data.Address}
                setShowModal={setShowModal}
                setModalData={setModalData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
