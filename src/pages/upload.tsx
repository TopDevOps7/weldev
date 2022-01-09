import { FC, useState } from 'react';
import { styled, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import iconimage from '../icon.png';
import uploadimage from '../Rectangle212.png';
import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';

import { FOOTER_HEIGHT } from '../utils/constants';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Slider from '@mui/material/Slider';

import { Check } from '@mui/icons-material';
import { AddOutlined } from '@mui/icons-material';
import { Clear } from '@mui/icons-material';
import { Circle } from '@mui/icons-material';
import '../styles/custom.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export const Upload: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => setOpen((status) => !status);
  const [values, setValues] = useState({
    name: '',
  });

  const history = useHistory();
  const [imgData, setImgData] = useState<any | null>(null);
  const [filelist, setFilelist] = useState<any | []>([]);
  const [errormessage, setErrormessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [displayflagupload, setFlagupload] = useState(false);
  const [displayclear, setClearflag] = useState(false);
  const [successmessage, setSuccessmessage] = useState('');
  const [displayflag, setflag] = useState(false);
  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values.name);
  };

  const continuebutton = () => {
    if (values.name.length != 0) {
      console.log('ok');
      console.log(filelist);
      setSuccessmessage('This username is available');
      setErrormessage('');
      setflag(true);
    } else {
      if (values.name == '' || values.name == null || values.name == undefined) {
        setErrormessage('Password is required');
        setflag(false);
        setSuccessmessage('');
      }
    }
  };
  const uploadtext = "We're at the final step,William";
  const zoomin = 'Move and Zoom';

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

  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files);
      const newfile = e.target.files[0];
      const updatelist = [...filelist, newfile];
      setFilelist(updatelist);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      setFlagupload(true);
    }
  };
  const enterclearbutton = () => {
    setClearflag(true);
  };
  const leaveclearbutton = () => {
    setClearflag(false);
  };
  const fileRemove = (file: any) => {
    const updatedList = [...filelist];
    updatedList.splice(filelist.indexOf(file), 1);
    setFilelist(updatedList);
    setFlagupload(false);
  };

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
          <Container maxWidth="md" sx={{ marginTop: '80px', width: '100%' }}>
            <Box
              sx={{
                bgcolor: '#150F1A',
                minHeight: '70vh',
                padding: '1% 10% 4% 10%',
                marginLeft: '10%',
                marginRight: '10%',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              }}
            >
              <Typography component="div" sx={{ marginTop: '5%' }}>
                <Typography component="div" sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                  <StyledLogo src={iconimage} alt="icon" />
                </Typography>
                <Typography
                  component="p"
                  className="setpasswordspan"
                  sx={{
                    marginTop: '10px',
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    maxWidth: '100%',
                  }}
                >
                  {displayflag === false ? uploadtext : zoomin}
                </Typography>
                {!displayflagupload && (
                  <Typography
                    component="div"
                    className="uploadfield"
                    sx={{ marginTop: '5%', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Typography component="div" sx={{ position: 'relative' }}>
                      <AddOutlined
                        sx={{
                          fontSize: '60px',
                          borderStyle: 'dashed',
                          borderRadius: '50%',
                          padding: '16px',
                          color: '#fff',
                          cursor: 'pointer',
                        }}
                      />
                      <input id="profilePic" type="file" onChange={(e) => onChangePicture(e)} />
                    </Typography>
                    <Typography component="div" sx={{ position: 'relative', marginLeft: '5%' }}>
                      <InputLabel className="uplodspan">Upload a picture</InputLabel>
                    </Typography>
                  </Typography>
                )}
                <Typography
                  component="div"
                  sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  {filelist.length > 0 ? (
                    <div className="drop-file-preview">
                      {filelist.map((value: any, index: any) => (
                        <Typography
                          key={index}
                          component="div"
                          onMouseEnter={() => enterclearbutton()}
                          onMouseLeave={() => leaveclearbutton()}
                          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
                        >
                          {!displayflag && <StyledLogo src={uploadimage} alt={value.name} className="uploadimage" />}
                          {displayclear && !displayflag && (
                            <Clear className="delteicon" onClick={() => fileRemove(value)} />
                          )}
                          {displayflag && (
                            <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0}>
                              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                <React.Fragment>
                                  <Typography
                                    component="div"
                                    sx={{
                                      display: 'grid',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      position: 'relative',
                                    }}
                                  >
                                    <div className="tools">
                                      <Slider
                                        size="small"
                                        sx={{ color: '#fff' }}
                                        aria-valuetext="slider"
                                        value={progress}
                                        aria-label="Small"
                                        onChange={(e: any) => {
                                          console.log(progress);
                                          setProgress(e.target.value);
                                          if (progress > e.target.value) {
                                            console.log('small');
                                            zoomOut();
                                          }
                                          if (progress < e.target.value) {
                                            console.log('big');
                                            zoomIn();
                                          }
                                        }}
                                      />
                                    </div>
                                    <TransformComponent>
                                      <Typography component="div" sx={{ cursor: ' all-scroll' }}>
                                        <img
                                          src={uploadimage}
                                          style={{ width: '100%' }}
                                          className="uploadedimage"
                                          alt={value.name}
                                        />
                                      </Typography>
                                    </TransformComponent>
                                  </Typography>
                                </React.Fragment>
                              )}
                            </TransformWrapper>
                          )}
                        </Typography>
                      ))}
                    </div>
                  ) : null}
                </Typography>
                {!displayflag && (
                  <FormControl sx={{ m: 1, width: '100%', marginTop: '5%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-username">Choose a username</InputLabel>
                    <Input
                      id="standard-adornment-username"
                      type="text"
                      value={values.name}
                      onChange={handleChange('name')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle username visibility">
                            {displayflag ? <Check sx={{ color: '#00D56E' }} /> : ''}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                )}
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
                      color: '#fff',
                      fontSize: '15px',
                      fontFamily: 'Proxima Nova',
                      fontStyle: 'normal',
                      fontWeight: '600',
                    }}
                  >
                    {!displayflag ? errormessage : ''}
                  </InputLabel>
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    sx={{
                      color: '#fff',
                      fontSize: '15px',
                      fontFamily: 'Proxima Nova',
                      fontStyle: 'normal',
                      fontWeight: '600',
                    }}
                  >
                    {!displayflag ? successmessage : ''}
                  </InputLabel>
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    width: '100%',
                    marginTop: '60px',
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
                    Done
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
  padding-bottom: 5%;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
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
