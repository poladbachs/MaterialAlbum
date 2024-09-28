import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid2, Toolbar, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
}));