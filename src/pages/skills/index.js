import { Grid } from "@mui/material"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Text from "../../components/Text"
import reactjs from '../../assets/images/skills/react.png'
import node from '../../assets/images/skills/node.png'
import js from '../../assets/images/skills/js.png'
import css from '../../assets/images/skills/css.png'
import html from '../../assets/images/skills/html.png'
const skillsDetails = [
    {
        id: 1,
        skill: "React Js",
        exp: "8",
        url: reactjs,
        rate: 85
    },
    {
        id: 2,
        skill: "React Native",
        exp: "5",
        url: reactjs,
        rate: 75
    },
    {
        id: 3,
        skill: "Javascript",
        exp: "8",
        url: js,
        rate: 80
    },
    {
        id: 4,
        skill: "HTML",
        exp: "8",
        url: html,
        rate: 75
    },
    {
        id: 5,
        skill: "CSS3",
        exp: "8",
        url: css,
        rate: 60
    },
    {
        id: 5,
        skill: "NodeJs",
        exp: "2",
        url: node,
        rate: 50
    }
]
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: { xs: 5, sm: 8, md: 12 },
    width: '100%',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        background: 'linear-gradient(90deg, rgba(5, 0, 36, 1) 0 %, rgba(9, 121, 108, 1) 35 %, rgba(188, 0, 255, 1) 100 %) !important'
    },
}));
const Skills = () => {
    return (
        <Grid container className="exp page" justifyContent="center" id="skills">
            <Grid className="card" sx={{ padding: 4, width: '100%' }}>
                <Grid container justifyContent={"center"}>
                    <Text
                        label="Skills"
                        sx={{ color: "black", fontSize: { xs: 16, sm: 24 }, textTransform: 'uppercase', fontWeight: 900 }}
                    />

                </Grid>
                <Grid container justifyContent={"center"}>
                    {
                        skillsDetails.map((skill) => {
                            return (
                                <Grid id={skill.id} container className="skillcards" alignItems={"center"} sx={{ marginTop: 4 }}>

                                    <Grid item xs={2}>
                                        <Grid component={"img"}
                                            src={skill.url}
                                            sx={{
                                                width: { xs: 30, sm: 50 },
                                                height: { xs: 30, sm: 50 }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Grid container justifyContent={"space-between"}>
                                            <Text
                                                label={skill.skill}
                                            />
                                            <Text
                                                sx={{
                                                    color: skill.rate < 50 ? 'red' : skill.rate < 75 ? '#13dcc5' : 'green'
                                                }}
                                                label={`${skill.rate}%`}
                                            />
                                        </Grid>
                                        <BorderLinearProgress
                                            value={skill.rate}
                                            style={{ width: '100%' }}
                                            className="lg"
                                            sx={{
                                                height: { xs: 5, sm: 8, md: 10 }
                                            }}
                                            variant="determinate" />
                                    </Grid>
                                    {/* <Grid item xs={3}>
                                        <Text
                                            label={`${skill.exp} y`}
                                        />
                                    </Grid> */}
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>

    )
}
export default Skills