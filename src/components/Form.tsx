import { Step4 } from './Step4';
import { Step3 } from './Step3';
import { Step2 } from './Step2';
import { Sidebar } from './Sidebar';
import { Step1 } from './Step1';
import { Step5 } from './Step5';
import React, { useState} from 'react';
import styled from 'styled-components';
import { 
  StyledContainer,  
} from './FormElements';
import img from '../assets/sidebardesktop.svg';
import thankyouicon from '../assets/icon-thank-you.svg';
import imgmobile from '../assets/bg-sidebar-mobile.svg';
import arcadeimg from '../assets/icon-arcade.svg';
import advancedimg from '../assets/icon-advanced.svg';
import proimg from '../assets/icon-pro.svg';
import checkmark from '../assets/icon-checkmark.svg';

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 2fr;
  grid-gap: 70px;
  align-items: center;
  @media screen and (max-width: 767px){
    display: flex;
    flex-direction: column;
    grid-gap: 0px;
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  margin-right: 70px;
  margin-bottom: -20px;
  color: red;
  font-size: 12px;
`;

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isChecked, setIsChecked] = useState([false, false, false]);

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
    let errors: Record<string, string> = {...formErrors};

    if(errors[name]){
      delete errors[name];
      event.target.classList.remove('red-outline')
    }
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

  const handleAddOnsEvent = (addOn: string) => {
    if (selectedAddOns.includes(addOn)) {
      setSelectedAddOns(selectedAddOns.filter((item: string) => item !== addOn));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const handleBoxClick = (index: number) => {
    setIsChecked(prevState => {
      const newState = [...prevState];
      newState[index] = !prevState[index]; 
      return newState;
    });
  };
  
  const planPrices: {[key: string] : {monthly: number; yearly: number}} = {
    'Arcade': {
      monthly: 9,
      yearly: 90,
    },
    'Advanced': {
      monthly: 12,
      yearly: 120,
    }, 
    'Pro': {
      monthly: 9,
      yearly: 150,
    }, 
  }

  const addOnPrices: { [key: string]: { monthly: number; yearly: number } } = {
    'Online service': {
      monthly: 1,
      yearly: 10,
    },
    'Larger storage': {
      monthly: 2,
      yearly: 20,
    },
    'Customizable profile': {
      monthly: 2,
      yearly: 20,
    },
  };

  const planPrice = selectedPlan && isToggled ? planPrices[selectedPlan].monthly : selectedPlan && planPrices[selectedPlan].yearly || 0;
  const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + (isToggled ? addOnPrices[addOn].monthly : addOnPrices[addOn].yearly), 0);
  const totalPrice = planPrice + addOnsTotal;

  return (
    <StyledContainer>
      <GridContainer>
       <Sidebar
       img={img}
      imgmobile={imgmobile} 
      currentStep={currentStep}
      />
        {currentStep === 1 && (
        <Step1 
        formErrors={formErrors} 
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleNextStep={handleNextStep}  />
        )}
        {currentStep === 2 && (
            <Step2 
            handlePlanEvent={handlePlanEvent}
            selectedPlan={selectedPlan} 
            arcadeimg={arcadeimg} 
            isToggled={isToggled} 
            advancedimg={advancedimg} 
            proimg={proimg} 
            handleToggleEvent={handleToggleEvent} 
            setCurrentStep={setCurrentStep} 
            currentStep={currentStep} 
            handleNextStep={handleNextStep}  />
         )
       }
        {currentStep === 3 && (
          <Step3 
          formData={formData} 
          selectedAddOns={selectedAddOns}  
          handleAddOnsEvent={handleAddOnsEvent} 
          handleBoxClick={handleBoxClick} 
          isChecked={isChecked} checkmark={checkmark} 
          isToggled={isToggled} 
          setCurrentStep={setCurrentStep} 
          currentStep={currentStep} 
          handleNextStep={handleNextStep} 
           />
        )}
        {currentStep === 4 &&(
          <Step4 
          selectedAddOns={selectedAddOns} 
          addOnPrices={addOnPrices}   
          selectedPlan={selectedPlan} 
          isToggled={isToggled} 
          planPrice={planPrice} 
          handleToggleEvent={handleToggleEvent} 
          totalPrice={totalPrice} 
          setCurrentStep={setCurrentStep} 
          currentStep={currentStep} 
          handleNextStep={handleNextStep}  />
        )}
        {currentStep === 5 &&(
      <Step5 thankyouicon={thankyouicon}  />
        )}
      </GridContainer>
    </StyledContainer>
  );
};
export default Form;
