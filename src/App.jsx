import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
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
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" component="p">
                        A visually engaging photo album application developed using MUI 5 (Material UI), showcasing a seamless user experience for organizing and viewing your favorite memories.
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    )
}