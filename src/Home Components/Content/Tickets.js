import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import Box from '@mui/material/Box';
import { Row, Col } from 'react-bootstrap'
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
function Tickets(props) {
    return (
        <div>
            <div>
                <Container>
                <Row>
                    <Col lg={4}>
                        <Box 
                            sx={{
                                width: 300,
                                height: 550,
                                // border: '1px solid #F4008C',
                                color: 'black',
                                boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                                backgroundColor: '#fff',
                                '&:hover': {
                                    backgroundColor: '#0b083d',
                                    color: '#fff'

                                },
                            }}
                        >
                            <b id='color-rose'>Free</b>
                            <h1 style={{ backgroundColor: '#0b083d', color: '#fff' }}><b>FREE TICKET</b></h1>
                            <div className="price-box" align='end'>
                                <div className="price"><sup>$</sup>0</div>
                            </div>
                            <br />
                            <div align='start' className='ticket-txt'>
                                <p><FcCheckmark /> Concert Attendance</p>
                                <p><FcCheckmark /> 20 Lottery Ticket </p>
                                <p><FcCheckmark /> Priority Seating  </p>
                                <p><FcCheckmark /> 5 Person Entry    </p>
                                <p><FcCheckmark /> Certificate       </p>
                                <p><FcCheckmark /> Certificate       </p>
                                <p><FcCheckmark /> T-Shart</p>
                            </div>
                            <Button variant="contained" style={{ backgroundColor: '#F4008C' }}><b>Get Ticket</b></Button>
                        </Box>
                        <br />
                    </Col>
                    <Col lg={4}>
                        <Box
                            sx={{
                                width: 300,
                                height: 550,
                                // border: '1px solid #F4008C',
                                color: '#fff',
                                boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                                backgroundColor: '#0b083d',
                            }}
                        >
                            <b id='color-rose'>Business Plan</b>
                            <h1 style={{ backgroundColor: '#0b083d', color: '#fff' }}><b>DELEGATE</b></h1>
                            <div className="price-box" align='end'>
                                <div className="price"><sup>$</sup>499</div>
                            </div>
                            <br />
                            <div align='start' className='ticket-txt'>
                                <p><FcCheckmark /> Concert Attendance</p>
                                <p><FcCheckmark /> 20 Lottery Ticket </p>
                                <p><FcCheckmark /> Priority Seating  </p>
                                <p><FcCheckmark /> 5 Person Entry    </p>
                                <p><FcCheckmark /> Certificate       </p>
                                <p><FcCheckmark /> Certificate       </p>
                                <p><FcCheckmark /> T-Shart</p>
                            </div>
                            <Button variant="contained" style={{ backgroundColor: '#F4008C' }}><b>Get Ticket</b></Button>
                        </Box><br />
                    </Col>
                    <Col lg={4}>
                        <Box
                            sx={{
                                width: 300,
                                height: 550,
                                // border: '1px solid #F4008C',
                                boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                                color: 'black',
                                backgroundColor: '#fff',
                                '&:hover': {
                                    backgroundColor: '#0b083d',
                                    color: '#fff'

                                },
                            }}
                        >
                            <b id='color-rose'>Enterprise Plan</b>
                            <h1 style={{ backgroundColor: '#0b083d', color: '#fff' }}><b>VIP</b></h1>
                            <div className="price-box" align='end'>
                                <small><div className="price"><sup>$</sup>1999</div></small>
                            </div>
                            <br />                
                            <div align='start' className='ticket-txt'>
                                <p><FcCheckmark /> Concert Attendance</p>
                                <p><FcCheckmark /> 20 Lottery Ticket </p>
                                <p><FcCheckmark /> Priority Seating  </p>
                                <p><FcCheckmark /> 5 Person Entry    </p>
                                <p><FcCheckmark /> Certificate       </p>
                                <p><FcCheckmark /> Certificate       </p>
                                <p><FcCheckmark /> T-Shart</p>
                            </div>
                            <Button variant="contained" style={{ backgroundColor: '#F4008C' }}><b>Get Ticket</b></Button>
                        </Box><br />
                    </Col>
                </Row>
                </Container>
               

            </div>
        </div>
    );
}

export default Tickets;