import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid2, Toolbar, Container } from '@mui/material';

import { StyledContainer, StyledIcon, StyledButton, CardGrid, StyledCardMedia, StyledCardContent } from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function App() {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <StyledIcon />
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
                <CardGrid maxWidth="md">
                    <Grid2 container spacing={4}>
                        {cards.map(() => (
                            <Grid2 item>
                                <Card>
                                    <StyledCardMedia
                                        image="https://dec-energy.ch/images/mountain-pv.jpeg"
                                        title="Image Title"
                                    />
                                    <StyledCardContent>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. Use this section to describe the content.
                                        </Typography>
                                    </StyledCardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </CardGrid>
            </main>
        </>
    )
}