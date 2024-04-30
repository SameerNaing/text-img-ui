import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useStateContext } from "../../context/StateContext";

// icons
import FlipX from "../../../../icons/FlipX";
import FlipY from "../../../../icons/FlipY";
import RotateLeft from "../../../../icons/RotateLeft";
import RotateRight from "../../../../icons/RotateRight";
import Sepia from "../../../../icons/Sepia";
import Greyscale from "../../../../icons/Greyscale";
import InvertColor from "../../../../icons/InvertColor";
import Blur from "../../../../icons/Blur";
import Sharpen from "../../../../icons/Sharpen";
import Emboss from "../../../../icons/Emboss";

import ActionBtn from "./components/ActionBtn";

function ImgEditSideBar() {
  const contextStates = useStateContext();

  return (
    <Box
      sx={{
        height: "100%",
        width: "20%",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        padding: "12px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
        <ArrowBackIcon fontSize="small" /> <span>Back</span>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <p style={{ fontSize: "0.9em", fontWeight: 700 }}>Flip</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5px",
            columnGap: "10px",
          }}
        >
          <ActionBtn
            active={contextStates.editorStates.flipX}
            onClick={contextStates.flipX}
            text="Flip X"
            Icon={FlipX}
          />
          <ActionBtn
            active={contextStates.editorStates.flipY}
            onClick={contextStates.flipY}
            text="Flip Y"
            Icon={FlipY}
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <p style={{ fontSize: "0.9em", fontWeight: 700 }}>Rotate</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5px",
            columnGap: "10px",
          }}
        >
          <ActionBtn
            onClick={contextStates.rotateRight}
            text="30°"
            Icon={RotateRight}
          />
          <ActionBtn
            onClick={contextStates.rotateLeft}
            text="-30°"
            Icon={RotateLeft}
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <p style={{ fontSize: "0.9em", fontWeight: 700 }}>Filter</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5px",
            columnGap: "10px",
          }}
        >
          <ActionBtn
            active={contextStates.editorStates.greyScale}
            onClick={contextStates.greyScale}
            text="Greyscale"
            Icon={Greyscale}
          />
          <ActionBtn
            active={contextStates.editorStates.sepia1}
            onClick={contextStates.sepia1}
            text="Sepia"
            Icon={Sepia}
          />
          <ActionBtn
            active={contextStates.editorStates.emboss}
            onClick={contextStates.emboss}
            text="Emboss"
            Icon={Emboss}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "5px",
            columnGap: "10px",
          }}
        >
          <ActionBtn
            active={contextStates.editorStates.invert}
            onClick={contextStates.invert}
            text="Invert"
            Icon={InvertColor}
          />
          <ActionBtn
            active={contextStates.editorStates.blur}
            onClick={contextStates.blur}
            text="Blur"
            Icon={Blur}
          />
          <ActionBtn
            active={contextStates.editorStates.sharpen}
            onClick={contextStates.sharpen}
            text="Sharpen"
            Icon={Sharpen}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ImgEditSideBar;
