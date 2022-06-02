import { Button } from "@mira-ds/components";
import { MiraThemeProvider } from "@mira-ds/theme-provider";
import styled from "styled-components";

const Foo = styled(Button)`
  background: ${({ theme }) => theme.colors.blue10};
  ${({ theme }) => theme.utils.px(12)}
`;

export default function Web() {
  return (
    <MiraThemeProvider>
      <Foo>Hiiii</Foo>
      <h1>Web</h1>
      <Button />
    </MiraThemeProvider>
  );
}
