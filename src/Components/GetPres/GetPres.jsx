import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';



function GetPes()  {
  const navigate = useNavigate();

  const handleDelete = (id, sucursal) => {
    axios
      .delete('http://localhost:3001/delete/prestamo', { data: { id, sucursal } })
      .then(() => {
        console.log(`Deleted `);
      })
      .catch((err) => {
        console.error(err);
        console.log('Deletion failed!');
      });
  };

    const [Pres, setPres] = useState([]);
    const [PresT, setPresT] = useState([]);
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const fetchSucursalData = useCallback(() => {
        const sucursal = params.get("sucursal");
        axios
          .get("http://localhost:3001/data/prestamo/" + sucursal)
          .then((res) => {
              console.log(res.data);
              setPres(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
      }, []);
      
      useEffect(() => {
        fetchSucursalData();
      }, [fetchSucursalData]);

      const fetchSucursalDataT = useCallback(() => {
        const sucursal = params.get("sucursal");
        axios
          .get("http://localhost:3001/data/prestamototal/" + sucursal)
          .then((res) => {
              console.log(res.data);
              setPresT(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
      }, []);
      
      useEffect(() => {
        fetchSucursalDataT();
      }, [fetchSucursalDataT]);
    return(
        <>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {PresT.map(([id, sucursal, cantidad]) => (
          <Card key={id} sx={{ maxWidth: 345, margin: 2, backgroundColor: '#F44336' }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{ color: '#333333' }}>
                {id} - {sucursal}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                Total: ${cantidad}
              </Typography>
            </CardContent>
          </Card>
          ))}
          </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Pres.map(([id, sucursal, cantidad]) => (
          <Card key={id} sx={{ maxWidth: 345, margin: 2, backgroundColor: '#007580' }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{ color: 'black' }}>
                {id}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                ${cantidad}
              </Typography>
            </CardContent>
            <IconButton aria-label="delete" size="small" onClick={(event) => handleDelete(id, sucursal, event)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
          </Card>
          ))}
          </div>
          </>
    );
}export default GetPes;