import React from "react";
import { styled } from "../../../stitches.config";
import type { WithChildren } from "../../utils/types";

const CardBase = styled("article", {
  borderRadius: "$small",
  border: "1px solid $gray7",
  backgroundColor: "$cardBg",
  padding: "$large",
});

const CardWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$medium",
  height: "100%",
});

const CardHeader = styled("header", {
  fontWeight: "$bold",
  fontSize: "$large",
});

const CardBody = styled("section", {
  flex: "1",
});

const CardFooter = styled("footer", {
  fontWeight: "bold",
  fontSize: "$medium",
});

const Card = (props: WithChildren) => (
  <CardBase>
    <CardWrapper>{props.children}</CardWrapper>
  </CardBase>
);

Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
