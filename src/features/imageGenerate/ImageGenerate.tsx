import { useRef, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
// @ts-ignore
import ImageEditor from "@toast-ui/react-image-editor";

import { useStateContext } from "./context/StateContext";

import PromptInput from "../../components/PromptInput";
import SuggestionText from "../../components/SuggestionText";

import styles from "./ImageGenerate.module.css";
import ViewChangeBtn from "../../components/ViewChangeBtn";
import SliderImageLayout from "../../components/SliderImageLayout";
import GridImageLayout from "../../components/GridImageLayout";
import ImgEditSideBar from "./components/ImgEditSideBar";

function ImageGenerate() {
  const contextStates = useStateContext();
  const editorRef = useRef<any>(null);

  return (
    <Box
      sx={{
        width: { lg: "90%", sm: "94%", xs: "96%" },
      }}
      className={styles.layout}
    >
      {/* Header */}
      <h1 className={styles.headerText}>Generate Image from Prompt</h1>

      {/* Image */}

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          columnGap: "60px",
        }}
      >
        <ImgEditSideBar />
        <Box sx={{ width: "600px", height: "400px" }}>
          <ImageEditor ref={contextStates.editorRef} />
        </Box>
      </Box>

      {/* </Box> */}
      <ViewChangeBtn
        isGridView={contextStates.isGridView}
        onViewBtnClick={contextStates.changeView}
      />

      {/* Suggestions */}
      <SuggestionText onSelect={contextStates.setPrompt} />

      {/* Prompt Input */}
      <PromptInput
        prompt={contextStates.prompt}
        onChange={contextStates.setPrompt}
        isEnable={contextStates.enableSendBtn}
      />
    </Box>
  );
}

export default ImageGenerate;
