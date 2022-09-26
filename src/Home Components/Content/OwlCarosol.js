import { Container } from '@mui/material';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function OwlCarosol(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Container>
                <Carousel responsive={responsive} style={{ display: 'flex', jusityContent: 'space-around' }}>
                    <div style={{ width: '300px' }}>
                        <Grid item xs={2} sm={4} md={4} align='center'>
                            <Item style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
                                <h3><b>Join Together</b></h3>
                                <p>Network with top traders, Investors, affiliates, Brokers, Trainers and financial
                                    Service providers at Money Expo </p>
                            </Item><br />
                            <a style={{textDecoration:'none' }} href='#sponsor--block'><Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Become
                                Sponsor</b></Button></a>
                        </Grid>
                    </div>
                    <div style={{ width: '300px' }}>
                        <Grid item xs={2} sm={4} md={4} align='center'>
                            <Item style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
                                <h3><b>Mastering Stocks</b></h3>
                                <p>Choose the best way to learn on investing stocks at Money Expo 2022. Make Smarter
                                    decision and grow your stock portfolio. </p>
                            </Item><br />
                            <a style={{textDecoration:'none' }} href='#sponsor--block'><Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Become
                                Sponsor</b></Button></a>
                        </Grid>
                    </div>
                    <div style={{ width: '300px' }}>
                        <Grid item xs={2} sm={4} md={4} align='center'>
                            <Item style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
                                <h3><b>Learn Crypto</b></h3>
                                <p>Digital Assets being the trend, take a chance to learn from experts on how it
                                    decentralized system to record works and plan your investments. </p>
                            </Item><br />
                            <a style={{textDecoration:'none' }} href='#sponsor--block'><Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Become
                                Sponsor</b></Button></a>
                        </Grid>
                    </div>
                    <div style={{ width: '300px' }}>
                        <Grid item xs={2} sm={4} md={4} align='center'>
                            <Item style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
                                <h3><b>Meet Expert</b></h3>
                                <p>At Money Expo, Industry leaders as speakers can get you the markets trends and
                                    investments opportunities on Financial products.</p>
                            </Item><br />
                            <a style={{textDecoration:'none' }} href='#sponsor--block'><Button variant="contained" style={{ height: '3rem', backgroundColor: '#F4008C' }}><b>Become
                                Sponsor</b></Button></a>
                        </Grid>
                    </div>
                </Carousel>
            </Container>
            <br />
            <br />
            <br />
        </div>
    );
}

export default OwlCarosol;