import React from 'react';
import { Grid, Typography } from '@mui/material'
import Text from '../../components/Text';
const details = [
    {
        company: "Softmerge Solutions Pvt Ltd",
        location: "Ameerpet, Hyderabad",
        duration: "2013 Aug- 2014 Nov",
        role: "Java developer (freelancer)",
        resp: [
            "Developing IEEE accadamic project for students"
        ]
    },
    {
        company: "Slickbit Technologies Pvt Ltd",
        location: "Madhapur, Hyderabad",
        duration: "2014 Nov- present",
        link: "https://slickbit.com/",
        describe: "",
        role: "Sr Frontend developer",
        resp: [
            "Developing web application using React",
            "Developing mobile applications using React Native",
            "Integrating Rest APIs"
        ]
    }
]
const Experience = () => {
    return (
        <Grid container className='page exp' id="exp" justifyContent="center" >
            <Grid container className='card'>
                <Grid justifyContent="center" container>
                    <Typography
                        sx={{ color: "black", fontSize: { xs: 16, sm: 24 }, textTransform: 'uppercase', fontWeight: 900, fontStyle: 'italic' }}>
                        Experience
                    </Typography>
                </Grid>
                <Grid container>
                    {
                        details.map((detail, index) => {
                            return (
                                <Grid container key={index} sx={{ padding: '20px 0px' }}>
                                    <Grid container>
                                        <Text
                                            sx={{ fontWeight: 800 }}
                                            label={detail.role} />
                                        <Text
                                            sx={{ paddingLeft: { xs: 0, sm: 1 } }}
                                            label={detail.duration} />

                                    </Grid>
                                    <Grid container>
                                        <Text
                                            component={detail.link ? "a" : "span"}
                                            href={detail.link}
                                            target={"_blank"}
                                            label={detail.company} />

                                    </Grid>
                                    <Grid>
                                        <Text
                                            sx={{ color: "#676767" }}
                                            label={detail.location} />
                                    </Grid>

                                    <Grid container component={"ul"} sx={{ paddingLeft: '20px' }}>
                                        {
                                            detail.resp.map((resp, i) => {
                                                return (
                                                    <Grid container key={i} component={"li"} sx={{ display: 'list-item' }}>
                                                        <Text
                                                            sx={{ textAlign: 'left', color: "#a1a1a1" }}
                                                            label={resp}
                                                        />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Experience
