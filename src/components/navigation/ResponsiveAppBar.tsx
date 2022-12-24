import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import './navigation.css'
import { isTemplateExpression } from 'typescript';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  setPage: Function
  currentPage: number
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['HOME', 'ABOUT', 'WORK', 'CONTACT'];

export default function ResponsiveAppBar(props: Props) {
  const { setPage, currentPage, window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activePage, setActivePage] = useState('')

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} onClick={() => setPage(0)}>
        <img src="FM-logo.png" alt="" style={{width: '70px', alignItems: 'center'}} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, counter) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => setPage(counter)} sx={{ textAlign: 'center', color: `${activePage === item ? '#5cb9a6':'#fff'}` }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    switch(currentPage){
      case 0:
        setActivePage('HOME')  
      break;
      case 1:
        setActivePage('ABOUT')  
      break;
      case 2:
        setActivePage('WORK')  
      break;
      case 3:
        setActivePage('CONTACT')  
      break;
    }
  }, [currentPage, activePage])
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{background: 'transparent', boxShadow: 'none'}}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => setPage(0)}
          >
          <img src="FM-logo.png" alt="" style={{width: '50px', alignItems: 'center'}}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', alignItems: 'center', textAlign: 'center', width: '100%' } }}>
            {navItems.map((item, counter) => (
              <button className='buton-hover' onClick={() => {
                setPage(counter)
                setActivePage(item)
                }}  key={item} style={{ color: `${activePage === item ? '#5cb9a6':'#fff'}` }}>
                {item}
              </button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
            background: '#292929',boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}