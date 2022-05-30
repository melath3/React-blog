import axios from "axios";
import { useEffect, useState } from "react"
import {Link} from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
const getCats =async ()=>{
  const res = await axios.get("/Catagories")
  setCats(res.data)
};
getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <br />
          <img className="sidebarImg" 
            src="/images/aboutme.jpg"
            alt="" 
           />
           
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATAGORY</span>
      <ul className="sidebarList">
        {cats.map((c)=> (
        
          <div key= {c._id}>
            <Link   to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
          </div>
))}
      </ul>
     </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-facebook-square"></i>
      <i className="sidebarIcon fa-brands fa-twitter-square"></i>
      <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
      <i className="sidebarIcon fa-brands fa-instagram-square"></i>
    </div>

    </div>
    </div>
  )
}
