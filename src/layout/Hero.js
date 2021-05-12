import styled from "styled-components";
import Container from "../components/Container";
import backgroundStarts from "../img/bg-stars.svg";
const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary-dark);
  background-image: url(${backgroundStarts});
`;

const Heading = styled.h1`
  color: var(--color-secondary);
  text-transform: uppercase;
`;

const Hero = () => {
  return (
    <Main>
      <Container>
        <Heading>We are launching soon</Heading>
      </Container>
    </Main>
  );
};

export default Hero;
