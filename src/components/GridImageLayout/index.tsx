import { Box, Grid } from "@mui/material";

import styles from "./index.module.css";

function GridImageLayout() {
  return (
    <Grid className={styles.imageDisplay} container spacing={1} rowGap={"0px"}>
      <Grid item sm={6} xs={12}>
        <Box
          sx={{
            borderRadius: "29px",
            height: "200px",
            width: "100%",
            background: "yellow",
          }}
        ></Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box sx={{ height: "200px", width: "100%", background: "red" }}></Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box sx={{ height: "200px", width: "100%", background: "blue" }}></Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box sx={{ height: "200px", width: "100%", background: "green" }}></Box>
      </Grid>
    </Grid>
  );
}

export default GridImageLayout;
