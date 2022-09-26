import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GoMailRead } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ScrollToTop from "react-scroll-to-top";
function Footer(props) {
    const itemData = [
        {
            img: 'https://moneyexpoindia.com/assets/images/gallery/01.jpg',
            title: 'Breakfast',
        },
        {
            img: 'https://moneyexpoindia.com/assets/images/gallery/02%20(1).jpg',
            title: 'Burger',
        },
        {
            img: 'https://moneyexpoindia.com/assets/images/gallery/03%20(1).jpg',
            title: 'Camera',
        },
        {
            img: 'https://moneyexpoindia.com/assets/images/gallery/04%20(1).jpg',
            title: 'Coffee',
        },
        {
            img: 'https://moneyexpoindia.com/assets/images/gallery/05%20(1).jpg',
            title: 'Hats',
        },
        {
            img: 'https://moneyexpoindia.com/assets/images/gallery/06%20(1).jpg',
            title: 'Honey',
        },

    ];
    return (
        <div>
            <div className='footer'>

                <ScrollToTop style={{ backgroundColor: '#F4008C' }} top='500' smooth />

                <Box sx={{ width: '100%' }} className='big-footer'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <img style={{ height: '3rem' }} src='https://moneyexpoindia.com//storage/136/62a6cc3c200c8_Artboard-2@2x.png' />
                            <br />
                            <br />
                            <br />
                            <p>A unique themed Financial Exhibition and Conference happening to discover the Trading and investing the money into financial markets</p>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                                <a><h1 id='icon'><AiOutlineFacebook /></h1></a>
                                <a><h1 id='icon'><AiOutlineInstagram /></h1></a>
                                <a><h1 id='icon'><AiOutlineTwitter /></h1></a>
                                <a><h1 id='icon'><AiOutlineLinkedin /></h1></a>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <h4 style={{ color: '#fff' }} >Useful Links</h4>
                            <br />
                            <br />
                            <ul >
                                <li><a id='new-hover' style={{ color: '#fff' }}>Home</a></li>
                                <li><a id='new-hover' style={{ color: '#fff' }}>About</a></li>
                                <li><a href='#speaker--block' id='new-hover' style={{ color: '#fff', textDecoration: 'none' }}>Speakers</a></li>
                                <li><a href='#sponsor--block' id='new-hover' style={{ color: '#fff', textDecoration: 'none' }}>Sponsors</a></li>
                                <li><a id='new-hover' style={{ color: '#fff' }}>Visit</a></li>
                                <li><a id='new-hover' style={{ color: '#fff' }}>Floorplan</a></li>
                            </ul>
                        </Grid>
                        <Grid item xs={3}>
                            <h4 style={{ color: '#fff' }}>Instagram Gallery</h4>
                            <br />
                            <br />
                            <ImageList sx={{ width: 300 }} cols={3} >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img className='normal-img'
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                        <Grid item xs={3} >
                            <div style={{ float: 'right' }}>
                                <h4 style={{ color: '#fff' }}>Get in Touch</h4>
                                <br />
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <h1 style={{ color: '#F4008C' }}><GiAlarmClock /></h1>
                                    <p>11 - 12 Aug 10:00AM - 6:00PM<br />
                                        <b>DATE & TIME</b></p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h1 style={{ color: '#F4008C' }}><GoMailRead /></h1>
                                    <p><a>info@moneyexpoindia.com</a><br />
                                        <b>DATE & TIME</b></p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h1 style={{ color: '#F4008C' }}><MdLocationPin /></h1>
                                    <p>
                                        Sahara Star Hotel, Mumbai<br />
                                        <b>VENUE</b></p>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Box>

                <div>
                    <Box sx={{ width: '100%' }} className='small-footer'>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                                <img style={{ height: '3rem' }} src='https://moneyexpoindia.com//storage/136/62a6cc3c200c8_Artboard-2@2x.png' />
                                <br />
                                <br />
                                <br />
                                <p>A unique themed Financial Exhibition and Conference happening to discover the Trading and investing the money into financial markets</p>
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                                    <a><h1 id='icon'><AiOutlineFacebook /></h1></a>
                                    <a><h1 id='icon'><AiOutlineInstagram /></h1></a>
                                    <a><h1 id='icon'><AiOutlineTwitter /></h1></a>
                                    <a><h1 id='icon'><AiOutlineLinkedin /></h1></a>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <h4 style={{ color: '#fff' }} >Useful Links</h4>
                                <br />
                                <br />
                                <ul >
                                    <li><a id='new-hover' style={{ color: '#fff' }}>Home</a></li>
                                    <li><a id='new-hover' style={{ color: '#fff' }}>About</a></li>
                                    <li><a id='new-hover' style={{ color: '#fff' }}>Speakers</a></li>
                                    <li><a id='new-hover' style={{ color: '#fff' }}>Sponsors</a></li>
                                    <li><a id='new-hover' style={{ color: '#fff' }}>Visit</a></li>
                                    <li><a id='new-hover' style={{ color: '#fff' }}>Floorplan</a></li>
                                </ul>
                            </Grid>
                            <Grid item xs={12}>
                                <h4 style={{ color: '#fff' }}>Instagram Gallery</h4>
                                <br />
                                <br />
                                <ImageList sx={{ width: 200 }} cols={3} >
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img className='normal-img'
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                            <Grid item xs={12} >
                                <div style={{ float: 'right' }}>
                                    <h4 style={{ color: '#fff' }}>Get in Touch</h4>
                                    <br />
                                    <br />
                                    <div style={{ display: 'flex' }}>
                                        <h1 style={{ color: '#F4008C' }}><GiAlarmClock /></h1>
                                        <p>11 - 12 Aug 10:00AM - 6:00PM<br />
                                            <b>DATE & TIME</b></p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <h1 style={{ color: '#F4008C' }}><GoMailRead /></h1>
                                        <p><a>info@moneyexpoindia.com</a><br />
                                            <b>DATE & TIME</b></p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <h1 style={{ color: '#F4008C' }}><MdLocationPin /></h1>
                                        <p>
                                            Sahara Star Hotel, Mumbai<br />
                                            <b>VENUE</b></p>
                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div >
    );
}

export default Footer;