import { Box, Grid } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";

interface Props {
  isGridView: boolean;
  onViewBtnClick(isGridView: boolean): void;
}

function ViewChangeBtn(props: Props) {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <Box
          onClick={props.onViewBtnClick.bind(null, true)}
          sx={{
            background: props.isGridView ? "red" : "white",
            borderRadius: "2px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <GridViewIcon sx={{ color: props.isGridView ? "white" : "black" }} />
        </Box>

        <Box
          onClick={props.onViewBtnClick.bind(null, false)}
          sx={{
            background: !props.isGridView ? "red" : "white",
            borderRadius: "2px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <CropLandscapeIcon
            sx={{ color: !props.isGridView ? "white" : "black" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ViewChangeBtn;
