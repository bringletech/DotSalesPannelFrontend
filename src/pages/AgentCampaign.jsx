import React from "react";
import TitleBar from "../components/ui/TitleBar";
import FormContainer from "../components/ui/FormContainer";
import AgainstCampaign from "../components/againtCampaing/AgaintCompaing";

function AgentCampaign() {
  return (
    <>
      <TitleBar title={"Agent Campaign"} />
      <div className="mt-5">
        <FormContainer title={"Search"}>
          <AgainstCampaign />
        </FormContainer>
      </div>
      <div className="mt-5">
        <FormContainer title={"Search Results"}>
          {/* Results content goes here */}
        </FormContainer>
      </div>
    </>
  );
}

export default AgentCampaign;
