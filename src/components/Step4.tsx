import React from "react";
import { 
    StyledForm,
    FormContent,
    StyledH2,
    StyledText,
    Step4Text,
    PriceDiv,
    Step4Price,
    ChangeButton,
    Seperator,
    Step4AddOnsContainer,
    Step4AddOns,
    TotalDiv,
    TotalPrice,
    StyledButtonContainer,
    StyledPrevButton,
    StyledButton,
    Step4Container

 } from "./FormElements";

 type Step4Props = {
    selectedPlan: string;
    isToggled: boolean;
    planPrice: number;
    handleToggleEvent: () => void;
    totalPrice: number;
    setCurrentStep: (step: number) => void;
    currentStep: number;
    handleNextStep: () => void;
    selectedAddOns: string[];
    addOnPrices: {
      [key: string]: {
        monthly: number;
        yearly: number;
      };
    };
  };

  
 
export function Step4({
  selectedPlan,
  isToggled,
  planPrice,
  handleToggleEvent,
  totalPrice,
  setCurrentStep,
  currentStep,
  handleNextStep,
  selectedAddOns,
  addOnPrices,
}: Step4Props) {
  return <FormContent>
            <StyledForm>
              <StyledH2>Finishing up</StyledH2>
              <StyledText>Double-check everything looks OK before confirming</StyledText>
              <Step4Container>
              <PriceDiv>
              <Step4Text>{selectedPlan}({isToggled ? 'Monthly' : 'Yearly'})</Step4Text>
              <Step4Price style={{color: 'hsl(213, 96%, 18%)'}}> ${planPrice}/{isToggled ? 'mo' : 'yr'}</Step4Price>
                <ChangeButton type='button' onClick={handleToggleEvent}>
                   Change
                 </ChangeButton>
                 <Seperator></Seperator>
              <Step4AddOnsContainer>
              {selectedAddOns.map(addOn => <Step4AddOns key={addOn}>
    {addOn}
   <Step4Price> ${isToggled ? addOnPrices[addOn].monthly : addOnPrices[addOn].yearly}/
    {isToggled ? 'mo' : 'yr'} </Step4Price> 
  </Step4AddOns>)}

      </Step4AddOnsContainer>
              </PriceDiv>
              <TotalDiv>
              <Step4AddOns>Total ({isToggled ? 'per month' : 'per year'})</Step4AddOns>
              <TotalPrice>${totalPrice}/{isToggled ? 'mo' : 'yr'}</TotalPrice>
              </TotalDiv>
              </Step4Container>
            </StyledForm>
            <StyledButtonContainer>
              <StyledPrevButton onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</StyledPrevButton>
              <StyledButton type='submit' onClick={handleNextStep}>Next Step</StyledButton>
            </StyledButtonContainer>
          </FormContent>;
}
  