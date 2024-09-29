import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid2, Toolbar, Container } from '@mui/material';

import { StyledContainer, StyledIcon, StyledButton } from './styles';

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
                        <Typography variant="h5" align="center" color="text.secondary" component="p">
                        A visually engaging photo album application developed using MUI 5 (Material UI), showcasing a seamless user experience for organizing and viewing your favorite memories.
                        </Typography>
                        <div>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item>
                                    <StyledButton variant="contained" color="primary">
                                        See my photos
                                    </StyledButton>
                                </Grid2>
                                <Grid2 item>
                                    <StyledButton variant="outlined" color="primary">
                                        Secondary action
                                    </StyledButton> 
                                </Grid2>
                            </Grid2>
                        </div>
                    </Container>
                </StyledContainer>
                <Container maxWidth="md">
                    <Grid2 container spacing={4}>
                        <Grid2 item>
                            <Card>
                                <CardMedia
                                    image="https://source.unslash.com/random"
                                    title="Image Title"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. Use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Container>
            </main>
        </>
    )
}