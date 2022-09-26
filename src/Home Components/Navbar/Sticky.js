import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FcList } from "react-icons/fc";
import { Dropdown, Menu, Space, Typography } from 'antd';
import 'antd/dist/antd.css'
import { FcExpand } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


import TextField from '@mui/material/TextField';
function Sticky(props) {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        // style={{ backgroundColor: '#1e1b55' }}
        <div style={{ backgroundColor: '#0b083d42' }}>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <center><h4>Contact Us</h4></center>
                    <br />
                    <br />
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))} */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Your Name*"
                                multiline
                                maxRows={4}
                                value={value}
                                onChange={handleChange}
                                variant="filled"
                            />
                            <TextField
                                id="filled-textarea"
                                label="Your Email*"
                                placeholder="Your Email*"
                                multiline
                                variant="filled"
                            />
                            <TextField
                                id="filled-textarea"
                                label="Your Phone*"
                                placeholder="Your Phone*"
                                multiline
                                variant="filled"
                            />
                            <TextField
                                id="filled-multiline-static"
                                label="Text Message*"
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="filled"
                            />
                            <div style={{ marginLeft: '4rem' }}>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" style={{ height: '3rem', backgroundColor: '#0b083d' }}><b>Submit Now</b></Button>
                                </Stack>
                            </div>
                            <br />
                            <br />
                            <br />

                            <center>
                                <Box sx={{ width: '100%' }} style={{ marginLeft: 'rem' }}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={1}>
                                            <GrLocation style={{ height: '4rem' }} />
                                        </Grid>
                                        <Grid item style={{ float: 'left' }}>
                                            <b>Sahara Star Hotel, Mumbai</b>
                                            <h5>ADDRESS</h5>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {/* <Box sx={{ width: '100%' }}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={1}>
                                            <GrLocation style={{ height: '4rem' }} />
                                        </Grid>
                                        <Grid item style={{ float: 'left' }}>
                                            <b>15 - 16 July 10:00AM - 6:00PM</b>
                                            <h5>DATE & TIME</h5>
                                        </Grid>
                                    </Grid>
                                </Box> */}
                                <Box sx={{ width: '100%' }} style={{ marginLeft: 'rem' }}>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={1}>
                                            <GrLocation style={{ height: '4rem' }} />
                                        </Grid>
                                        <Grid item style={{ float: 'left' }}>
                                            <b>envato@gmail.com</b>
                                            <h5>MAIL TO US</h5>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </center>
                        </div>
                    </Box>
                </List>
                <Divider />
            </Box>
        </div>

    );


    const menu = (
        <Menu
            selectable
            items={[
                {
                    key: '1',
                    label: 'About Event',
                },
                {
                    key: '2',
                    label: 'Markets',
                },
                {
                    key: '3',
                    label: 'Trading',
                },
                {
                    key: '4',
                    label: 'Investing',
                },
                {
                    key: '5',
                    label: 'Meet money',
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
                    label: 'Why Visit',
                },
                {
                    key: '2',
                    label: 'Who will Attend',
                },
                {
                    key: '3',
                    label: 'Visitor Profile',
                },
                {
                    key: '4',
                    label: 'Free Tickets',
                },
                {
                    key: '4',
                    label: 'Exhibitor Lisit',
                },
                {
                    key: '5',
                    label: 'Floor Plan',
                },
            ]}

        />
    );
    const menu2 = (
        <Menu
            selectable
            items={[
                {
                    key: '1',
                    label: 'Why to Exhibit',
                },
                {
                    key: '2',
                    label: 'Apply for Stand',
                },
                {
                    key: '3',
                    label: 'Sponorsorship Opportunities',
                },
                {
                    key: '4',
                    label: 'Promote your Brand',
                },
                {
                    key: '5',
                    label: 'Targetted Audience',
                },
                {
                    key: '6',
                    label: 'Become Sponsor',
                },
            ]}

        />
    );

    const shoot = () => {
        var navbar = document.getElementById('nav');
        navbar.classList.toggle('show');
    }
    return (
        <div>
            <div className="sticky-inner">
                <header>
                    <div className='toggle-btn' onClick={shoot}>
                        <FcList />
                    </div>
                    <div className='logo'>
                        <img id='logo' style={{ height: '3rem' }} src='https://moneyexpoindia.com//storage/137/62a6cc3fb87ed_Artboard-1@2x.png' />
                    </div>
                    <nav id='nav'>
                        <ul>
                            <li><a href='#' id='new-hover'>Home</a></li>
                            <li><a href='#'>
                                <Dropdown overlay={menu}>
                                    <Typography.Link>
                                        <Space style={{ color: '#1e1b55' }}>
                                            <div id='new-hover'>About<FcExpand /></div>
                                        </Space>
                                    </Typography.Link>
                                </Dropdown></a></li>
                            <li><a href='#' id='new-hover'>Speakers</a></li>
                            <li><a href='#' id='new-hover'>Sponsors</a></li>
                            <li><a href='#'>
                                <Dropdown overlay={menu1}>
                                    <Typography.Link>
                                        <Space style={{ color: '#1e1b55' }}>
                                            <div id='new-hover'>Visit<FcExpand /></div>
                                        </Space>
                                    </Typography.Link>
                                </Dropdown></a></li>
                            <li><a href='#'>
                                <Dropdown overlay={menu2}>
                                    <Typography.Link>
                                        <Space style={{ color: '#1e1b55' }}>
                                            <div id='new-hover'>Exhibit<FcExpand /></div>
                                        </Space>
                                    </Typography.Link>
                                </Dropdown></a></li>
                            <li>
                                <Stack spacing={2} direction="row">
                                <a href='#get--block'><Button variant="contained" style={{ height: '3.5rem', backgroundColor: '#0b083d' }}><b><FcBusinessman /> Get Ticket</b></Button></a>
                                </Stack>
                            </li>
                            <li>

                                {['right'].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <a><img id='rotate' src='https://cdn-icons-png.flaticon.com/512/2948/2948225.png' onClick={toggleDrawer(anchor, true)} /></a>
                                        <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </li>
                        </ul>
                    </nav>
                </header>

            </div>
        </div>
    );
}

export default Sticky;