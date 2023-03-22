import axios from 'axios'
import {  TextField, Button,Card, CardContent, Typography } from '@mui/material';


function PostData()  {

    const handleSubmit = (event) => {
        //event.preventDefault();
        const form = event.target;
        const data = {
          id: form.elements.id.value,
          name: form.elements.name.value,
          ciudad: form.elements.location.value,
          activos: form.elements.price.value,
          region: form.elements.region.value 
        };
        axios.post('http://localhost:3001/add/sucursal', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
    
    return(
        <div>
            
            <br/>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Card sx={{ maxWidth: 345, margin: 2, backgroundColor: 'black' }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                    Añadir sucursal
                    </Typography>
                </CardContent>
            </Card>
          </div>
             <form onSubmit={handleSubmit}>
                <TextField label="ID" name="id" size="small"  />
                <TextField label="Sucursal" name="name" size="small"  />
                <TextField label="Location" name="location" size="small" />
                <TextField label="Price" name="price" size="small"  />
                <TextField label="Region" name="region" size="small" />
                <Button type="submit" variant="contained" sx={{ marginLeft: 1, backgroundColor: 'green' }}>
                Crear Sucursal
                </Button>
            </form>
        </div>
        

    );
}export default PostData;