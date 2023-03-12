import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Favorite from "@mui/icons-material/Favorite";

export default function MediaControlCard(props) {
  const { name, imgFront, imgBack, types } = props;
  return (
    <Card sx={{ display: "flex", height: 180, width: "80%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6" className="fontCapi">
            {name}
          </Typography>
          {types.map((type, idx) => {
            return (
              <Box key={idx}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  className="fontCapi"
                >
                  {type}
                </Typography>
              </Box>
            );
          })}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <Favorite sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={imgFront}
        alt={name}
      />
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={imgBack}
        alt={name}
      />
    </Card>
  );
}
