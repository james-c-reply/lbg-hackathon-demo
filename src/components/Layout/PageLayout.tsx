import { useState } from 'react';
import { Box, Toolbar, CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const drawerWidth = 240;

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default PageLayout;
