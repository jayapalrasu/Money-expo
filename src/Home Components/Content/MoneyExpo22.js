import { Container } from '@mui/material';
import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FcIdea } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import CountUp from "react-countup";

function MoneyExpo22(props) {
    return (
        <div>
            <Container>
                <div className='expo-22'>
                    <Row>
                        <Col lg={9}>
                            <h6><b id='color-rose'>MONEY EXPO 2022</b></h6>
                            <h1>What is Money Expo 2022 ? – Largest gathering of Financial Market professional & Investors.</h1>
                            <img src='https://moneyexpoindia.com/assets/images/icons/divider.png' />
                            <p style={{ color: 'gray' }}>Attend the Trading and Investing event to Shape your skills in Financial Markets. Grab the great opportunity.</p>
                        </Col>
                        <Col lg={3} id='content-img' align='center' >
                            <Box id='small-img1'
                                sx={{
                                    width: 200,
                                    height: 180,
                                    backgroundColor: '#0b083d',
                                }}
                            >
                                <h1 style={{ color: '#fff' }}>15</h1>
                                <p style={{ textDecoration: 'underline', color: '#fff' }}>JULY</p>

                                <b style={{ color: '#fff' }}>Exhibition and <br />
                                    Side Events</b>
                            </Box>
                            <Box id='small-img2' style={{ color: 'black' }}
                                sx={{
                                    width: 200,
                                    height: 180,
                                    backgroundColor: '#F4008C',
                                }}
                            >
                                <h1 >16</h1>
                                <p style={{ textDecoration: 'underline' }}>JULY</p>
                                <b>Conferance Day <br />
                                    Now</b>
                            </Box>
                        </Col>
                    </Row>
                </div>

                <br />
                <div className='nom-img' >
                    <Row id='nom-align' style={{ width: '50rem', display: 'flex', marginTop: '2rem', position: 'absolute', marginLeft: '2.5rem' }} >
                        <Col lg={3}>
                            <h1 ><CountUp end={54} /></h1>
                            <b>Speakers</b>
                        </Col>
                        <Col lg={3}>
                            <h1 ><CountUp end={600} /></h1>
                            <b>Tickets</b>
                        </Col>
                        <Col lg={3}>
                            <h1 ><CountUp end={18} /></h1>
                            <b>Sponsors</b>
                        </Col>
                        <Col lg={3}>
                            <h1 ><CountUp end={35} /></h1>
                            <b>Sessions</b>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Box id='show-nom'
                        sx={{
                            background: 'linear-gradient(90deg, #ffc600 1%, #ff6c00 100%)',
                        }}
                        align='center'>
                        <h1 ><CountUp end={54} /></h1>
                        <b>Speakers</b>

                        <h1 ><CountUp end={600} /></h1>
                        <b>Tickets</b>

                        <h1 ><CountUp end={18} /></h1>
                        <b>Sponsors</b>

                        <h1 ><CountUp end={35} /></h1>
                        <b>Sessions</b>
                    </Box>
                </div>

                <div className='Crypto'>
                    <Box id='z'
                        sx={{
                            position: 'absolute',
                            maxWidth: ' 470px',
                            background: '#001166',
                            padding: '40px 50px',
                            marginTop: '16rem'
                            // background: '#0b083d',
                        }}
                        align='center'>
                        <h2 id='color-rose'>Ready to Invest & Trader your Money ?</h2>
                        <p style={{ color: '#fff' }}>Money Expo’s missing is to provide the latest education to the participants of Stocks, Cryptocurrency, Forex & Commodities Market.</p>
                        <Stack direction="row" align='center'>
                            <Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Submit Now</b></Button>
                        </Stack>
                    </Box>
                    <div className='video'>
                        <a href='https://www.youtube.com/watch?v=UWA5jiLkzNQ'>
                            <img src='https://moneyexpoindia.com/assets/images/Youtube__banner.jpg' />
                        </a>
                    </div>
                </div>
                <div className='rotate-img1' >
                    <img className='rotate' style={{ height: '25rem' }} src='https://moneyexpoindia.com/assets/images/icons/circle-3.png' />

                </div>
                <div className='small-rount'>
                    <img className='rotate' style={{}} src='https://moneyexpoindia.com/assets/images/icons/circle-4.png' />
                </div>
                <br />
                <Row>
                    <Col lg={6}>
                        <div style={{ backgroundColor: '#001166' }}>
                            <Box id='show-nomz'
                                align='center'>
                                <br/>
                                    <h2 id='color-rose'>Ready to Invest & Trader your Money ?</h2>
                                    <p style={{ color: '#fff' }}>Money Expo’s missing is to provide the latest education to the participants of Stocks, Cryptocurrency, Forex & Commodities Market.</p>
                                    <Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Submit Now</b></Button>
                                <br/>
                                <br/>
                            </Box>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <br />
                        <div className='fit'>
                            <a href='https://www.youtube.com/watch?v=UWA5jiLkzNQ'>
                                <img style={{ height: '15rem' }} src='https://moneyexpoindia.com/assets/images/Youtube__banner.jpg' />
                            </a>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col lg={6}>
                            <h6 id='color-rose'><b>WORLD’S LEADING</b></h6>
                            <h1>Stock Brokers & Crypto Exchanges offering best Trading & Investing opportunities</h1>
                            <img src='https://moneyexpoindia.com/assets/images/icons/divider.png' />
                            <p style={{ color: 'gray' }}>Great chance to meet the Leading Financial brands of that World under one roof, Join to learn Investing in Challenging Markets.
                                <br /> <br />
                                Learn Trade in Stocks,Gold, Crypto & more. Plan your investments strategy wisely Master High-Probability Trading Strategies Understanding the New Mega-Trends</p>
                            <Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Register Now</b></Button>
                            <div className='small-rount'>
                                <img style={{ float: 'right' }} className='rotate' src='https://moneyexpoindia.com/assets/images/icons/pink__object.png' />
                            </div>

                        </Col>
                        <Col lg={6} className='hide-col'>
                            <Box
                                sx={{
                                    width: 500,
                                    height: 100,
                                    // display:'flex',
                                    justifyContent: 'space-around',
                                    alignContent: 'center',
                                    color: 'black',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: '#0b083d',
                                        color: '#fff',
                                        borderTopRightRadius: 50,
                                        borderBottomLeftRadius: 50,

                                    },
                                }}
                            >
                                <Row >
                                    <Col lg={2} style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                        <h1 id='color-whit' ><FcSms /></h1>
                                    </Col>
                                    <Col style={{ marginTop: '1rem' }}>
                                        <h3 id='color-rose'>Stocks</h3>
                                        <p>Be a part of World’s 6th Largest Stock market</p>
                                    </Col>
                                </Row>
                            </Box>
                            <br />
                            <Box
                                sx={{
                                    width: 500,
                                    height: 100,
                                    // display:'flex',
                                    justifyContent: 'space-around',
                                    alignContent: 'center',
                                    color: 'black',
                                    backgroundColor: '#0b083d',
                                    color: '#fff',
                                    borderTopRightRadius: 50,
                                    borderBottomLeftRadius: 50,
                                    marginLeft: 10

                                }}
                            >
                                <Row >
                                    <Col lg={2} style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                        <h1 id='color-whit' ><FcIdea /></h1>
                                    </Col>
                                    <Col style={{ marginTop: '1rem' }}>
                                        <h3 id='color-rose'>Cryptocurrency</h3>
                                        <p>Be a part of World’s 6th Largest Stock market</p>
                                    </Col>
                                </Row>
                            </Box>
                            <br />
                            <br />
                            <Box
                                sx={{
                                    width: 500,
                                    height: 100,
                                    // display:'flex',
                                    justifyContent: 'space-around',
                                    alignContent: 'center',
                                    color: 'black',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: '#0b083d',
                                        color: '#fff',
                                        borderTopRightRadius: 50,
                                        borderBottomLeftRadius: 50,

                                    },
                                }}
                            >
                                <Row >
                                    <Col lg={2} style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                        <h1 id='color-whit' ><FcVoicePresentation /></h1>
                                    </Col>
                                    <Col style={{ marginTop: '1rem' }}>
                                        <h3 id='color-rose'>Forex</h3>
                                        <p>Trade foreign currencies with global brands</p>
                                    </Col>
                                </Row>
                            </Box>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='show-col'>
                            <br />
                            <Box
                                sx={{
                                    // width: 300,
                                    height: '10rem',
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: '#0b083d',
                                        color: '#fff',
                                        borderTopRightRadius: 50,
                                        borderBottomLeftRadius: 50,
                                    },
                                }}
                                align='center'>
                                <Row >
                                    <Col lg={2} style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                        <h1 id='color-whit' ><FcSms /></h1>
                                    </Col>
                                    <Col style={{ marginTop: '1rem' }}>
                                        <h3 id='color-rose'>Stocks</h3>
                                        <p>Be a part of World’s 6th Largest Stock market</p>
                                    </Col>
                                </Row>
                            </Box>
                            <br />
                            <Box
                                sx={{

                                    height: '10rem',
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    backgroundColor: '#0b083d',
                                    color: '#fff',
                                    borderTopRightRadius: 50,
                                    borderBottomLeftRadius: 50
                                }}
                                align='center'>
                                <Row >
                                    <Col lg={2} style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                        <h1 id='color-whit' ><FcIdea /></h1>
                                    </Col>
                                    <Col style={{ marginTop: '1rem' }}>
                                        <h3 id='color-rose'>Cryptocurrency</h3>
                                        <p>Be a part of World’s 6th Largest Stock market</p>
                                    </Col>
                                </Row>
                            </Box>
                            <br />
                            <Box
                                sx={{
                                    // width: 300,
                                    height: '10rem',
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: '#0b083d',
                                        color: '#fff',
                                        borderTopRightRadius: 50,
                                        borderBottomLeftRadius: 50,
                                    },
                                }}
                                align='center'>
                                <Row >
                                    <Col lg={2} style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                        <h1 id='color-whit' ><FcVoicePresentation /></h1>
                                    </Col>
                                    <Col style={{ marginTop: '1rem' }}>
                                        <h3 id='color-rose'>Forex</h3>
                                        <p>Trade foreign currencies with global brands</p>
                                    </Col>
                                </Row>
                            </Box>
                        </Col>
                    </Row>
                </div>

                <br />
                <br />
                <br />

            </Container >
        </div >
    );
}

export default MoneyExpo22;