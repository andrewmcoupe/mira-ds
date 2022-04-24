import { styled } from "../../../stitches.config";

const Text = styled("span", {
  lineHeight: "1.5",
  margin: "0",
  fontWeight: 400,
  display: "block",
  marginBottom: "$small",

  defaultVariants: {
    size: "3",
    color: "contrast",
  },

  variants: {
    color: {
      gradient: {
        backgroundColor: "rgb(255,48,48)",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,48,48,1) 4%, rgba(118,226,43,1) 48%, rgba(75,225,255,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
    size: {
      1: {
        fontSize: "$tiny",
      },
      2: {
        fontSize: "$small",
      },
      3: {
        fontSize: "$medium",
      },
      4: {
        fontSize: "$large",
      },
    },
  },
});

export default Text;
