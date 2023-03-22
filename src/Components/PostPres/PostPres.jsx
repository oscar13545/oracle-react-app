import axios from 'axios'
import {  TextField, Button,Card, CardContent, Typography } from '@mui/material';


function PostPres()  {

    const handleSubmit = (event) => {
        //event.preventDefault();
        const form = event.target;
        const data = {
          numprestamo: form.elements.id.value,
          id: form.elements.name.value,
          cantidad: form.elements.price.value,
        };
        axios.post('http://localhost:3001/add/prestamo', data, {
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
      
      return (
        <div>
          <br/>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Card sx={{ maxWidth: 345, margin: 2, backgroundColor: 'black' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                        Añadir prestamo
                        </Typography>
                    </CardContent>
                </Card>
            </div>
          <form onSubmit={handleSubmit}>
            <TextField label="Id del prestamo" name="id" size="small" />
            <TextField label="Id de la sucursal" name="name" size="small" />
            <TextField label="Cantidad" name="price" size="small" />
            <Button type="submit" variant="contained" sx={{ marginLeft: 1, backgroundColor: 'green' }}>
              Crear Prestamo
            </Button>
          </form>
        </div>
        

    );
}export default PostPres;