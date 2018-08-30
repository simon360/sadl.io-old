import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
// import { linkTo } from "@storybook/addon-links";

import color from "../color";
import type from "../type";

const HugeHeading = styled.h1`
  color: ${color.primary};
  font-size: ${type.size.huge};
  font-weight: ${type.weight.bold};
  line-height: ${type.lineHeights.squashed};
  margin: 0;
`;

const VeryBigHeading = styled.h2`
  color: ${color.primary};
  font-size: ${type.size.veryBig};
  font-weight: ${type.weight.bold};
  line-height: ${type.lineHeights.squashed};
  margin: 0;
`;

const BiggerHeading = styled.h2`
  color: ${color.primary};
  font-size: ${type.size.bigger};
  font-weight: ${type.weight.normal};
  line-height: ${type.lineHeights.normal};
  margin: 0;
`;

const BigHeading = styled.h2`
  color: ${color.primary};
  font-size: ${type.size.big};
  font-weight: ${type.weight.normal};
  line-height: ${type.lineHeights.normal};
  margin: 0;
`;

const NormalText = styled.p`
  color: ${color.textPrimary};
  font-size: ${type.size.standard};
  line-height: ${type.lineHeights.normal};
  margin: 0;
`;

const SmallText = styled.small`
  color: ${color.textPrimary};
  font-size: ${type.size.small};
  font-variant: small-caps;
  line-height: ${type.lineHeights.normal};
  margin: 0;
  text-transform: lowercase;
`;

const ScrollableArea = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const TextDemo = styled.p`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  margin: 0;
`;

const text = "The quick brown fox jumped over the lazy dog.";

storiesOf("Theme/Type", module).add("Showcase", () => (
  <div>
    <HugeHeading>Typography</HugeHeading>
    <NormalText>
      Text should always be set in Source Sans Pro. The base font size is 16px,
      with a type scale of 1.333. Boldness should be used for emphasis, and for
      headings at levels 1 and 2. Italics should be used sparingly in text, for
      lighter emphasis.
    </NormalText>

    <ScrollableArea>
      <TextDemo
        fontSize={type.size.huge}
        lineHeight={type.lineHeights.squashed}
      >
        {text}
      </TextDemo>
      <TextDemo
        fontSize={type.size.veryBig}
        lineHeight={type.lineHeights.squashed}
      >
        {text}
      </TextDemo>
      <TextDemo
        fontSize={type.size.bigger}
        lineHeight={type.lineHeights.normal}
      >
        {text}
      </TextDemo>
      <TextDemo fontSize={type.size.big} lineHeight={type.lineHeights.normal}>
        {text}
      </TextDemo>
      <TextDemo
        fontSize={type.size.standard}
        lineHeight={type.lineHeights.normal}
      >
        {text}
      </TextDemo>
      <TextDemo fontSize={type.size.small} lineHeight={type.lineHeights.normal}>
        {text}
      </TextDemo>
    </ScrollableArea>
  </div>
));
