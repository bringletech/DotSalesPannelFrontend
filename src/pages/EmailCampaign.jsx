import React from "react";
import TitleBar from "../components/ui/TitleBar";
import FormContainer from "../components/ui/FormContainer";
import EmailCampaign from "../components/EmailCampaing/EmailCampaing";
function EmailCampaignPage() {
  return (
    <div>
      <TitleBar title={"Email Campaign"} />
      <FormContainer title="Search">
        <EmailCampaign />
      </FormContainer>
    </div>
  );
}

export default EmailCampaignPage;
