import styled from "styled-components";

export const Backgorund = styled.View`
    flex:1;
    background-color:#131313;
    
`;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items:center;
    justify-content: center;  
`;

export const Logo = styled.Image`
    margin:30px;
`;

export const AreaInput = styled.View`
    flex-direction:row;
`;

export const InputText = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)'
})`
    background:rgba(0,0,0,20);
    width:90%;
    margin:5px;                        
    font-size: 18px;
    color:#FFF;
    padding:10px;                   
    border-radius:10px;            
              
`;                        

export const SubmitButton = styled.TouchableOpacity`

    align-items: center;
    justify-content: center; 
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin: 5px;

`;


export const Link = styled.TouchableOpacity`
    margin: 5px;
    margin -bottom: 5px
`;

export const Label = styled.Text`
    color: #FFF
`;