/** @jsxImportSource theme-ui */

import React from "react";
import { ThemeUIStyleObject } from "theme-ui";
import { WithChildren } from "../../utils/types";

const styles: ThemeUIStyleObject = {
  borderRadius: "small",
  border: "none",
  padding: "tiny",
  fontSize: "small",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "max-content",
  lineHeight: "12px",
};

export const Badge = (props: WithChildren<{ variant?: string }>) => (
  <span sx={{ ...styles, variant: props.variant }}>{props.children}</span>
);

Badge.displayName = "MiraBadge";
