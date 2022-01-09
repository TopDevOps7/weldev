import { FC, useState } from 'react';
import { styled, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import iconimage from '../icon.png';

import { FOOTER_HEIGHT } from '../utils/constants';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Check } from '@mui/icons-material';
import '../styles/custom.css';

export const Login: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => setOpen((status) => !status);
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const history = useHistory();

  const [errormessage, setErrormessage] = useState('');
  const [displayflag, setflag] = useState(false);
  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values.password);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const continuebutton = () => {
    if (values.password.length != 0) {
      const regex = /[A-Z]/g;
      const found = values.password.match(regex);
      if (values.password.length < 6) {
        setErrormessage('Password must be at least 6 characters');
        setflag(false);
      }
      if (found == null && values.password.length > 6) {
        setErrormessage('Password must have at least 1 capital letter');
        setflag(false);
      }

      if (values.password.length > 40) {
        setErrormessage('Password must not exceed 40 characters');
        setflag(false);
      }
      if (values.password.length < 40 && values.password.length > 6 && found != null) {
        setErrormessage('');
        setflag(true);
        history.push('/second');
      }
    } else {
      if (values.password == '' || values.password == null || values.password == undefined) {
        setErrormessage('Password is required');
        setflag(false);
      }
    }
  };
  const entercontinuebutton = (e: any) => {
    e.preventDefault();
    e.target.style.background = '#150F1A';
    e.target.style.color = '#FFFFFF';
    e.target.style.border = 'solid';
    e.target.style.borderWidth = '1px';
  };
  const leavecontinuebutton = (e: any) => {
    e.preventDefault();
    e.target.style.background = '#ffffff';
    e.target.style.color = '#0a070c';
    e.target.style.border = 'none';
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
          <Container maxWidth="md" sx={{ marginTop: '80px' }}>
            <Box
              sx={{
                bgcolor: '#150F1A',
                minHeight: '70vh',
                padding: '1% 10% 2% 10%',
                marginLeft: '10%',
                marginRight: '10%',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              }}
            >
              <Typography
                component="div"
                sx={{ marginTop: '5%', padding: '5%', justifyContent: 'center', alignItems: 'center' }}
              >
                <Typography component="div" sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                  <StyledLogo src={iconimage} alt="icon" />
                </Typography>
                <Typography
                  component="p"
                  className="setpasswordspan"
                  sx={{ marginTop: '8%', maxWidth: '60%', textOverflow: 'ellipsis', overflow: 'hidden' }}
                >
                  Set a password for adam@gmail.com
                </Typography>
                <FormControl sx={{ m: 1, width: '100%', marginTop: '12%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                          {displayflag ? <Check sx={{ color: '#00D56E' }} /> : ''}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
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
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    sx={{
                      color: '#5798FF',
                      fontSize: '15px',
                      fontFamily: 'Proxima Nova',
                      fontStyle: 'normal',
                      fontWeight: '600',
                    }}
                  >
                    {errormessage}
                  </InputLabel>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    width: '100%',
                    marginTop: '15%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ButtonWrapper
                    onClick={continuebutton}
                    className="continous"
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
  background: #ffffff;
  outline: none;
  border-radius: 50px;
  border: none;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 5%;
  font-family: serif;
  color: #0a070c;
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
