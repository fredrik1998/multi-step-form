import React from "react";
import { ThankYouContainer, StyledH2, StyledText, TextContainer } from "./FormElements";

interface Props {
  thankyouicon: string;
}

export function Step5({ thankyouicon }: Props) {
  return (
    <ThankYouContainer>
      <img src={thankyouicon} />
      <StyledH2>Thank you!</StyledH2>
      <StyledText>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
      </StyledText>
    </ThankYouContainer>
  );
}
