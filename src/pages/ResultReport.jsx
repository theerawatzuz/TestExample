import Layout from "../components/Layout"
import '../styles/global.css'
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';



function Resultreport() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Layout>
      <React.Fragment>
      <Container maxWidth="lg">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' , mt:5 , flexGrow: 1}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container>
      <Grid item xs={12} sm={8} md={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 , justifyContent: { xs: 'center', sm: 'flex-start' }}}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontWeight: activeIndex === 0 ? 'bold' : 'light',
                  '&:hover': { fontWeight: 'bold' },
                  cursor: 'pointer',
                }}
                onClick={() => handleItemClick(0)}
              >
                All
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: activeIndex === 1 ? 'bold' : 'light',
                  '&:hover': { fontWeight: 'bold' },
                  cursor: 'pointer',
                }}
                onClick={() => handleItemClick(1)}
              >
                Day
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: activeIndex === 2 ? 'bold' : 'light',
                  '&:hover': { fontWeight: 'bold' },
                  cursor: 'pointer',
                }}
                onClick={() => handleItemClick(2)}
              >
                Week
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: activeIndex === 3 ? 'bold' : 'light',
                  '&:hover': { fontWeight: 'bold' },
                  cursor: 'pointer',
                }}
                onClick={() => handleItemClick(3)}
              >
                Year
              </Typography>
            </Box>
          </Grid>
        <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-end' }}}>
          <Box>
            xs=6 md=4
            </Box>
        </Grid>
      </Grid>
    </Box>
        </Box>
      </Container>
    </React.Fragment>
    </Layout>
  )
}

export default Resultreport
