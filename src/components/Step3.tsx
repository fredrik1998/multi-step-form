import React from "react";
import { 
    FormContent,
    StyledForm, 
    StyledH2, 
    StyledText, 
    Box, 
    BoxInput,
    BoxName,
    BoxPrice,
    BoxText,
    StyledButtonContainer,
    StyledPrevButton,
    StyledButton,
    AddOnsContainer,
    CheckmarkImage
 } from "./FormElements";
 
 type Step3Props = {
  handleAddOnsEvent: (addOn: string) => void;
  handleBoxClick: (index: number) => void;
  isChecked: boolean[];
  checkmark: string;
  isToggled: boolean;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  handleNextStep: () => void;
  selectedAddOns: string[];
  formData: {
    name: string;
    email: string;
    phone: string;
  };
}

  export function Step3({
    handleAddOnsEvent,
    handleBoxClick,
    isChecked,
    checkmark,
    isToggled,
    setCurrentStep,
    currentStep,
    handleNextStep,
    selectedAddOns,
  }: Step3Props) {
    return <FormContent>
            <StyledForm>
            <StyledH2>Pick add-ons</StyledH2>
            <StyledText>Add-ons help enhance your gaming experince</StyledText>
            <AddOnsContainer>
            <Box 
            onClick={() => {
              handleAddOnsEvent('Online service');
              handleBoxClick(0);
            }}
            isSelected={selectedAddOns.includes('Online service')}
          >
            <BoxInput type='button'>
              {isChecked[0] ? <CheckmarkImage src={checkmark} alt="checked" /> : null}
            </BoxInput>
            <BoxName>Online service</BoxName>
            <BoxText>Access to multiplayer games</BoxText>
            <BoxPrice>{isToggled ? '+$1/mo' : '+$10/yr'}</BoxPrice>
          </Box>
          <Box 
            onClick={() => {
              handleAddOnsEvent('Larger storage');
              handleBoxClick(1);
            }}
            isSelected={selectedAddOns.includes('Larger storage')}
          >
            <BoxInput type='button'>
              {isChecked[1] ? <CheckmarkImage src={checkmark} alt="checked" /> : null}
            </BoxInput>
            <BoxName>Larger storage</BoxName>
            <BoxText>Extra 1TB of cloud save</BoxText>
            <BoxPrice>{isToggled ? '+$2/mo' : '+$20/yr'}</BoxPrice>
          </Box>
          <Box 
            onClick={() => {
              handleAddOnsEvent('Customizable profile');
              handleBoxClick(2);
            }}
            isSelected={selectedAddOns.includes('Customizable profile')}
          >
            <BoxInput type='button'>
              {isChecked[2] ? <CheckmarkImage  src={checkmark} alt="checked" /> : null}
            </BoxInput>
            <BoxName>Customizable profile</BoxName>
            <BoxText>Custom theme on your profile</BoxText>
            <BoxPrice>{isToggled ? '+$2/mo' : '+$20/yr'}</BoxPrice>
          </Box>
            </AddOnsContainer>
            </StyledForm>
            <StyledButtonContainer>
              <StyledPrevButton onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</StyledPrevButton>
              <StyledButton type='submit' onClick={handleNextStep}>Next Step</StyledButton>
            </StyledButtonContainer>
          </FormContent>;
}
  