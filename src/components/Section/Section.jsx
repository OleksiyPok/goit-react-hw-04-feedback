import PropTypes from 'prop-types';

import { Container, Title, Children } from './Section.styled';

const Section = ({ title, children }) => (
  <Container>
    {title && <Title>{title}</Title>}
    {children && <Children>{children}</Children>}
  </Container>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
