import "./home.css"
import Header from "../../header/Header"
import Sidebar from "../../Sidebar/Sidebar"
import Posts from "../../posts/Posts"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
