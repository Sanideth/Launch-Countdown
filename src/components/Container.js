import styled from 'styled-components';

const ContainerDiv = styled.div`
    max-width: 120rem;
    margin: 0 auto;
`

const Container = (props) => {
    return (
        <ContainerDiv>
            {props.children}
        </ContainerDiv>
    )
}


export default Container;