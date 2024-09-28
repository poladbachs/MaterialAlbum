import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function App() {
    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                </Toolbar>
            </AppBar>
        </>
    )
}