import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Notifications } from '@mui/icons-material';

interface HeaderProps {
    handleDrawerToggle: () => void;
    drawerWidth: number;
}

const Header = ({ handleDrawerToggle, drawerWidth }: HeaderProps) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                bgcolor: 'primary.main',
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Lloyds Bank
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="inherit">
                    <Notifications />
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
