import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import './Header.css'
export default function Header(props){
    const {theam,setTheam} = props
    function ToggleTheam(){
        if(theam ==="light"){
            setTheam("dark")
        }else{
            setTheam("light")
        }
    }
    return(
        
        <header>
            <div className="Logo">
                <span>Task Manage</span>
            </div>
            <div className="theme-container">
                <span>{theam === "light" ? "โหมดกลางวัน":"โหมดกลางคืน"}</span>
                <span className="icon"onClick={ToggleTheam}>
                {theam ==="light"? <FaSun/> :<FaMoon/>}
                </span>
            </div>
        </header>
    )
}