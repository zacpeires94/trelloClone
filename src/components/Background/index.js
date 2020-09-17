import styled from 'styled-components';

export const BlackOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    align-items: flex-start;
    z-index: 20;
    justify-content: center;
    display: flex;
`