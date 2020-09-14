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

export const MidSizeText = styled.p`
color: rgb(23, 43, 77);
font-size: 14px;
margin: 0;
line-height: 20px;
width: max-content;
`

export const SmallGreyText = styled.p`
  font-size: 12px;
  color:rgb(179, 186, 197);
  margin: 0;
  width: max-content;
  line-height:20px;
`