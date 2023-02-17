import styled from 'styled-components'

export const StyledContainer = styled.div`
width: 100vh;
margin-auto: 0;
height: 80vh;
border-radius: 18px;
background-color: #FFF;

@media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }

`
export const StyledH2 = styled.h2`
font-size: 32px;
font-weight: 700;
margin-top: 50px;
margin-bottom: 5px;
color: hsl(213, 96%, 18%);
`

export const StyledText = styled.p`
font-size: 16px;
margin-bottom: 20px;
color: hsl(229, 24%, 87%);
`

export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;

`

export const StyledLabel = styled.label`
padding-right: 140px;
color: hsl(213, 96%, 18%);
font-weight: 700;
`

export const StyledInput = styled.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
width: 80%;
color: hsl(213, 96%, 18%);
background-color: #fff;
gap: 30px;
margin-bottom: 20px;
padding: 15px;
`

export const StyledButton = styled.button`
font size: 20px;
font-weight: 700;
background-color: hsl(213, 96%, 18%);
color: #fff;
`

export const StyledPrevButton = styled.button`
font size: 20px;
font-weight: 700;
border: none;
background: none;
color: hsl(213, 96%, 18%);
`
export const StyledPlanContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px; // set the gap value
`
export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const PlanName = styled.h3`
  font-size: 24px;
  color: #000;
`;

export const PlanPrice = styled.p`
  font-size: 16px;
  color: #000
`;

export const PlanFrequency = styled.p`
  font-size: 16px;
  color: #000;
`;

export const StyledButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
width: 80%;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
`;

export const StyledImageContainer = styled.div`
height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;
