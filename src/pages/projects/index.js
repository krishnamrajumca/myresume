import { Grid, Typography } from "@mui/material"
import Text from "../../components/Text"
const projects = [
    {
        title: "Spinov",
        duration: "2023 Mar - present",
        desc: "The game is an interactive, fun and engaging way to enhance the sports-watching experience at bars. It allows players to make predictions and earn points based on the outcome of various pre-match and in-match events.",
        stack: ["React", "React Native", "Redux", "Material UI"],

    },
    {
        title: "Go Appetit",
        duration: "2021 Jan - present",
        desc: "Go Appetit is a  Canada based cloud POS (SaaS) that caters specifically to the F&B (food and beverage) space helping them manage their front-end and back-end tasks including order-taking, KOT printing, menu management. it’s also including PAX integration for the payment process and bill printing",
        stack: ["React", "React Native", "Redux", "Material UI"],
        client: "Moneris Solutions"
    },
    {
        title: "Banyan",
        duration: "2014 Nov - 2020 Feb",
        desc: "Banyan is a cloud POS (SaaS) that caters specifically to the F&B (food and beverage) space helping them manage their front-end and back-end tasks including order-taking, KOT printing, menu management, inventory management, feedback management",
        stack: ["React", "React Native", "Redux", "Material UI"]
    }
]
const Projects = () => {
    return (
        <Grid container className="intro page" justifyContent="center" id="projects">
            <Grid container className='card'>
                <Grid justifyContent="center" container>
                    <Typography
                        sx={{ color: "black", fontSize: { xs: 16, sm: 24 }, textTransform: 'uppercase', fontWeight: 900, fontStyle: 'italic' }}>
                        Projects
                    </Typography>
                </Grid>
                <Grid container>
                    {
                        projects.map((project, index) => {
                            return (
                                <Grid container key={project.title} sx={{ marginTop: '20px', borderBottom: index !== projects.length - 1 ? '0.5px solid #c5c5c5' : '0px solid', paddingBottom: '10px' }}>
                                    <Grid container>
                                        <Text
                                            label={project.title}
                                        />
                                        <Text
                                            sx={{ paddingLeft: { xs: '4px', sm: 1 } }}
                                            label={project.duration}
                                        />
                                    </Grid>
                                    <Grid container>
                                        <Text
                                            sx={{
                                                textAlign: 'left',
                                                fontSize: 13,
                                                color: "#b1b1b1",
                                                marginTop: '5px',
                                                marginBottom: '5px',
                                                textIndent: '30px'
                                            }}
                                            label={project.desc} />
                                    </Grid>
                                    <Grid container>
                                        <Text
                                            sx={{ textAlign: 'left', fontSize: 13 }}
                                            label={project.stack.join(", ")} />
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
export default Projects