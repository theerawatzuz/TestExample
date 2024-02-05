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


const categories = [
  { value: '', label: 'None' },
  { value: 'WaterSupply', label: 'Water Supply' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'IT', label: 'IT' },
  { value: 'OrgPlanning', label: 'Organization Planning' },
  { value: 'Finance', label: 'Finance' },
  { value: 'HR', label: 'Human Resources' },
  { value: 'Admin', label: 'Administration' },
];

const importanceLevels = [
  { value: '', label: 'None' },
  { value: 'Low', label: 'Normal' },
  { value: 'Medium', label: 'Urgent' },
  { value: 'High', label: 'Very Urgent' },
  { value: 'MostHighest', label: 'Emergency' },
];

const relatedDepartments = [
  { value: '', label: 'None' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Sales', label: 'Sales' },
  { value: 'HumanResources', label: 'Human Resources' },
  { value: 'CustomerRelations', label: 'Customer Relations' },
  { value: 'Accounting/Finance', label: 'Accounting/Finance' },
];

function Report() {
  const currentDate = dayjs();

  const [channel, setChannel] = React.useState('');
  const [classification, setClassification] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [department, setDepartment] = React.useState('');

  const handleChangeChannel = (event) => {
    setChannel(event.target.value);
  };

  const handleChangeClass = (event) => {
    setClassification(event.target.value);
  };

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
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
                          <Grid item xs={12} sm={12} md={6} >
                            <DemoItem label="ช่องทาง *">
                            <FormControl style={{ width: '100%' }} >
                              <Select
                                value={channel}
                                onChange={handleChangeChannel}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Channel Select' }}
                                style={{ width: '100%' }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value="Email">Email</MenuItem>
                                <MenuItem value="Telephone">Telephone</MenuItem>
                                <MenuItem value="WebsiteReport">Website Report</MenuItem>
                              </Select>
                              </FormControl>
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
                                <Grid item xs={9} sm={9} md={9}>
                                    <DemoItem label="เบอร์โทรศัพท์ *">
                                    <TextField 
                                    fullWidth  
                                    required
                                    placeholder="08XXXXXXXX"
                                    id="phoneNumber" />
                                  </DemoItem>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} sx={{ mt: 4, display: 'flex', alignItems: 'end', justifyContent: { xs: 'end', sm: 'center', md: 'end' } }}>
                                  <Button variant="contained">
                                    ตรวจสอบ
                                  </Button>
                                </Grid>
                              </Grid>
                        </Stack>  
                  </Box>
                  <Box sx={{mb:3}}>
                  <Typography variant="body1" fontWeight="bold" sx={{mb:2}}>ข้อมูลที่แจ้ง</Typography>
           
                  <Stack sx={{ xs: 12, sm: 12, md: 2, lg: 1}} direction="row" useFlexGap flexWrap="wrap">
                  <Grid item xs={12} sm={12} md={6} sx={{ pr: { xs: 0, md: 2 } }}>
                        <DemoItem label="หมวดหมู่">
                        <FormControl style={{ width: '100%' }} >
                          <Select
                            value={classification}
                            onChange={handleChangeClass}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Classification Select' }}
                            style={{ width: '100%' }}
                          >
                            {categories.map((category) => (
                              <MenuItem key={category.value} value={category.value}>
                                {category.label}
                              </MenuItem>
                            ))}
                          </Select>
                          </FormControl>
                        </DemoItem>
                          </Grid>
                          
                          <Grid item xs={12} sm={12} md={6}>
                          <DemoItem label="ระดับความสำคัญ *">
                          <FormControl style={{ width: '100%' }} >
                              <Select
                                value={priority}
                                onChange={handleChangePriority}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Priority Select' }}
                                style={{ width: '100%' }}
                              >
                                {importanceLevels.map((level) => (
                                  <MenuItem key={level.value} value={level.value}>
                                    {level.label}
                                  </MenuItem>
                                ))}
                              </Select>
                              </FormControl>
                            </DemoItem>
                              </Grid>
                             
                              <Grid item xs={12} sm={12} md={12} sx={{mt:{xs:0, md:2}}}>
                              <DemoItem label="ฝ่ายที่เกี่ยวข้อง *">
                              <FormControl style={{ width: '100%' }} >
                                  <Select
                                    value={department}
                                    onChange={handleChangeDepartment}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Department Select' }}
                                    style={{ width: '100%' }}
                                  >
                                    {relatedDepartments.map((department) => (
                                      <MenuItem key={department.value} value={department.value}>
                                        {department.label}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  </FormControl>
                                </DemoItem>
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
