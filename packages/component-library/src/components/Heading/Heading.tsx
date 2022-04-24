import { FunctionComponent } from "react";
import { styled } from "../../../stitches.config";

const Heading = styled("h1", {
  margin: "0",
  overflowWrap: "break-word",
  fontWeight: "$7",
  fontSize: "$xxl",
  marginBottom: "$medium",

  "@bp2": {
    fontSize: "$xxxl",
  },

  defaultVariants: {
    size: "1",
  },

  variants: {
    gradient: {
      true: {
        backgroundColor: "rgb(255,48,48)",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,48,48,1) 4%, rgba(118,226,43,1) 48%, rgba(75,225,255,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    size: {
      1: {
        fontSize: "$xxxl",
      },
      2: {
        fontSize: "$xxl",
      },
      3: {
        fontSize: "$large",
      },
      4: {
        fontSize: "$medium",
      },
      5: {
        fontSize: "$small",
      },
      6: {
        fontSize: "$tiny",
      },
    },
  },
});

export default Heading;
