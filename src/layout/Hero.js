import styled from "styled-components";
import Container from "../components/Container";
import backgroundMountains from "../img/pattern-hills.svg";
const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundMountains});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
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
