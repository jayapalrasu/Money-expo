import React from 'react';
import { Carousel } from 'antd';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BsSearch } from "react-icons/bs";
import { FcExpand } from "react-icons/fc";
import { MdOutlineLocalOffer } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import Input from '@mui/material/Input';
import { Dropdown, Menu, Space, Typography } from 'antd';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function CarouselSrc(props) {

    const menu = (
        <Menu
            selectable
            items={[
                {
                    key: '1',
                    label: 'Event Location 01',
                },
                {
                    key: '2',
                    label: 'Event Location 02',
                },
                {
                    key: '3',
                    label: 'Event Location 03',
                },
                {
                    key: '4',
                    label: 'Event Location 04',
                },
            ]}

        />
    );
    const menu1 = (
        <Menu
            selectable
            items={[
                {
                    key: '1',
                    label: 'Event Category 01',
                },
                {
                    key: '2',
                    label: 'Event Category 02',
                },
                {
                    key: '3',
                    label: 'Event Category 03',
                },
                {
                    key: '4',
                    label: 'Event Category 04',
                },
            ]}

        />
    );

    const contentStyle = {
        height: '780px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    };
    return (
        <div>
            <Carousel autoplay style={{ marginTop: '-3rem' }} className='carousel-margin'>
                <div className='Carousel-img' align='center'>
                    <h1 style={contentStyle} className='text-animation'>Join the India's leading Trading
                        <br />
                        &
                        <br />
                        Investing Expo 2022
                        <br />
                        Meet the Top Companies to Trade and Invest in
                        <br />
                        Stocks | Crypto | Forex | Commodities
                        <br />
                    </h1>

                </div>
                <div className='Carousel-img2' align='center'>
                    <h1 style={contentStyle} className='text-animation'>Join the India's leading Trading
                        <br />
                        &
                        <br />
                        Investing Expo 2022
                        <br />
                        Meet the Top Companies to Trade and Invest in
                        <br />
                        Stocks | Crypto | Forex | Commodities
                        <br />
                    </h1>
                </div>
            </Carousel>
            <div className='carousel-small-box' align='center'>
                <Box sx={{ width: '100%' }} style={{ marginLeft: '3rem', position: 'absolute', marginTop: '1.8rem' }} >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <BsSearch /> <Input placeholder="Search For Event Title" />
                        </Grid>
                        <Grid item xs={3}>
                            <HiLocationMarker /><Dropdown overlay={menu}>
                                <Typography.Link>
                                    <Space>
                                        <div style={{ color: "black" }}>Event Location     <FcExpand /></div>
                                    </Space>
                                </Typography.Link>
                            </Dropdown>
                        </Grid>
                        <Grid item xs={3}>
                            <MdOutlineLocalOffer /><Dropdown overlay={menu1}>
                                <Typography.Link>
                                    <Space>
                                        <div style={{ color: "black" }}>Event Category     <FcExpand /></div>
                                    </Space>
                                </Typography.Link>
                            </Dropdown>
                        </Grid>
                        <Grid item xs={3}>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" style={{ height: '', backgroundColor: '#0b083d' }}><b>Book Ticket</b></Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className='carousel-small-show' >
                <Box sx={{ width: '100%' }} style={{ marginLeft: '3rem', position: 'absolute', marginTop: '1.8rem' }} >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <BsSearch /> <Input style={{width:'85%'}} placeholder="Search For Event Title" />
                        </Grid>
                        <br />
                        <Grid item xs={12} >
                            <HiLocationMarker /><Dropdown overlay={menu}>
                                <Typography.Link>
                                    <Space >
                                        <div style={{ color: "black" }}>Event Location     <FcExpand /></div>
                                    </Space>
                                </Typography.Link>
                            </Dropdown>
                        </Grid>
                        <Grid item xs={12} >
                            <MdOutlineLocalOffer /><Dropdown overlay={menu1} >
                                <Typography.Link>
                                    <Space>
                                        <div style={{ color: "black" }}>Event Category     <FcExpand /></div>
                                    </Space>
                                </Typography.Link>
                            </Dropdown>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" style={{ height: '', backgroundColor: '#0b083d',width:'90%' }}><b>Book Ticket</b></Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default CarouselSrc;