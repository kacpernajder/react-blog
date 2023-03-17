import axios from "axios";
import { useState, useEffect } from "react"
import "./sidebar.css"

export default function Sidebar() {
const [cat,setCats] = useState([]);

useEffect(()=>{
  const getCats = async ()=>
  {
    const res = await axios.get("/categories")
    setCats(res.data)
  };
  getCats();
}, []);

  return (
          <>
          <nav id="sidebarMenu" class="sidebar collapse d-lg-block sidebar collapse bg-white">
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              {cat.map((c) => (
                <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
                >
                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>{c.name}</span>
                </a>
              ))}
            </div>
          </div>
          </nav>
    </>
  )
}
