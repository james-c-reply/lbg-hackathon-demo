import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#006A4D', // Lloyds Green
            dark: '#024731',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#005E44', // Slightly different green or action color
        },
        background: {
            default: '#F3F5F6', // Light gray background
            paper: '#ffffff',
        },
        text: {
            primary: '#111111',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: [
            '"Open Sans"',
            '"Helvetica"',
            '"Arial"',
            'sans-serif',
        ].join(','),
        h4: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
    },
});

export default theme;
