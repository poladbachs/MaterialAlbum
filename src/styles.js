import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, Grid2, Toolbar, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PhotoCamera } from '@mui/icons-material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
}));

export const StyledIcon = styled(PhotoCamera)(({ theme }) => ({
    marginRight: theme.spacing(3),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));

export const CardGrid = styled(Container)(({ theme }) => ({
    padding: '20px 0'
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: '56.25%' // 16:9 dim
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: '1'
}));