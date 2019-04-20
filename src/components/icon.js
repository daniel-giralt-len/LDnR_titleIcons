import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import svgs from "../svg-list";

const Outer = styled.div`
  width: ${({ size }) => size}px;
  align-items: center;
  display: grid;
  grid-template-columns: ${({ position }) => {
    switch (position) {
      case "left":
        return "3px 1px 0px";
      case "center":
      default:
        return "2px 2px 0px";
      case "right":
        return "1px 3px 0px";
    }
  }};
`;

const CenterIcon = styled.div`
  z-index: 1;
`;
const Icon = ({ size, type, position }) => {
  const svg = svgs[type];
  return (
    <Outer size={size} position={position}>
      <div dangerouslySetInnerHTML={{ __html: svg("#9b0700") }} />
      <CenterIcon dangerouslySetInnerHTML={{ __html: svg("#FFF") }} />
      <div dangerouslySetInnerHTML={{ __html: svg("#07b0Df") }} />
    </Outer>
  );
};

//TODO: allow sizing

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(svgs)).isRequired,
  position: PropTypes.oneOf(["left", "center", "right"]),
  size: PropTypes.number
};

export default Icon;
