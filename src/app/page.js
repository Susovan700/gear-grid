import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import "./page.css";

export default function Home(){
  return(  
  <div className="home-main">
    <Navbar/>
    <Hero/>
  </div>
)

}