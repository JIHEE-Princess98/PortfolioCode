import Box from '@mui/material/Box';

export const HeaderBar = () => {
    return (
        <div className="header-bar">
            <div className="container">
                CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
                <PCHeaderBar/>
                <MbHeaderBar/>
            </div>
        </div>
    )
}

const PCHeaderBar = () => {
    return(
        <Box sx={{display: { xs: 'none', sm: 'block' } }}>

        </Box>
    )
}

const MbHeaderBar = () => {
    return(
        <Box>

        </Box>
    )
}