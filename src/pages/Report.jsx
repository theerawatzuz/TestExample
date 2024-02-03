import Layout from "../components/Layout";
import '../styles/global.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';

function Report() {
  return (
    <Layout>
      <React.Fragment>
        <Box sx={{  height: '100vh'  ,mt: 2}}>
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <Card variant="outlined" sx={{p:1 , bgcolor: "#DADADA",  borderRadius: '16px'}}>
                <Box sx={{ display: "flex", justifyContent: 'space-between' , ml:2}}>
                  <Typography variant="body1" component="div">ยังไม่ระบุหมวดหมู่</Typography>
                  <IconButton aria-label="more" size="small" sx={{color: 'gray'}}>
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'start' , ml:1 , alignItems: 'center'}}>
                  <IconButton aria-label="more" size="small">
                      <LocationOnOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" component="div">
                    -
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'start' , ml:1 , alignItems: 'center'}}>
                  <IconButton aria-label="more" size="small">
                      <PhoneCallbackOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" component="div">
                    -
                  </Typography>
                </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box>ไทย</Box>
              </Grid>
            </Grid>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
    </Layout>
  );
}

export default Report;
