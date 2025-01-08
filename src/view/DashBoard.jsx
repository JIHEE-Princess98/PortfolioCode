import '../style/Dashboard.css';
import MainTitle from "../page/MainTitle.jsx";
import Service from "../page/Service.jsx";
import Skill from "../page/Skill.jsx";
import Project from "../page/Project.jsx";
import SubProject from "../page/SubProject.jsx";
import Contact from "../page/Contact.jsx";
import {HeaderBar} from "../components/HeaderBar.jsx";

function DashBoard(){
    return(
        <div>
            <HeaderBar/>
            Hello
            안녕
            <div>
                <MainTitle/>
                <Service/>
                <Skill/>
                <Project/>
                <SubProject/>
                <Contact/>
            </div>

        </div>
    )
}
export default DashBoard;