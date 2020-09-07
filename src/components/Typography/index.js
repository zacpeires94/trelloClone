import styled from 'styled-components';

export const ColumnTitle = styled.p`
  margin: 0;
  width: max-content;
  color: #172b4d;
  font-size: 14px;
  font-weight: bold;
  ${(props) => {
    if (props.grey) {
      return `
                color:#6b778c;
                font-weight: normal;
            `;
    } else if (props.white) {
        return`
            color: white;
            font-weight: normal;
        `
    }
  }}
`;