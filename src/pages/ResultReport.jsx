import Layout from "../components/Layout"
import '../styles/global.css'
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Resultreport() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[300], 0.5),
    '&:hover': {
      backgroundColor: alpha(theme.palette.grey[300], 0.8),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const BoldTableCell = styled(TableCell)`
  font-weight: bold;
`;

  return (
    <Layout>
      <React.Fragment>
      <Container maxWidth="lg">
      <Box sx={{ bgcolor: 'white', height: '100vh' , mt:3 , flexGrow: 1}}>
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
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </Search>
                    </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
            <TableContainer component={Paper} sx={{mt: 2}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <BoldTableCell>Dessert (100g serving)</BoldTableCell>
                      <BoldTableCell align="right">Calories</BoldTableCell>
                      <BoldTableCell align="right">Fat&nbsp;(g)</BoldTableCell>
                      <BoldTableCell align="right">Carbs&nbsp;(g)</BoldTableCell>
                      <BoldTableCell align="right">Protein&nbsp;(g)</BoldTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
        </Box>
      </Container>
    </React.Fragment>
    </Layout>
  )
}

export default Resultreport
