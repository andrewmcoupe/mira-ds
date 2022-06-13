/** @jsxImportSource theme-ui */

import type { WithChildren } from "../../utils/types";
import { Heading as ThemeUiHeading } from "theme-ui";
// import {theme} from '@mira-ds/theme-provider' - use keys from heading variants to constrain as and variant props

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const DEFAULT_TAG: Headings = "h1";

export const Heading = ({
  children,
  as = DEFAULT_TAG,
}: WithChildren<{ as: Headings }>) => {
  return (
    <ThemeUiHeading as={as} variant={as}>
      {children}
    </ThemeUiHeading>
  );
};
