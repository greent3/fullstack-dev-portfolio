import { Typography, Box, Stack, } from "@mui/material";
import React from "react";
import { customTheme, themeByComponent } from "../theme/theme";



export default function futureProjects() {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", mt: 10, mb: 28, minWidth: '930px' }}>
            <Typography variant="h5" sx={{ ...themeByComponent.sectionTitle, mb: 2 }}> This year, I would really like to work on web and mobile apps that:</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Stack>
                    <Typography sx={themeByComponent.regularText}>
                        • Leverage Machine Learning 🤖
                    </Typography>
                    <Typography sx={themeByComponent.regularText}>
                        • Gain insights about user patterns from user interactions & A/B testing 📊
                    </Typography>
                    <Typography sx={themeByComponent.regularText}>
                        • Integrate with BTC blockchain or lightning network 📒
                    </Typography>
                </Stack>
            </Box>

        </Box>
    )
}