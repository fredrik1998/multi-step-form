import React from "react";
import { 
    FormContent,
    StyledForm, 
    StyledH2,
    StyledText,
    StyledPlanContainer,
    Card,
    PlanImage,
    PlanName,
    PlanPrice,
    PlanFrequency,
    PlanToggleContainer,
    PlanText,
    PlanToggle,
    StyledButtonContainer,
    StyledPrevButton,
    StyledButton,
 } from "./FormElements";

interface Props {
  handlePlanEvent: (plan: string) => void;
  selectedPlan: string;
  arcadeimg: string;
  isToggled: boolean;
  advancedimg: string;
  proimg: string;
  handleToggleEvent: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  handleNextStep: () => void;
}

export function Step2({
  handlePlanEvent,
  selectedPlan,
  arcadeimg,
  isToggled,
  advancedimg,
  proimg,
  handleToggleEvent,
  setCurrentStep,
  currentStep,
  handleNextStep
}: Props) {
  return <FormContent>
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
             <PlanText isToggled={isToggled}>Monthly</PlanText>
             <PlanToggle type='button' onClick={handleToggleEvent} isToggled={isToggled}>
                   {isToggled}
                 </PlanToggle>
                 <PlanText isToggled={!isToggled}>Yearly</PlanText>
                 </PlanToggleContainer>
             <StyledButtonContainer>
               <StyledPrevButton onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</StyledPrevButton>
               <StyledButton disabled={!selectedPlan} type='submit' onClick={handleNextStep}>Next Step</StyledButton>
             </StyledButtonContainer>
           </FormContent>;
}
