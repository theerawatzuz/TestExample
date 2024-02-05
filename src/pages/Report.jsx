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
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';


function Report() {
  const currentDate = dayjs();

  const [channel, setChannel] = React.useState('');

  const handleChange = (event) => {
    setChannel(event.target.value);
  };


  return (
    <Layout>
      <React.Fragment>
        <Box sx={{  height: '100vh'  ,mt: 2}}>
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <Card variant="outlined" sx={{p:1 , bgcolor: "#f0f5f5",  borderRadius: '16px'}}>
                <Box sx={{ display: "flex", justifyContent: 'space-between' , ml:2}}>
                  <Typography variant="body1" component="div" fontWeight="bold">ยังไม่ระบุหมวดหมู่</Typography>
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
              <Grid item xs={12} sm={12} md={9}>
                <Box >
                <FormControl style={{ width: '100%' }} >
                  <Box sx={{mb:3}}>
                  <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>การรับเรื่อง</Typography>
           
                  <Stack sx={{ xs: 12, sm: 12, md: 2, lg: 1}} direction="row" useFlexGap flexWrap="wrap">
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 2, md: 2 } }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoItem label="วัน รับเรื่อง *">
                                <DatePicker defaultValue={currentDate} size="small" />
                              </DemoItem>
                            </LocalizationProvider>
                          </Grid>
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 0, md: 2 } }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoItem label="เวลา รับเรื่อง *">
                                <TimePicker defaultValue={currentDate} size="small" />
                              </DemoItem>
                            </LocalizationProvider>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6}>
                            <DemoItem label="ช่องทาง *">
                              <Select
                                value={channel}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{ width: '100%' }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value="Email">Email</MenuItem>
                                <MenuItem value="Telephone">Telephone</MenuItem>
                                <MenuItem value="WebsiteReport">Website Report</MenuItem>
                              </Select>
                            </DemoItem>
                          </Grid>
                        </Stack>  
                  </Box>
                  <Box sx={{mb:3}}>
                  <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>ผู้แจ้งเรื่อง</Typography>
           
                  <Stack sx={{ xs: 12, sm: 12, md: 2, lg: 1}} direction="row" useFlexGap flexWrap="wrap">
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 2, md: 2 } }}>
                        
                              <DemoItem label="ชื่อ *">
                                <TextField 
                                fullWidth  
                                required
                                placeholder="ชื่อ"
                                id="name" />
                              </DemoItem>
                    
                          </Grid>
                          <Grid item xs={6} sm={6} md={3} sx={{ pr: { xs: 0, md: 2 } }}>                         
                              <DemoItem label="นามสกุล *">
                                <TextField 
                                fullWidth  
                                required
                                placeholder="นามสกุล"
                                id="lastname" />
                              </DemoItem>
                          </Grid>
                          <Grid container item xs={12} sm={12} md={6} sx={{display: 'flex', alignItems: 'center' }}>
                                <Grid item xs={8} sm={8} md={9}>
                                    <DemoItem label="เบอร์โทรศัพท์ *">
                                    <TextField 
                                    fullWidth  
                                    required
                                    placeholder="08XXXXXXXX"
                                    id="phoneNumber" />
                                  </DemoItem>
                                </Grid>
                                <Grid item md={3} sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                  <Button variant="contained">
                                    ตรวจสอบ
                                  </Button>
                                </Grid>
                              </Grid>
                        </Stack>  
                  </Box>
                </FormControl>
        
                </Box>
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
