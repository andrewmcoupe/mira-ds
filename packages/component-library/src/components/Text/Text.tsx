/** @jsxImportSource theme-ui */
import React from "react";
import { Text as ThemeUiText, ThemeUIStyleObject } from "theme-ui";

export type TextProps = {
  emphasised?: boolean;
  children: React.ReactNode;
};

const textStyles: ThemeUIStyleObject = {
  fontSize: 2,
  margin: 0,
};

const emphasisedTextStyles: ThemeUIStyleObject = {
  fontStyle: "normal",
  fontWeight: "bold",
  background: (theme) =>
    `linear-gradient(to right, ${theme.colors?.bodyTextColorEmphasis}, ${theme.colors?.primary})`,
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
};

export const Text = (props: TextProps) => {
  const element = props.emphasised ? "em" : ThemeUiText;
  const additionalStyles = props.emphasised ? emphasisedTextStyles : {};
  return (
    <ThemeUiText sx={{ ...textStyles, ...additionalStyles }} as={element}>
      {props.children}
    </ThemeUiText>
  );
};
