import React from 'react';
import { Grid, Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const details = [
    {
        college: "Dr. B.V.Raju Institute of Computer Education",
        education: "MCA",
        place: "Bhimavaram",
        duration: "2011",
        percentace: "Grade 7.36 / 10",
    },
    {
        college: "DNR college",
        education: "B.Sc",
        place: "Bhimavaram",
        duration: "2007",
        percentace: "73%"
    },
    {
        college: "Vignan Jr college",
        education: "Intermediate",
        place: "Kaikalure",
        duration: "2004",
        percentace: "75.6%"
    },
    {
        college: "ZPH school",
        education: "SSC",
        place: "Pedatummidi",
        duration: "2002",
        percentace: "63%"
    }
]
const Education = () => {
    return (
        <Grid container className='page intro' id="education" justifyContent="center" >
            <Grid container className='card'>
                <Grid justifyContent="center" container>
                    <Typography
                        sx={{ color: "black", fontSize: { xs: 16, sm: 24 }, textTransform: 'uppercase', fontWeight: 900, fontStyle: 'italic' }}>
                        Education
                    </Typography>
                </Grid>
                {/* <Grid container>
                    {
                        details.map((edu) => {
                            return (
                                <Grid container sx={{ padding: '10px' }}>

                                    <Row url={cap} label={edu.education} />
                                    <Row url={university} label={edu.college} />
                                    <Row url={grade} label={edu.percentace} />
                                    <Row url={calendar} label={edu.duration} />
                                    <Row url={location} label={edu.place} />
                                </Grid>
                            )
                        })
                    }
                </Grid> */}
                <Timeline position="right">
                    {
                        details.map((item) => {
                            return (
                                <TimelineItem key={item.education}>

                                    <TimelineSeparator>
                                        <TimelineDot sx={{ fontSize: 10, backgroundColor: "black" }}>
                                            {item.duration}
                                        </TimelineDot>
                                        <TimelineConnector sx={{ minHeight: 50 }} />
                                    </TimelineSeparator>
                                    <TimelineContent >
                                        <b>{item.education}</b>,<span style={{ color: '#a1a1a1', fontSize: 14 }}> {item.college}, {item.place}, {item.percentace}</span>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        })
                    }
                </Timeline>
            </Grid>

        </Grid>
    )
}

export default Education
