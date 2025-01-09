import Grid from '@mui/material/Grid';
import jiheeImage from '../assets/images/computer_img.png';
import IconButton from "@mui/material/IconButton";
import {FaGithub} from "react-icons/fa";
import {SiNotion} from "react-icons/si";
import {FaBloggerB} from "react-icons/fa";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";

function MainTitle() {
    return (
        <div className="main_title_bg">
            <Grid container>
                <Grid item xs={12} md={8} sx={{mt: 3}}>
                    <div className="title-grid">
                        <div className="circle-container">
                            <Grid container>
                                <Grid item xs={12} md={12}>
                                    <SiteTitle/>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <Introduce/>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <ContactButton/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} sx={{mt: 3, display: {xs: 'none' ,md: 'block'}}}>
                    <div className="title-grid">

                        <div className="circle-container">
                            <div className="circle">
                                <img src={jiheeImage} alt="jihee_img" className="adjustable-image"/>
                            </div>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

const SiteTitle = () => {
    const handleGithubOpen = () => {
        window.open('https://github.com/JIHEE-Princess98')
    }
    const handleNotionOpen = () => {
        window.open('https://www.notion.so/FrontEnd-10ef3185ddac4e3f84b601aa9805a679')
    }
    const handleTstoryOpen = () => {
        window.open('https://kimjihee1113.tistory.com/');
    }

    return (
        <Box sx={{ml: 2}}>
            <IconButton aria-label="delete" size="large"
                onClick={handleGithubOpen}
            >
                <FaGithub fontSize="inherit"/>
            </IconButton>
            <IconButton aria-label="delete" size="large"
                onClick={handleNotionOpen}
            >
                <SiNotion fontSize="inherit"/>
            </IconButton>
            <IconButton aria-label="delete" size="large"
                onClick={handleTstoryOpen}
            >
                <FaBloggerB fontSize="inherit"/>
            </IconButton>
        </Box>
    )
}
const Introduce = () => {
    const [title, setTitle] = useState('');
    const [count,setCount] = useState(0);
    const completion = 'JIHEE KIM'


    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTitle((prevTitleValue) => {
                let result = prevTitleValue ? prevTitleValue + completion[count] : completion[0];
                setCount(count + 1);

                if (count >= completion.length) {
                    setCount(0);
                    setTitle('');
                }

                return result;
            });
        }, 300);

        return () => {
            clearInterval(typingInterval);
        };
    });


    return (
        <Box sx={{ml: 4, mt: 5}} className="introduce-text">
            <h1>
                <span>Hello </span>
                <p>I am {title}</p>
            </h1>
            <h3>
                <span>“ <br/>
                    현실에 안주하지 않고 늘 발전을 위해 노력하는 <br/>
                    <strong>3년차 개발자</strong> 김지희입니다.
                   <br/>”</span>
            </h3>
            <small>FullStack developer & Web developer</small>
        </Box>
    )
}

const ContactButton = () => {
    return (
        <Box sx={{ml: 3, mt: 2}}>
            <button> CONTACT </button>
        </Box>
    )
}


export default MainTitle;