import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import {  Typography } from "@mui/joy";
import React, { useState } from "react";


function Home() {
    return (
        <div>
           <Typography level="h1" color="neutral" sx={{justifyContent: 'center', marginY: 'auto'}} startDecorator={<AdminPanelSettingsOutlined />}>Админка для добавления схем и спецификаций в хранилище данных UBTP</Typography>
        </div>
    );
}

export default Home;