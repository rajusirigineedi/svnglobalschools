import { Image } from "antd";

export function EventImage({ b1 }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        flex: 1,
      }}
    >
      <Image
        src={b1}
        height={"100%"}
        style={{
          objectFit: "cover",
        }}
      ></Image>
    </div>
  );
}
