import styled from 'styled-components'

export const Container = styled.div`
  && {
    background: rgb(173, 178, 155);
    margin: 2rem 12.5%;
    color: rgb(50, 50, 50);

    ::after {
      z-index: unset;
      pointer-events: none;
    }
  }
`
