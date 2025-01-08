import '../style/Dashboard.css';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainTitle from "../page/MainTitle.jsx";
import Service from "../page/Service.jsx";
import Skill from "../page/Skill.jsx";
import Project from "../page/Project.jsx";
import SubProject from "../page/SubProject.jsx";
import Contact from "../page/Contact.jsx";
import {Button} from "@mui/material";

const navItems = ['Home', 'About', 'Contact'];
function ElevationScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return children
        ? React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        })
        : null;
}

ElevationScroll.propTypes = {
    children: PropTypes.element,
    window: PropTypes.func,
};


function DashBoard(props) {

    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
                            KIMJIHEE | PORTFOLIO
                        </Typography>



                        <Box>
                            {/*{navItems.map((item) => (*/}
                            {/*    <Button key={item} sx={{ color: '#fff', marginLeft: 0.5 }} variant="outlined">*/}
                            {/*        {item}*/}
                            {/*    </Button>*/}
                            {/*))}*/}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
            <Container maxWidth="lg">
                <Box sx={{my: 2}}>
                    <MainTitle/>
                    <Service/>
                    <Skill/>
                    <Project/>
                    <SubProject/>
                    <Contact/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

DashBoard.propTypes = {
    window: PropTypes.func,
};

export default DashBoard;
