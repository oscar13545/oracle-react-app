import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';



function GetData()  {

  const handleDelete = (id, region) => {
    axios
      .delete('http://localhost:3001/delete/sucursal', { data: { id, region } })
      .then(() => {
        console.log(`Deleted `);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
    
    const [data, setData] = useState([]);
    const fetchSucursalData = useCallback(() => {
        axios
        .get("http://localhost:3001/data/sucursal")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    useEffect(() => {
        fetchSucursalData();
    }, [fetchSucursalData]);
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map(([id, name, location, price, region]) => (
          <Card key={id} sx={{ maxWidth: 345, margin: 2, backgroundColor: '#0F2D3F' }}>
            <CardContent>
              <Link to={`/Show?sucursal=${id}`} key={id } style={{ textDecoration: 'none' }}>
              <Typography gutterBottom variant="h4" component="div" sx={{ color: '#D3D3D3' }}>
                {id} - {name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#D3D3D3' }}>
                {location}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#D3D3D3' }}>
                ${price}
              </Typography>
              </Link>
            </CardContent>
            <IconButton aria-label="delete" size="large" onClick={(event) => handleDelete(id, region, event)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
          </Card>
        
        ))}
      </div>

    );
}export default GetData;