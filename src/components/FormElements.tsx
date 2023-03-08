import styled from 'styled-components'

export const StyledContainer = styled.div`
border-radius: 18px;
background-color: #FFF;
width: 100%;
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
color: hsl(213, 96%, 18%);
font-weight: 700;
`
export const FormInputContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
`
export const StyledInput = styled.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
width: 80%;
color: hsl(213, 96%, 18%);
background-color: #fff;
margin-bottom: 40px;
padding: 15px;
:invalid{
  outline: 1px solid red;
}
`

export const StyledButton = styled.button`
font-size: 20px;
font-weight: 700;
background-color: hsl(213, 96%, 18%);
border-radius: 18px;
cursor: pointer;
padding: 18px;
color: #fff;
:disabled{
  color: white;
  background-color: #ccc;
  cursor: not-allowed;
}
`
export const StyledPrevButton = styled.button`
font-size: 20px;
font-weight: 700;
border: none;
background: none;
cursor: pointer;
color: hsl(213, 96%, 18%);
`
export const StyledPlanContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px;
`
export const Card = styled.div<{isSelected: boolean}>`
border: 1px solid ${props => props.isSelected ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'};
background-color: transparent;
width: 150px;
height: 200px;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
padding: 24px;
margin-right: 30px;
cursor: pointer;
`;

export const PlanName = styled.h3`
  font-size: 24px;
  color: hsl(213, 96%, 18%);
`;

export const PlanPrice = styled.p`
  font-size: 16px;
  color: hsl(231, 11%, 63%);
`;

export const PlanFrequency = styled.p`
  font-size: 16px;
  color: hsl(213, 96%, 18%);
`;

export const Box = styled.div<{isSelected: boolean}>`
border: 1px solid ${props => props.isSelected ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'};
width: 500px;
height: 50px;
margin-top: 50px;
border-radius: 10px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
padding: 14px;
margin-right: 4em;
cursor: pointer;
`
export const BoxName = styled.h4`
font-size: 18px;
color: hsl(213, 96%, 18%);
font-weight: 700;
margin-left: 50px;
margin-top: -30px;
`

export const BoxText = styled.p`
color: hsl(229, 24%, 87%);
font-size: 14px;
margin-top: -30px;
margin-left: 50px;
`

export const BoxPrice = styled.p`
display: flex;
justify-content: flex-end;
color: hsl(243, 100%, 62%);
font-size: 14px;
margin-top: -45px;
margin-right: 20px;
font-weight: 700;
`

export const BoxInput = styled.button`
  display: flex;
  z-index: 1;
  align-items: center;
  background: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
`;

export const PlanText = styled.p<{ isToggled: boolean }>`
font-size: 16px;
margin-bottom: 20px;
color: ${({isToggled}) => (isToggled ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)')};
`
export const PlanImage = styled.img`
width: 50px;
height: 50px;
`
export const PlanToggle = styled.button<{ isToggled: boolean }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-top: 15px;
  border-radius: 30px;
  background-color: ${({ isToggled }) => (isToggled ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)')};
  transition: background-color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ isToggled }) => (isToggled ? '26px' : '2px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({isToggled}) => (isToggled ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 100%)' )};
    transition: left 0.3s ease;
  }
`;

export const PlanToggleContainer = styled.div`
display: flex;
justify-content: space-evenly
`
export const StyledButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding-bottom: 40px;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
`;

export const StyledImageContainer = styled.div`
height: 100%;
@media screen and (max-width: 767px) {
  order: -1;
  
}
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

export const AddOnCard = styled.div`
background-color: transparent;
`
export const PriceDiv = styled.div`
background-color: hsl(229, 24%, 87%);
border-radius: 18px;
width: 400px;
margin-right: 40px;
margin-top: 20px;
padding: 14px;
`

export const TotalDiv = styled.div`
background-color: transparent;
border-radius: 18px;
width: 400px;
margin-right: 40px;
margin-top: 20px;
padding: 14px;
`

export const Step4Text = styled.div`
font-size: 16px;
font-weight: 700;
color: hsl(213, 96%, 18%);
`
export const ChangeButton = styled.button`
color: hsl(231, 11%, 63%);
border: none;
background: none;
text-decoration: underline;
cursor: pointer;
:hover{
  color: hsl(243, 100%, 62%);
}`

export const Step4AddOns = styled.p`
color: hsl(231, 11%, 63%);
font-size: 14px;
`

export const Step4Price = styled.p`
display: flex;
justify-content: flex-end;
color: hsl(243, 100%, 62%);
font-size: 14px;
font-weight: 700;
margin-top: -20px;
`

export const TotalPrice = styled.em`
display: flex;
justify-content: flex-end;
color: hsl(243, 100%, 62%);
font-size: 18px;
font-weight: 700;
margin-top: -40px;
`
export const Step4AddOnsContainer = styled.div`
display: flex;
flex-direction: column;
`
export const ThankYouContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 500px;
margin-right: 40px;
`
