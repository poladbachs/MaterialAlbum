import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid2, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

import { StyledContainer, StyledIcon } from './styles';

export default function App() {
    return (
        <> 
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <StyledIcon/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar> 

            <main>
                <StyledContainer>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" component="p" gutterBottom>
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
                </StyledContainer>
            </main>
        </>
    )
}