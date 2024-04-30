import { useRef } from "react";

import { Box } from "@mui/material";

function SliderImageLayout() {
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLDivElement | null>(null);
  const img3Ref = useRef<HTMLDivElement | null>(null);
  const img4Ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        position: "relative",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",

          position: "absolute",
          top: "40%",
          transform: "translate(0%, -50%)",
          right: 0,
          height: "300px",
          width: { md: "80%", xs: "99%" },
        }}
      >
        <Box
          ref={img1Ref}
          sx={{
            height: "300px",
            minWidth: "400px",
            background: "yellow",
            border: "1px solid red",
          }}
        ></Box>

        <Box sx={{ minWidth: "10px" }}></Box>

        <Box
          ref={img2Ref}
          sx={{
            height: "300px",
            minWidth: "400px",
            background: "green",
            border: "1px solid red",
          }}
        ></Box>
        <Box sx={{ minWidth: "10px" }}></Box>
        <Box
          ref={img3Ref}
          sx={{
            height: "300px",
            minWidth: "400px",
            background: "blue",
            border: "1px solid red",
          }}
        ></Box>
        <Box sx={{ minWidth: "10px" }}></Box>
        <Box
          ref={img4Ref}
          sx={{
            height: "300px",
            minWidth: "400px",
            background: "yellow",
            border: "1px solid red",
          }}
        ></Box>
        <Box sx={{ minWidth: "20px" }}></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: "40px",
          width: "100%",
          columnGap: "20px",
          justifyContent: "center",
        }}
      >
        <Box
          onClick={() =>
            img1Ref.current?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            })
          }
          sx={{ height: "50px", minWidth: "80px", background: "yellow" }}
        ></Box>
        <Box
          onClick={() =>
            img2Ref.current?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            })
          }
          sx={{ height: "50px", minWidth: "80px", background: "green" }}
        ></Box>
        <Box
          onClick={() =>
            img3Ref.current?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            })
          }
          sx={{ height: "50px", minWidth: "80px", background: "blue" }}
        ></Box>
        <Box
          onClick={() =>
            img4Ref.current?.scrollIntoView({
              behavior: "smooth",
              inline: "end",
            })
          }
          sx={{ height: "50px", minWidth: "80px", background: "yellow" }}
        ></Box>
      </Box>
    </Box>
  );
}

export default SliderImageLayout;
