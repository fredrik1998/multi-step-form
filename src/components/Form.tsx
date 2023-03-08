import React, { useState, DetailedHTMLProps, ImgHTMLAttributes} from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
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
    ThankYouContainer,
    FormInputContainer,
    PlanImage,
    PlanToggle,
    PlanToggleContainer,
    PlanText,
    Box,
    BoxName,
    BoxText,
    BoxPrice,
    BoxInput,
} from './FormElements';
import img from '../assets/sidebardesktop.svg';
import thankyouicon from '../assets/icon-thank-you.svg';
import imgmobile from '../assets/bg-sidebar-mobile.svg';
import arcadeimg from '../assets/icon-arcade.svg';
import advancedimg from '../assets/icon-advanced.svg';
import proimg from '../assets/icon-pro.svg';
import checkmark from '../assets/icon-checkmark.svg';

interface StyledImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  mobileSrc: string;
}

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 2fr;
  grid-gap: 70px;
  align-items: center;
  @media screen and (max-width: 767px){
    grid-template-columns: auto 1fr;
    
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-start; /* align items to the top of the container */
  
  @media (max-width: 768px) { /* adjust the max-width value as needed */
    justify-content: center; /* center items horizontally on small screens */
  }
`;

const StyledImage = styled.img<StyledImageProps>`
  height: 100%;
  @media screen and (max-width: 767px) {
    content: url(${props => props.mobileSrc});
    width: auto;
    height: auto;

  }
`;

const StepperContainer = styled.div`
 position: absolute;
 top: 30px;
 left: 30px;
 transform: translate(30%, 15%);
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
  @media screen and (max-width: 767px){
    justify-content: center;
  }
`;

const StepperLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (max-width: 767px){
    display: none;
  }
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
  display: flex;
  color: red;
  font-size: 12px;
`;


const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
  
  const handlePlanEvent = (plan: string) => {
    setSelectedPlan(plan);
  }

  const handleToggleEvent = () => {
    setIsToggled(!isToggled)
  }

  const handleAddOnsEvent = (addOns: string) => {
    setSelectedAddOns(addOns)
  }

  const handleBoxClick = (event: React.MouseEvent<HTMLButtonElement>) => {
   setIsChecked(!isChecked);
  };


  return (
    <StyledContainer>
      <GridContainer>
        <StyledImageContainer>
          <StyledImage src={img} mobileSrc={imgmobile} alt="sidebar" />
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
          <StyledText style={{paddingRight: '50px'}}>Please provide your name, email address, and phone number</StyledText>
<FormInputContainer> 
<StyledLabel htmlFor="name">Name</StyledLabel>
{formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
</FormInputContainer>         
<StyledInput
  type="text"
  name="name"
  id="name"
  placeholder="eg. Stephen King"
  value={formData.name}
  onChange={handleInputChange}
/>
<FormInputContainer>
<StyledLabel htmlFor="email">Email Address</StyledLabel>
{formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
</FormInputContainer>
<StyledInput
  type="email"
  name="email"
  id="email"
  placeholder="e.g. stephenking@lorem.com"
  value={formData.email}
  onChange={handleInputChange}
/>
<FormInputContainer>
<StyledLabel htmlFor="phone">Phone Number</StyledLabel>
{formErrors.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
</FormInputContainer>
<StyledInput
  type="tel"
  name="phone"
  id="phone"
  placeholder="e.g. +1 234 567 890"
  value={formData.phone}
  onChange={handleInputChange}
/>
          </StyledForm>
          <StyledButtonContainer>
            <StyledButton  type='submit'onClick={handleNextStep}>Next Step</StyledButton>
            </StyledButtonContainer>
        </FormContent>
        )}
        {currentStep === 2 && (
             <FormContent>
             <StyledForm>
               <StyledH2>Select Your Plan</StyledH2>
               <StyledText>You have the option of monthly or yearly billing</StyledText>
               <StyledPlanContainer>
               
                     <Card onClick={() => handlePlanEvent("Arcade")} isSelected={selectedPlan === "Arcade"}>
                     <PlanImage src={arcadeimg} />
                     <PlanName>Arcade</PlanName>
                     <PlanPrice>{isToggled ? '$9.99/mo' : '$90/yr'}</PlanPrice>
                     <PlanFrequency>{isToggled ? '' : '2 months free'}</PlanFrequency>
                   </Card>
              
                 
                   <Card onClick={() => handlePlanEvent("Advanced")} isSelected={selectedPlan === "Advanced"}>
                     <PlanImage src={advancedimg} />
                     <PlanName>Advanced</PlanName>
                     <PlanPrice>{isToggled ? '$12.99/mo' : '$120/yr'}</PlanPrice>
                     <PlanFrequency>{isToggled ? '' : '2 months free'}</PlanFrequency>
                   </Card>
               
                
                   <Card onClick={() => handlePlanEvent("Pro")} isSelected={selectedPlan === "Pro"}>
                     <PlanImage src={proimg} />
                     <PlanName>Pro</PlanName>
                     <PlanPrice>{isToggled ? '$14.99/mo' : '$150/yr'}</PlanPrice>
                     <PlanFrequency>{isToggled ? '' : '2 months free'}</PlanFrequency>
                   </Card>
              
               </StyledPlanContainer>
             </StyledForm>
             <PlanToggleContainer>
             <PlanText isToggled={!isToggled}>Yearly</PlanText>
             <PlanToggle type='button' onClick={handleToggleEvent} isToggled={isToggled}>
                   {isToggled }
                 </PlanToggle>
                 <PlanText isToggled={isToggled}>Monthly</PlanText>
                 </PlanToggleContainer>
             <StyledButtonContainer>
               <StyledPrevButton onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</StyledPrevButton>
               <StyledButton disabled={!selectedPlan} type='submit' onClick={handleNextStep}>Next Step</StyledButton>
             </StyledButtonContainer>
           </FormContent>
         )
       }
        {currentStep === 3 && (
          <FormContent>
            <StyledForm>
            <StyledH2>Pick add-ons</StyledH2>
            <StyledText>Add-ons help enhance your gaming experince</StyledText>
            <Box onClick={() => handleAddOnsEvent('Online service')} isSelected={selectedAddOns === 'Online service'}>
            <BoxInput onClick={handleBoxClick} type='button'>
            {isChecked ? <img src={checkmark} alt="checked" /> : null}
        
      </BoxInput>
            <BoxName>Online service</BoxName>
            <BoxText>Access to multiplayer games</BoxText>
            <BoxPrice>{isToggled ? '+$1/mo' : '+$10/yr'}</BoxPrice>
            </Box>
           
            <Box onClick={() => handleAddOnsEvent('Larger storage')} isSelected={selectedAddOns === 'Larger storage'}>
            <BoxInput onClick={handleBoxClick} type='button'>
            {isChecked ? <img src={checkmark} alt="checked" /> : null}
         
      </BoxInput>
            <BoxName>Larger storage</BoxName>
            <BoxText>Extra 1TB of cloud save</BoxText>
            <BoxPrice>{isToggled ? '+$2/mo' : '+$20/yr'}</BoxPrice>
            </Box>
            <Box onClick={() => handleAddOnsEvent('Customizable profile')} isSelected={selectedAddOns === 'Customizable profile'}>
            <BoxInput onClick={handleBoxClick} type='button'>
            {isChecked ? <img src={checkmark} alt="checked" /> : null}
      </BoxInput>
            <BoxName>Customizable profile</BoxName>
            <BoxText>Custom theme on your profile</BoxText>
            <BoxPrice>{isToggled ? '+$2/mo' : '+$20/yr'}</BoxPrice>
            </Box>
            
            </StyledForm>
            <StyledButtonContainer>
              <StyledPrevButton onClick={() => setCurrentStep(currentStep -1)}>Previous Step</StyledPrevButton>
              <StyledButton type='submit' onClick={handleNextStep}>Next Step</StyledButton>
            </StyledButtonContainer>
          </FormContent>
        )}
        {currentStep === 4 &&(
          <FormContent>
            <StyledForm>
              <StyledH2>Finishing up</StyledH2>
              <StyledText>Double-check everything looks OK before confirming</StyledText>
            </StyledForm>
            <StyledButtonContainer>
              <StyledPrevButton onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</StyledPrevButton>
              <StyledButton type='submit' onClick={(handleNextStep)}>Next Step</StyledButton>
            </StyledButtonContainer>
          </FormContent>
        )}
        {currentStep === 5 &&(
          <ThankYouContainer>
            <img src={thankyouicon}></img>
            <StyledH2>Thank you!</StyledH2>
            <StyledText>
            Thanks for confirming your subscription! 
            We hope you have fun using our platform.
            If you ever need support, please feel free to
            email us at support @loremgaming.com
            </StyledText>
          </ThankYouContainer>
        )}
      </GridContainer>
    </StyledContainer>
  );
};

export default Form;
