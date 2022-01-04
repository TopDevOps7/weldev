import { FC, useState } from 'react';
import { styled, Box } from '@mui/material';
import iconimage from '../icon.png';

import { useHistory } from 'react-router-dom';
import * as React from 'react';
import { FOOTER_HEIGHT } from '../utils/constants';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export const Birthday: FC = ({ children }) => {
  const history = useHistory();
  const welcometext = "Welcome !Let's complete your profile";
  const [value, setValue] = React.useState<Date | null>(null);

  const [errormessage, setErrormessage] = useState('');
  const [errormessagemonth, setErrormessagemonth] = useState('');
  const [errormessageyear, setErrormessageyear] = useState('');
  const [errormessageday, setErrormessageday] = useState('');
  const [displayflag, setflag] = useState(false);
  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [Year, setYear] = React.useState('');
  const [name, setName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
    console.log(month);
  };

  const handleChangeday = (event: SelectChangeEvent) => {
    setDay(event.target.value);
  };
  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };
  const continuebutton = () => {
    if (name == null || name == '' || name == undefined) {
      setErrormessage('Name is required');
    }
    if (month == null || month == '' || month == undefined) {
      setErrormessagemonth('Month is required');
    }
    if (Year == null || Year == '' || Year == undefined) {
      setErrormessageyear('Year is required');
    }
    if (day == null || day == '' || day == undefined) {
      setErrormessageday('Day is required');
    }
    if (month && name && Year && day) {
      setErrormessage('');
      setErrormessagemonth('');
      setErrormessageyear('');
      setErrormessageday('');
      history.push('/upload');
    }
  };
  const entercontinuebutton = (e: any) => {
    e.preventDefault();
    e.target.style.background = '#FFF';
    e.target.style.color = '#0a070c';
    e.target.style.border = 'solid';
    e.target.style.borderColor = '#fff';
    e.target.style.borderWidth = '1px';
  };
  const leavecontinuebutton = (e: any) => {
    e.preventDefault();
    e.target.style.background = '#150f1a';
    e.target.style.color = '#fff';
    e.target.style.border = 'solid';
    e.target.style.borderColor = '#fff';
    e.target.style.borderWidth = '1px';
  };
  const yeararray = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'];
  const montharray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayarray = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="md" sx={{ marginTop: '80px' }}>
            <Box
              sx={{
                bgcolor: '#150F1A',
                minHeight: '70vh',
                padding: '10px 50px 30px 50px',
                marginLeft: '135px',
                marginRight: '135px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              }}
            >
              <Typography
                component="div"
                sx={{ marginTop: '5%', display: 'grid', justifyContent: 'center', alignItems: 'center' }}
              >
                <Typography component="div" sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                  <StyledLogo src={iconimage} alt="icon" />
                </Typography>
                <Typography
                  component="p"
                  sx={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif', maxWidth: '100%' }}
                >
                  {welcometext}
                </Typography>
                <Typography sx={{ m: 1, width: '100%', marginTop: '12%' }} component="div">
                  <TextField
                    id="outlined-password-input"
                    label="Name"
                    defaultValue={name}
                    helperText={errormessage}
                    onChange={(event) => {
                      const { value } = event.target;
                      setName(value);
                    }}
                    type="text"
                    autoComplete="current-name"
                    sx={{ width: '100%' }}
                  />
                </Typography>
                <Typography sx={{ m: 1, marginBottom: '0px', marginTop: '45px' }} component="div">
                  <InputLabel htmlFor="standard-adornment-password" sx={{ color: '#fff', fontSize: '20px' }}>
                    Date of birth
                  </InputLabel>
                </Typography>
                <Typography
                  sx={{
                    m: 1,
                    width: '100%',
                    display: 'flex',
                    marginTop: '0px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  component="div"
                >
                  <FormControl sx={{ m: 1, minWidth: 120, marginLeft: '0px' }}>
                    <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={month}
                      label="Month"
                      onChange={handleChange}
                      autoWidth={true}
                    >
                      {montharray.map((month) => (
                        <MenuItem value={month} key={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errormessagemonth}</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120, marginLeft: '0px' }}>
                    <InputLabel id="demo-simple-select-helper-label">Day</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={day}
                      label="Day"
                      onChange={handleChangeday}
                    >
                      {dayarray.map((day) => (
                        <MenuItem value={day} key={day}>
                          {day}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errormessageday}</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120, marginLeft: '0px' }}>
                    <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={Year}
                      label="Year"
                      onChange={handleChangeYear}
                    >
                      {yeararray.map((year) => (
                        <MenuItem value={year} key={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errormessageyear}</FormHelperText>
                  </FormControl>
                </Typography>
                <Typography sx={{ width: '100%', marginTop: '15px', textAlign: 'center' }} component="div">
                  <InputLabel id="demo-simple-select-helper-label">
                    Your age is private and will not be visible
                  </InputLabel>
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    width: '100%',
                    marginTop: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ButtonWrapper
                    onClick={continuebutton}
                    onMouseEnter={(e) => entercontinuebutton(e)}
                    onMouseLeave={(e) => leavecontinuebutton(e)}
                  >
                    Continue
                  </ButtonWrapper>
                </Typography>
              </Typography>
            </Box>
          </Container>
        </Box>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`;
const ButtonWrapper = styled('button')`
  background: #150f1a;
  outline: none;
  border-radius: 50px;
  border: solid;
  border-color: #fff;
  border-width: 1px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 13px;
  padding-bottom: 13px;
  font-size: 20px;
  font-family: serif;
  color: #fff;
  width: 80%;
  cursor: pointer;
`;

const ContentWrapper = styled('div')`
  display: flex;
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const DrawerHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const StyledLogo = styled('img')``;
