import React, { useState, useEffect } from "react";
import Icon from "./icon";
import shuffle from "array-shuffle";
import styled from "styled-components";
import PropTypes from "prop-types";

import ICONS from "../icon-list";
const iconNames = Object.values(ICONS);

const SlotWrapper = styled.div`
  height: ${({ size }) => size}px;
  transform: translateY(
    ${({ size, index }) => -1 * 204 * index}px
  ); // TODO: Replace 204 with size once Icon's height can be sized down
  transition: transform 2s;
`;

const Slot = ({ size, type: goalIcon, position }) => {
  const [iconList] = useState(shuffle(iconNames));
  const [currentIcon, toIcon] = useState(0);

  useEffect(() => {
    toIcon(iconList.indexOf(goalIcon));
  });

  return (
    <SlotWrapper size={size} index={currentIcon}>
      {iconList.map((type, index) => (
        <Icon position={position} size={size} type={type} key={index} />
      ))}
    </SlotWrapper>
  );
};

Slot.propTypes = {
  size: PropTypes.number,
  type: PropTypes.oneOf(iconNames),
  position: PropTypes.oneOf(["left", "center", "right"])
};

export default Slot;
