import styled from "styled-components";

export const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  background-color: #AAAAAA;

`;

export const Title = styled.Text`
  color: #000000;
  font-size: 25px;
  font-weight: bold;
`;

export const Nome = styled.Text`
    color: ${props => props.color};
    font-weight: 500;
`;

export const EnterButton = styled.TouchableOpacity`
    background-color: #D0D0D0;
    padding: 5px;
    border-radius: 10px;
    width: 20%;
    justify-content: center;
    align-items: center;
    margin: 30px;

`;