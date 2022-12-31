import { Box } from "@mui/material";
import "../styles/home.css";

export const Home = () => {
  return (
    <>
      <Box
        className="hi"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <h1>Hi from home</h1>
    </>
  );
};
