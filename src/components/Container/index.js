import styled from 'styled-components'

export const FullPageCentredContainer = styled.div`
  background: #f9fafc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageContainer = styled.div`
${props => {
  if (props.singlePage) {
    return`
    background: ${props.background};

    `
  } else if (props.homePage) {
    return`
      background: #fafbfc;
    `
  }
}}

  min-height: 100vh;
  overflow-y: auto;
  position: relative;
`;