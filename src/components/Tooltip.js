import React from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div`
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  left: 100%; /* Position to the right of the container */
  top: 50%;
  transform: translateX(10px) translateY(-50%); /* Adjust tooltip position */
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: opacity 0.9s;
  white-space: nowrap;
`;

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <TooltipText isVisible={isVisible}>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
