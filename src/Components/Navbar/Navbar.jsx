import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Button color="inherit" component={Link} to="/">
          Bank Data 
        </Button>
        </Typography>
        
        <Button color="inherit" component={Link} to="/Insert">
          Add Sucursal
        </Button>
        <Button color="inherit" component={Link} to="/InsertP">
          Add prestamo
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;