export function TriLines({ color, rightAlign }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "80%",
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: rightAlign ? "end" : "start",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "1.5rem",
          backgroundColor: color,
        }}
      ></div>
      <div
        style={{
          width: "60px",
          height: "1.5rem",
          backgroundColor: color,
        }}
      ></div>
      <div
        style={{
          width: "30px",
          height: "1.5rem",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}
