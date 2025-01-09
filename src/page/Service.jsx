import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

function Service(){


    return(
        <div className="main-service">
            <h1>SERVICE</h1>
            <Grid container>
                <Grid item xs={12} md={6} sx={{mt: {xs: 3, md: 5}}}>
                    <Card sx={{height: 220}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                디자인
                            </Typography>
                            <Typography variant="h5" component="div">
                                Design
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>PhotoShop</Typography>
                            <Typography variant="body2">
                                간단한 웹 레이아웃을 표출하며, 합성 또는 누끼 등
                                디자인을 제작 추출을 합니다.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{mt: {xs: 3, md: 5}, pl: {sx: 0, md: 2}}}>
                    <Card sx={{height: 220}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                웹 퍼블리싱
                            </Typography>
                            <Typography variant="h5" component="div">
                                Web Publishing
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                Html5, MUI, Vutify, HighChart, Echart
                            </Typography>
                            <Typography variant="body2">
                                React, Vue, Html5 등 맞춰진 디자인에 맞게 다양한 CSS 처리를 하여 웹을 구현
                                할 수 있습니다.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{mt: 2}}>
                    <Card sx={{height: 220}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                프론트엔드
                            </Typography>
                            <Typography variant="h5" component="div">
                                FrontEnd
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                JavaScript, React, Vue
                            </Typography>
                            <Typography variant="body2">
                                Ajax 위한 axios,fetch,http.request,Promise 등 서버와의 통신방식을 사용합니다.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{mt: 2,pl: {sx: 0, md: 2}}}>
                    <Card sx={{height: 220}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                백엔드
                            </Typography>
                            <Typography variant="h5" component="div">
                                BackEnd
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                Node.js, Express.js, SpringBoot
                            </Typography>
                            <Typography variant="body2">
                                Ajax 위한 axios,fetch,http.request,Promise 등 서버와의 통신방식을 사용합니다.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>


                <Grid item xs={12} md={6} sx={{mt: 2}}>
                    <Card sx={{height: 220}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                데이터베이스
                            </Typography>
                            <Typography variant="h5" component="div">
                                DataBase
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                PostgreSQL, MySQL, MariaDB
                            </Typography>
                            <Typography variant="body2">
                                데이터베이스를 통해 간단한 테이블설계, 테이블제작, 트리거 , 쿼리를 사용하여 동적 데이터 동작을 표출합니다.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} sx={{mt: 2, pl: {sx: 0, md: 2}}}>
                    <Card sx={{height: 220}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                IOT 오픈소스 플랫폼
                            </Typography>
                            <Typography variant="h5" component="div">
                                Mobius
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                Node.js
                            </Typography>
                            <Typography variant="body2">
                                다양한 IoT 디바이스와 애플리케이션을 연결하여 IoT 생태계를 편리하게 구축하고 관리할 수 있는
                                오픈소스 IOT 플랫폼 솔루션을 다룹니다.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </div>
    )
}
export default Service;