import styled from 'styled-components'
import React, { DetailedHTMLProps, ImgHTMLAttributes} from 'react';
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
color: hsl(213, 96%, 18%);
`

export const StyledText = styled.p`
font-size: 16px;
color: hsl(229, 24%, 87%);
@media screen and (max-width: 767px) {
  margin-top: -30px
}
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
margin-top: 30px;
`
export const FormInputContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const StyledInput = styled.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
width: 80%;
cursor: pointer;
font-weight: 700;
color: hsl(213, 96%, 18%);
background-color: transparent;
border: 1px solid hsl(229, 24%, 87%);

padding: 15px;
:invalid{
  outline: 1px solid red;
}
::placeholder{
  color: hsl(229, 24%, 87%);
}
:hover{
  border: 1px solid hsl(243, 100%, 62%);
}

`

export const StyledButton = styled.button`
font-size: 16px;
font-weight: 700;
background-color: hsl(213, 96%, 18%);
border-radius: 10px;
border: none;
cursor: pointer;
padding-top: 15px;
padding-bottom: 15px;
margin-top: 40px;
width: 125px;
color: #fff;
:disabled{
  color: white;
  background-color: #ccc;
  cursor: not-allowed;
}
:hover:not(:disabled):hover{
  background-color: hsl(243, 100%, 62%);
}
@media screen and (max-width: 767px){
  margin-top: 10px;
}
`
export const StyledPrevButton = styled.button`
font-size: 16px;
font-weight: 700;
border: none;
background: none;
margin-top: 40px;
cursor: pointer;
color: hsl(231, 11%, 63%);
:hover{
  color: hsl(243, 100%, 62%);
}
@media screen and (max-width: 767px) {
  margin-top: 0px;
}
`
export const StyledPlanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: center;
}
`

export const AddOnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: center;
}
`

export const Step4Container = styled.div`
display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    justify-content: center;
}
`
export const Card = styled.div<{isSelected: boolean}>`
border: 1px solid ${props => props.isSelected ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'};
background-color: transparent;
width: 175px;
height: 200px;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
padding: 24px;
margin-bottom: 40px;
margin-right: 40px;
cursor: pointer;
@media screen and (max-width: 767px) {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 50px;
  width: 100%;
}
:hover{
  border: 1px solid hsl(243, 100%, 62%);
}
`;

export const PlanName = styled.h3`
  font-size: 24px;
  color: hsl(213, 96%, 18%);
  margin-top: 10px;
`;

export const PlanPrice = styled.p`
  font-size: 16px;
  color: hsl(231, 11%, 63%);
`;

export const PlanFrequency = styled.p`
  font-size: 16px;
  color: hsl(213, 96%, 18%);
  @media screen and (max-width: 767px){
    display: none;
  }
`;
export const Box = styled.div<{isSelected: boolean}>`
border: 1px solid ${props => props.isSelected ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'};
width: 100%;
height: 50px;
margin-top: 50px;
border-radius: 10px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
padding: 14px;
margin-right: 2em;
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
 display: none;
 background-color: none;
  display: flex;
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
@media screen and (max-width: 767px) {
  margin-left: -20px;
  
}
`
export const PlanToggle = styled.button<{ isToggled: boolean }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 30px;
  background-color: ${({ isToggled }) => (isToggled ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)')};
  transition: background-color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    right: ${({ isToggled }) => (isToggled ? '26px' : '2px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({isToggled}) => (isToggled ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 100%)' )};
    transition: left 0.3s ease;
  }
`;

export const PlanToggleContainer = styled.div`
display: flex;
background-color: hsl(217, 100%, 97%) ;
justify-content: space-evenly;
width: 50%;
margin: 0 auto;
@media screen and (max-width: 767px) {
  width: 80%;
  margin-left: 18px;
}
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
width: 100%;
@media screen and (max-width: 767px) {
  order: 1;
  
}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AddOnCard = styled.div`
background-color: transparent;
`
export const PriceDiv = styled.div`
    background-color: hsl(229, 24%, 87%);
    border-radius: 18px;
    width: 100%;
    min-width: 400px;
    margin-right: 40px;
    margin-top: 20px;
    padding: 14px;
    @media screen and (max-width: 767px) {
      min-width: 250px;
    }
    @media only screen and (min-width: 768px) { 
        width: 60%; 
        margin-right: 80px; 
        padding: 20px; 
    }
`
export const TotalDiv = styled.div`
    background-color: transparent;
    border-radius: 18px;
    width: 100%;
    min-width: 400px;
    margin-right: 40px;
    margin-top: 20px;
    padding: 14px;
    @media screen and (max-width: 767px) {
      min-width: 250px;
    }
    @media only screen and (min-width: 768px) { 
        width: 40%;
        margin-right: 80px; 
        padding: 20px; 
    }
`
export const Step4Text = styled.div`
font-size: 16px;
font-weight: 600;
color: hsl(213, 96%, 18%);
`
export const ChangeButton = styled.button`
color: hsl(231, 11%, 63%);
border: none;
background: none;
padding-right: 30px;
margin-bottom: 30px;
text-decoration: underline;
cursor: pointer;
:hover{
  color: hsl(243, 100%, 62%);
}`

export const Step4AddOns = styled.p`
color: hsl(231, 11%, 63%);
font-size: 16px;
`

export const Step4Price = styled.p`
display: flex;
justify-content: flex-end;
color:  hsl(231, 11%, 63%);
font-size: 16px;
font-weight: 700;
margin-top: -20px;
`
export const Seperator = styled.div`
border: 1px solid  hsl(231, 11%, 63%);
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
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  order: 2;
  margin-right: 40px;
  text-align: center;
`;

export const StepperContainer = styled.div`
 position: absolute;

 top: 30px;
 left: 30px;
 transform: translate(30%, 15%);
`;
export const Stepper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const StepperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 14px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    background-color: hsl(228, 100%, 84%);
    color: #000;
  }
`;
export const StepperItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const StepperLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (max-width: 767px){
    display: none;
  }
`;
export const StepperLabel = styled.div`
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: hsl(229, 24%, 87%);
`;
export const StepperText = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  order: 2;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
    width: 100%;
  }
`;
export const ErrorMessage = styled.p`
  margin-right: 40px;
  color: red;
  font-size: 12px;
`;
  
export const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 500px;
height: 100px;
@media screen and (max-width: 767px) {
  height: 150px;
  width: 250px;

}`

export const CheckmarkImage = styled.img`
background-color: green;
display: flex;
justify-content: center;
align-items: center;
margin-left: -8px;
width: 20px;
height: 20px;
cursor: pointer;
border-radius: 5px;
`

interface StyledImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  mobileSrc: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  height: 100%;
  @media screen and (max-width: 767px) {
    content: url(${props => props.mobileSrc});
    width: 100%;
  }
`;

