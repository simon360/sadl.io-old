import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";

import animation from "../animation";
import color from "../color";
import flourish from "../flourish";
import space from "../space";

import { HugeHeading } from "../../components/Heading";
import Section from "../../components/Section";
import Spacing from "../../components/Spacing";
import Text from "../../components/Text";

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const Color = styled.ul`
  background-color: ${props => props.color};
  border-radius: ${flourish.rounded.standard};
  height: ${space.four};
  margin-right: ${space.one};
  margin-bottom: calc(${space.one} + ${space.two});
  margin-left: 0;
  padding-left: 0;
  position: relative;
  width: ${space.four};

  &::after {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    content: '${props => props.name}';
    color: ${props => props.color};
    display: flex;
    height: ${space.one};
    justify-content: center;
    left: 0;
    margin-top: ${space.half};
    opacity: 0;
    position: absolute;
    transition: opacity ${animation.timings.one};
    top: 100%;
    width: 100%;
  }

  &:hover::after {
    opacity: 1;
  }
`;

storiesOf("Theme|Color", module).add("Color", () => (
  <Section>
    <Spacing bottom="one">
      <HugeHeading>Color</HugeHeading>
    </Spacing>

    <Spacing bottom="oneAndHalf">
      <Text>
        The color palette is intentionally limited. The primary color should be
        used to add a bit of fourish, and for added emphasis.
      </Text>
      <Text>
        Where additional color is desired, the use of photography is encouraged.
      </Text>
    </Spacing>
    <Wrapper>
      <Color color={color.primary} name="primary" />
      <Color color={color.primaryLighter} name="primaryLighter" />
    </Wrapper>
  </Section>
));
