import React from 'react';
import { Grid, Hidden, Typography, Avatar } from '@mui/material'
import Text from '../../components/Text';
const details = [
  { id: 'dob', value: "August 29, 1987" },
  { id: 'ph', value: "+91807928240" },
  { id: 'mail', value: "krishanmraju@gmail.com" },
  { id: 'home', value: "Kukatpally, Hyderabad" }
]
const Intro = () => {
  return (

    <Grid container className="intro page" justifyContent="center" id="intro">
      {/* <Grid justifyContent="center">
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              md: 30,
              lg: 40
            },
            color: 'white',
            fontStyle: 'italic'
          }}>
          Krishnam Raju Jampana
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 10,
              md: 15,
              lg: 20
            },
            color: '#a1a1a1',
            fontStyle: 'italic'
          }}>
          Frontend Developer
        </Typography>
      </Grid> */}
      <Grid
        container

        className="card">
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Hidden smDown>
            <Grid container className='image'></Grid>
          </Hidden>
          <Hidden smUp>
            <Grid className="avatar" />
          </Hidden>

        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justifyContent={"center"} sx={{ padding: { xs: 0, sm: '20px' } }}>
            <Grid container justifyContent={"center"}>
              <Text
                sx={{
                  color: "#76869b",
                  fontSize: { xs: 14, sm: 20 }

                }}
                className="typed-out welcome"
                label="Hello everybody, I am"
              />
            </Grid>
            <Grid container justifyContent={"center"}>
              <Text
                label="Krishnam Raju Jampana"
                className="typed-out intro-text"
                sx={{ color: "black", fontSize: { xs: 16, sm: 24 }, textTransform: 'uppercase', fontWeight: 900 }}
              />
            </Grid>

            <Grid container justifyContent={"center"}>
              <Text
                label="Frontend Developer"
                className="typed-out role"
                sx={{ color: "#cb9620", fontSize: { xs: 14, sm: 20 }, fontWeight: 600 }}
              />
            </Grid>
            <Grid container justifyContent={"center"}>
              <Text
                label="8+ years of experience"
                className="typed-out expe"
                sx={{ color: "gray", fontSize: { xs: 14, sm: 20 }, fontWeight: 600 }}
              />
            </Grid>

          </Grid>
          <Grid container sx={{ paddingLeft: { xs: 0, sm: '20px' }, marginTop: { xs: '20px', sm: '50px' } }}>
            {
              details.map((de) => {
                return (
                  <Grid container key={de.id} sx={{ paddingTop: 2 }}>
                    <div className={`icon ${de.id}`}></div>
                    <div>
                      <Text
                        sx={{ color: "#888" }}
                        label={de.value}
                      />
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>

    </Grid>

  )
}

const ParaGraph = ({ children }) => {
  return (
    <Grid
      container
      sx={{ padding: '10px' }}
    >
      <Typography
        sx={{
          color: 'var(--intro-text-color)',
          textAlign: 'left',
          fontSize: { xs: 12, sm: 14 }
        }}>
        {children}
      </Typography>
    </Grid>
  )
}
export default Intro
