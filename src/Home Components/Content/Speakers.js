import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
function Speakers(props) {
    return (
        <div id='speaker--block'>
            <div className='Speakers-bg'>
                <div align='center'>
                    <h6><b id='color-rose'>Our Speakers</b></h6>
                    <h1 style={{ color: '#fff' }}>Speakers Who Are Exparts
                        <br />
                        in Their Fields
                    </h1>
                    <img src='https://moneyexpoindia.com/assets/images/icons/divider-centered.png' />
                    <div className='ball'>
                        <img className='rotate' src='https://moneyexpoindia.com/assets/images/icons/object-15.png' />
                    </div>
                </div>

                <div className='grid'>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <br />
                            <div className='bottom-top'>
                               <a><h4 style={{ color: '#fff' }}>Patrick Spencer</h4></a> 
                                <a><p style={{ color: '#fff' }}>S&P Analyzer</p></a>
                            </div>
                        </Grid>
                    </Box>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <br />
                            <div className='bottom-top'>
                                <a><h4 style={{ color: '#fff' }}>Matthew White</h4></a>
                                <a><p style={{ color: '#fff' }}>Facebook's Co-Founder</p></a>
                            </div>
                        </Grid>
                    </Box>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <br />
                            <div className='bottom-top'>
                               <h4 style={{ color: '#fff' }}><a>Michael Dover</a></h4>
                              <p style={{ color: '#fff' }}><a>Starbuck's CEO</a></p>
                            </div>
                        </Grid>
                    </Box>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <br />
                            <div className='bottom-top'>
                                <h4 style={{ color: '#fff' }}><a>Angelina Holy</a></h4>
                                <p style={{ color: '#fff' }}><a>Maxii's Manager</a></p>
                            </div>
                        </Grid>
                    </Box>
                </div>

            </div>
            <div className='Speakers-flexible' align='center'>
                <Box align='center'
                    sx={{
                        width: 270,
                        height: 300,
                        backgroundColor: '#0b083d',
                    }}>
                    <Grid item xs={3}>
                        <br/>
                        <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                sx={{ width: 150, height: 150 }}
                            />
                        </Stack>
                        <br />
                        <br/>
                        <div className='bottom-top'>
                            <h4 style={{ color: '#fff' }}>Patrick Spencer</h4>
                            <p style={{ color: '#fff' }}>S&P Analyzer</p>
                        </div>
                    </Grid>
                    <br/>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                        <br/>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <div className='bottom-top'>
                                <h4 style={{ color: '#fff' }}>Matthew White</h4>
                                <p style={{ color: '#fff' }}>Facebook's Co-Founder</p>
                            </div>
                        </Grid>
                    </Box><br/>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                        <br/>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <div className='bottom-top'>
                                <h4 style={{ color: '#fff' }}>Michael Dover</h4>
                                <p style={{ color: '#fff' }}>Starbuck's CEO</p>
                            </div>
                        </Grid>
                    </Box><br/>
                    <Box align='center'
                        sx={{
                            width: 270,
                            height: 300,
                            backgroundColor: '#0b083d',
                        }}>
                        <Grid item xs={3}>
                        <br/>
                            <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://roadsense.org.au/wp-content/uploads/2021/08/profile-300x300.png"
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Stack>
                            <br />
                            <br />
                            <div className='bottom-top'>
                                <h4 style={{ color: '#fff' }}>Angelina Holy</h4>
                                <p style={{ color: '#fff' }}>Maxii's Manager</p>
                            </div>
                        </Grid>
                    </Box>
                </Box>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Speakers;