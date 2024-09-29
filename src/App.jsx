import { Typography, AppBar, Button, Card, CardActions, CssBaseline, Grid, Toolbar, Container } from '@mui/material';

import { StyledContainer, StyledIcon, StyledButton, CardGrid, StyledCardMedia, StyledCardContent, StyledFooter } from './styles';

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
                            A sample photo album template built with MUI 5 (Material UI) to demonstrate the usage of components, custom styling, and responsive layouts. This project is designed as a hands-on practice to explore Material UI's capabilities for building engaging user interfaces.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <StyledButton variant="contained" color="primary">
                                        See my photos
                                    </StyledButton>
                                </Grid>
                                <Grid item>
                                    <StyledButton variant="outlined" color="primary">
                                        Secondary action
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </StyledContainer>
                <CardGrid maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
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
                            </Grid>
                        ))}
                    </Grid>
                </CardGrid>
            </main>
            <StyledFooter>
                <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
                    © 2024 Bachs Enterprises. All rights reserved.
                </Typography>
            </StyledFooter>
        </>
    )
}