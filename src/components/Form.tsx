import React, { useState } from 'react';
import styled from 'styled-components';
import { 
    StyledButton,
    StyledButtonContainer,
    StyledContainer,
    StyledForm,
    StyledH2,
    StyledInput,
    StyledLabel,
    StyledText,
    StyledPrevButton,
    StyledPlanContainer,
    PlanFrequency,
    PlanName,
    PlanPrice,
    Card,
    
} from './FormElements';
import img from '../assets/sidebardesktop.svg';

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 70px;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  position: relative;
  height: 100%;
`;

const StyledImage = styled.img`
height: 80vh;

;`

const StepperContainer = styled.div`
position: absolute;
top: 30%;
left: 30%;
transform: translate(-50%, -50%);
margin-top: -40px;
`;


const Stepper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
`;

const StepperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const StepperItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StepperLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 8px;
`;

const StepperLabel = styled.div`
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: hsl(229, 24%, 87%);
`;

const StepperText = styled.p`
  font-size: 12px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;



const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const Form = () => {
const [currentStep, setCurrentStep] = useState(1);

const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      handleNextStep();
    } else {
        setFormErrors(errors as { name: string, email: string, phone: string });
    }
  };


  const validateForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    if(!formData.name){
        errors.name = 'Name is required'
    }
    if(!formData.email){
        errors.email = 'Email is required'
    }
    if(!formData.phone){
        errors.phone = 'Phone is required'
    }
    return errors
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  const handleNextStep = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setFormErrors({
        name: !formData.name ? 'Name is required' : '',
        email: !formData.email ? 'Email is required' : '',
        phone: !formData.phone ? 'Phone is required' : '',
      });
      return;
    }
    setCurrentStep(currentStep + 1);
    setFormErrors({ name: '', email: '', phone: '' });
  };
  
  return (
    <StyledContainer>
      <GridContainer>
        <StyledImageContainer>
          <StyledImage src={img} alt="sidebar" />
          <StepperContainer>
          <Stepper>
  <StepperItemContainer>
    <StepperItem className={currentStep >= 1 ? 'active' : ''}>1</StepperItem>
    <StepperLabelContainer>
      <StepperLabel>Step 1</StepperLabel>
      <StepperText>Your Info</StepperText>
    </StepperLabelContainer>
  </StepperItemContainer>
  <StepperItemContainer>
    <StepperItem className={currentStep >= 2 ? 'active' : ''}>2</StepperItem>
    <StepperLabelContainer>
      <StepperLabel>Step 2</StepperLabel>
      <StepperText>Select Plan</StepperText>
    </StepperLabelContainer>
  </StepperItemContainer>
  <StepperItemContainer>
    <StepperItem className={currentStep >=3 ? 'active' : ''}>3</StepperItem>
    <StepperLabelContainer>
      <StepperLabel>Step 3</StepperLabel>
      <StepperText>Add-ons</StepperText>
    </StepperLabelContainer>
  </StepperItemContainer>
  <StepperItemContainer>
    <StepperItem className={currentStep >=4 ? 'active' : ''}>4</StepperItem>
    <StepperLabelContainer>
      <StepperLabel>Step 4</StepperLabel>
      <StepperText>Summary</StepperText>
    </StepperLabelContainer>
  </StepperItemContainer>
</Stepper>
          </StepperContainer>
        </StyledImageContainer>
        {currentStep === 1 && (
        <FormContent>
          <StyledForm>
          <StyledH2>Personal info</StyledH2>
          <StyledText>Please provide your name, email address, and phone number</StyledText>
          <StyledLabel htmlFor="name">Name</StyledLabel>
<StyledInput
  type="text"
  name="name"
  id="name"
  placeholder="eg. Stephen King"
  value={formData.name}
  onChange={handleInputChange}
/>
{formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}

<StyledLabel htmlFor="email">Email Address</StyledLabel>
<StyledInput
  type="email"
  name="email"
  id="email"
  placeholder="e.g. stephenking@lorem.com"
  value={formData.email}
  onChange={handleInputChange}
/>
{formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}

<StyledLabel htmlFor="phone">Phone Number</StyledLabel>
<StyledInput
  type="tel"
  name="phone"
  id="phone"
  placeholder="e.g. +1 234 567 890"
  value={formData.phone}
  onChange={handleInputChange}
/>
{formErrors.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
          </StyledForm>
          <StyledButtonContainer>
            <StyledButton type='submit'onClick={handleNextStep}>Next Step</StyledButton>
            </StyledButtonContainer>
        </FormContent>
        )}
        {currentStep === 2 && (
             <FormContent>
              <StyledForm>
        <StyledH2>Select Your Plan</StyledH2>
        <StyledText>You have the option of monthly or yearly billing</StyledText>
        <StyledPlanContainer>
          <Card>
            <PlanName>Arcade</PlanName>
            <PlanPrice>$90/yr</PlanPrice>
            <PlanFrequency>2 months free</PlanFrequency>
          </Card>
          <Card>
            <PlanName>Advanced</PlanName>
            <PlanPrice>$120/yr</PlanPrice>
            <PlanFrequency>2 months free</PlanFrequency>
          </Card>
          <Card>
            <PlanName>Pro</PlanName>
            <PlanPrice>$150/yr</PlanPrice>
            <PlanFrequency>2 months free</PlanFrequency>
          </Card>
        </StyledPlanContainer>
      </StyledForm>
             <StyledButtonContainer>
               <StyledPrevButton onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</StyledPrevButton>
               <StyledButton type='submit' onClick={handleNextStep}>Next Step</StyledButton>
             </StyledButtonContainer>
           </FormContent>
        )}
      </GridContainer>
    </StyledContainer>
  );
};

export default Form;
