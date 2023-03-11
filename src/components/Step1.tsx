import React, { ChangeEvent } from "react";
import { 
  FormContent,
  StyledForm,
  StyledH2,
  StyledText,
  FormInputContainer,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledButton
} from "./FormElements";

import { ErrorMessage } from "./Form";

interface Props {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  formErrors: {
    name?: string;
    email?: string;
    phone?: string;
  };
  formData: {
    name: string;
    email: string;
    phone: string;
  };
}

export function Step1({
  handleInputChange,
  handleNextStep,
  formErrors,
  formData
}: Props) {
  return (
    <FormContent>
      <StyledForm>
        <StyledH2>Personal info</StyledH2>
        <StyledText style={{ paddingRight: '50px' }}>
          Please provide your name, email address, and phone number
        </StyledText>
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
          className={formErrors.name ? 'red-outline ' : ''}
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
          className={formErrors.email ? 'red-outline ' : ''}
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
          className={formErrors.phone ? 'red-outline' : ''}
        />
      </StyledForm>
      <StyledButtonContainer>
        <StyledButton type='submit' onClick={handleNextStep}>Next Step</StyledButton>
      </StyledButtonContainer>
    </FormContent>
  );
}
