import { Typography } from "@mui/material"

const Text = ({ label, sx, ...props }) => {
    return (
        <Typography
            sx={{
                ...sx
            }}
            {...props}
        >
            {label}
        </Typography>
    )
}

export default Text