/** @jsxImportSource theme-ui */

import React from "react";
import { ThemeUIStyleObject } from "theme-ui";
import { WithChildren } from "../../utils/types";

const styles: ThemeUIStyleObject = {
  borderRadius: "rounded",
  padding: "1",
  fontSize: 1,
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
