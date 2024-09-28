import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid2, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export default function App() {
    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar> 

            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" component="p">
                        A visually engaging photo album application developed using MUI 5 (Material UI), showcasing a seamless user experience for organizing and viewing your favorite memories.
                        </Typography>
                        <div>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid2>
                                <Grid2 item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button> 
                                </Grid2>
                            </Grid2>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}