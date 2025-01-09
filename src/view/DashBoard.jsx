import '../style/Dashboard.css';

import MainTitle from "../page/MainTitle.jsx";
import Service from "../page/Service.jsx";
import Skill from "../page/Skill.jsx";
import Project from "../page/Project.jsx";
import SubProject from "../page/SubProject.jsx";
import Contact from "../page/Contact.jsx";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Container, ListItemIcon} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const drawerWidth = 240;
const navItems = [
    { label: 'HOME', icon: <HomeIcon /> },
    { label: 'SERVICE', icon: <BuildIcon /> },
    { label: 'SKILL', icon: <CodeIcon /> },
    { label: 'PROJECT', icon: <FolderIcon /> },
    { label: 'CONTACT', icon: <ContactMailIcon /> },
];

function DashBoard(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ my: 2, marginLeft: 3}}>
                PORT<strong>FOLIO</strong>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemIcon>
                                {item.icon} {/* 아이콘 렌더링 */}
                            </ListItemIcon>
                            <ListItemText primary={item.label} /> {/* 텍스트 렌더링 */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'} }}
                    >
                        PORT<strong style={{color: '#ca6378'}}>FOLIO</strong>
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item.label} sx={{ color: '#fff' }}>
                                {item.label} {/* 아이템의 텍스트만 렌더링 */}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

            <Container maxWidth={"lg"}>
                <div className="app">
                    {/*<HeaderBar/>*/}
                    <MainTitle/>
                    <Service/>
                    <Skill/>
                    <Project/>
                    <SubProject/>
                    <Contact/>
                </div>
            </Container>

        </Box>
    );
}

DashBoard.propTypes = {
    window: PropTypes.func,
};


export default DashBoard;
