import React from "react";
import {
  StyledImageContainer,
  StyledImage,
  StepperContainer,
  Stepper,
  StepperItemContainer,
  StepperItem,
  StepperLabelContainer,
  StepperLabel,
  StepperText
} from "./FormElements";

type SidebarProps = {
  img: string;
  imgmobile: string;
  currentStep: number;
};

export function Sidebar({
  img,
  imgmobile,
  currentStep
}: SidebarProps) {
  return (
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
  );
}
