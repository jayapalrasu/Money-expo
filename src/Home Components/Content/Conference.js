import { Container } from '@mui/system';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { BsMicFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Tickets from './Tickets';
import OwlCarosol from './OwlCarosol';
function Conference(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <Container>
                <div className='hide-conference'>
                    <Row>
                        <Col lg={6}>
                            <h6><b id='color-rose'>
                                The Money Conversation</b></h6>
                            <h1>Join the world's leading companies at Technology Conference</h1>
                            <img src='https://moneyexpoindia.com/assets/images/icons/divider.png' />
                        </Col>
                        <Col lg={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Box align='center'
                                sx={{
                                    width: 200,
                                    height: 150,
                                    // borderColor: '#F4008C',
                                    borderRadius: '8px',
                                    border: '2px solid #F4008C',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <h6>1st day</h6>
                                <h1 id='color-rose'>15 </h1>
                                <b>July <br />
                                    <span>2022</span></b>
                            </Box>
                            <Box align='center'
                                sx={{
                                    width: 200,
                                    height: 150,
                                    // borderStyle: 'dotted',,
                                    borderRadius: '8px',
                                    border: '2px solid #F4008C',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <h6>2st day</h6>
                                <h1 id='color-rose'>16 </h1>
                                <b>July <br />
                                    <span>2022</span></b>
                            </Box>
                        </Col>
                    </Row>
                </div>
                <br />
                <div align='center' >
                    <Box className='box-cc'
                        sx={{
                            // width: 100%,
                            // height: 150,
                            border: '1px solid #ebebeb',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <h4>01</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>08:00 am - 10:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Social Profit from Venture <br />(SROI)
                            Gathering</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Tripp Mckay</b>
                            <p style={{ color: 'gray' }}>Historian</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                    </Box><br />
                    <Box className='box-cc'
                        sx={{
                            // width: 100%,

                            border: '1px solid #ebebeb',
                            backgroundColor: '#fff',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <h4>02</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>10:00 am - 11:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Marine and Oceanic<br /> Government Workers</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Milana Myles</b>
                            <p style={{ color: 'gray' }}>Art Critic</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                    </Box><br />
                    <Box className='box-cc'
                        sx={{
                            // width: 100%,
                            // height: 150,
                            border: '1px solid #ebebeb',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <h4>03</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>11:00 am - 12:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Home Life Open Entryway <br />Open Occasion of 21</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Gabrielle Winn</b>
                            <p style={{ color: 'gray' }}>Insurance consultant</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                    </Box><br />
                    <Box className='box-cc'
                        sx={{
                            // width: 100%,
                            // height: 150,
                            border: '1px solid #ebebeb',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <h4>04</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>12:00 am - 01:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Developing Force Legislative <br />issues of Arctics Motivation</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Rene Wells</b>
                            <p style={{ color: 'gray' }}>
                                Rene Wells</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                    </Box><br />
                </div>
                <div align='center'>
                    <Box className='box-cc2'
                        sx={{
                            // width: 100%,
                            border: '1px solid #ebebeb',
                            backgroundColor: '#fff',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <br />
                        <h4>01</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>08:00 am - 10:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Social Profit from Venture <br />(SROI)
                            Gathering</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Tripp Mckay</b>
                            <p style={{ color: 'gray' }}>Historian</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                        <br />
                        <br />
                    </Box><br />
                    <Box className='box-cc2'
                        sx={{
                            // width: 100%,

                            border: '1px solid #ebebeb',
                            backgroundColor: '#fff',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <br />
                        <h4>02</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>10:00 am - 11:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Marine and Oceanic<br /> Government Workers</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Milana Myles</b>
                            <p style={{ color: 'gray' }}>Art Critic</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                        <br />
                        <br />
                    </Box><br />
                    <Box className='box-cc2'
                        sx={{
                            // width: 100%,
                            // height: 150,
                            border: '1px solid #ebebeb',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    ><br />
                        <h4>03</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>11:00 am - 12:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Home Life Open Entryway <br />Open Occasion of 21</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Gabrielle Winn</b>
                            <p style={{ color: 'gray' }}>Insurance consultant</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                        <br />
                        <br />
                    </Box><br />
                    <Box className='box-cc2'
                        sx={{
                            // width: 100%,
                            // height: 150,
                            border: '1px solid #ebebeb',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'grey',
                                border: '1px solid #F4008C',
                            },
                        }}
                    >
                        <br />
                        <h4>04</h4>
                        <div>
                            <b id='color-rose'>15 July 2022</b>
                            <p style={{ color: 'gray' }}>12:00 am - 01:00 am</p>
                        </div>
                        <h4 id='text-color'><a>Developing Force Legislative <br />issues of Arctics Motivation</a></h4>
                        <img style={{ height: '3.5rem' }} src='https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png' />
                        <div>
                            <b id='color-rose'><BsMicFill /><br />
                                Rene Wells</b>
                            <p style={{ color: 'gray' }}>
                                Rene Wells</p>
                        </div>
                        <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                        <br />
                        <br />
                    </Box><br />
                </div>
                <div align='center' >
                    <Box align='center' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} className='width-non'
                        sx={{
                            width: 400,
                            height: 50,
                            // borderColor: '#F4008C',
                            borderRadius: '8px',
                            border: '2px solid  grey',
                            borderStyle: 'dotted',
                            backgroundColor: '#fff',
                        }}
                    >
                        if you want to more Updates<b><a>CLICK HERE</a></b>now.
                    </Box>
                </div>
                <br />
                <br />
            </Container>
            <div style={{ backgroundColor: 'whitesmoke' }} align='center' id='get--block'>
                <b id='color-rose'>GET TICKET</b>
                <h1>Explore Flexible Pricing Plans<br />
                    Choose a Ticket</h1>
                <img src='https://moneyexpoindia.com/assets/images/icons/divider-centered.png' />
                <br />
                <br />
                <Tickets />
                <br />
                <br />
                <div className='bg-img-cover'>
                    <div className='bg-img-cover1'>
                        <div className='bg-img-cover-align'>
                            <b>SPEAK ON THE MAIN STAGE</b>
                            <br />
                            <h1 style={{ color: '#fff' }}>Present your best at<br /> Money Expo 2022.</h1>
                            <br />
                            <p>100+ conference sessions on new and improved financial services across Stocks, Crypto,<br /> Forex& Commodities Markets. Live Market Training, <br />latest technology driven financial Trading, Automated trading system,<br /> Building portfolio, Competitive financial services, <br />Unique product demonstrations & more.</p>
                            <Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Buy Ticket</b></Button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <div>
                        <b id='color-rose'>WHY TO ATTEND</b>
                        <br />
                        <br />
                        <Container>
                            <h1>Opportunity to Learn the skill of investing the money wisely in Financial Markets with expert advice. Don’t miss the great opportunity to be part of Money Expo 2022</h1>
                            <br />
                            <p style={{ color: 'grey' }}>MoneyExpo aims to helps individuals to gain access to the investmentsexperts and world class financial services providers</p>
                            <img src='https://moneyexpoindia.com/assets/images/icons/divider-centered.png' />
                            <br />
                            <br />
                            <div>
                                <OwlCarosol/>
                            </div>

                        </Container>
                    </div>
                </div>
                <br />
            </div>
            <br />
            <br />
            <br />
        </div >
    );
}

export default Conference;