import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import {projectItem} from "../data.js";


function Project() {
    return (
        <div className="main-project">
            <h1>경력 기술서</h1>
            <Grid container>
                {
                    projectItem.map((item) => (

                        <Grid item xs={12} md={12} sx={{mt: {xs: 3, md: 5},}} key={item.project_id}>
                            <Card variant="outlined" sx={{mt: 2, ml: 2}}>
                                <Box sx={{p: 2}}>
                                    <Stack
                                        direction="row"
                                        sx={{justifyContent: 'space-between', alignItems: 'center'}}
                                    >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.project_name}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.project_type}
                                        </Typography>
                                    </Stack>
                                    <Typography gutterBottom variant="p" component="div">
                                        {item.project_SubName}
                                    </Typography>

                                    {
                                        item.project_explan.map((explan) => (
                                            <Typography key={explan.ex_id}
                                                        variant="body2" sx={{color: 'text.secondary'}}>
                                                <small>●</small> {explan.ex_content} <br/>
                                            </Typography>
                                        ))
                                    }

                                </Box>
                                <Divider/>
                                <Box sx={{p: 2}}>
                                    <Typography gutterBottom variant="body2">
                                        사용언어
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{mt: 1}}>
                                        {item.project_lang.map((lang) => (

                                            <Chip
                                                color={lang.lang_color === 0 ? "primary" : ""}
                                                key={lang.lang_id}
                                                label={lang.lang_type}
                                                size="small"
                                            />

                                        ))}
                                    </Stack>

                                </Box>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    )
}

export default Project