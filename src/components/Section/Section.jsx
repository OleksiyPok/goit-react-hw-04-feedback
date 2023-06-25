import PropTypes from 'prop-types';

import { Container, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Container>
    {title && <Title>{title}</Title>}
    {children && <children>{children}</children>}
  </Container>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.isRequired,
};
