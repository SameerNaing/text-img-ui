import { Box } from "@mui/material";

interface Props {
  text: string;
  Icon: React.FC;
  active?: boolean;
  onClick(): void;
}

function ActionBtn(props: Props) {
  return (
    <Box
      onClick={props.onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "2px",
        cursor: "pointer",
        border: props.active ? "none" : "1px solid #BDC5B5",

        background: props.active ? "red" : "white",
        width: "60px",
        height: "50px",
        borderRadius: "12px",
        color: props.active ? "white" : "black",

        "&:hover": {
          borderColor: "red",
        },
      }}
    >
      {/** @ts-ignore */}
      <props.Icon color={props.active ? "white" : "black"} />

      <span style={{ fontSize: "0.7em", fontWeight: 500 }}>{props.text}</span>
    </Box>
  );
}

export default ActionBtn;
