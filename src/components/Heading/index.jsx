import * as Styled from './styles';
import P, { oneOf } from 'prop-types';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      uppercase={uppercase}
      size={size}
      as={as}
      colorDark={colorDark}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
