import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography} from '@mui/material';
import { Link } from 'react-router-dom';



function GetData()  {

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
        {data.map(([id, name, location, price]) => (
        <Link to={`/Show?sucursal=${id}`} key={id } style={{ textDecoration: 'none' }}>
          <Card key={id} sx={{ maxWidth: 345, margin: 2, backgroundColor: '#0F2D3F' }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{ color: '#D3D3D3' }}>
                {id} - {name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#D3D3D3' }}>
                {location}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#D3D3D3' }}>
                ${price}
              </Typography>
            </CardContent>
          </Card>
        </Link>
        ))}
      </div>

    );
}export default GetData;