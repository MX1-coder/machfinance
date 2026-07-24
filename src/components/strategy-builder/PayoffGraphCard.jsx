import { useState } from "react";
import styled from "styled-components";
import PayoffChart from "./PayoffChart";

import imgMinus from "../../assets/icons/chart-sliders/plus-left.svg";
import imgPlus from "../../assets/icons/chart-sliders/plus-right.svg";
import imgChevronLeft from "../../assets/icons/chart-sliders/chevron-left.svg";
import imgChevronRight from "../../assets/icons/chart-sliders/chevron-right.svg";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  activeText: "#00374d",
  activeBorder: "#4a7e92",
  inactiveText: "#41484d",
  tabBorder: "#c0c7cd",
  neutralBorder: "#e2e6ea",
  textSecondary: "#5f6a76",
  labelText: "#191c1e",
  textPrimary: "#1a1d21",
  resetTeal: "#134f69",
};

const tabs = ["Payoff Graph", "P&L Table", "Greeks"];

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Panel = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.05), 0px 10px 7.5px rgba(0, 0, 0, 0.1);
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 59px;
  padding: 0 16px 0 17px;
  border-bottom: 1px solid ${tokens.tabBorder};
`;

const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 58px;
  padding-bottom: 14px;
  border: none;
  border-bottom: 2px solid ${(p) => (p.$active ? tokens.activeBorder : "transparent")};
  background: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  letter-spacing: 0.12px;
  color: ${(p) => (p.$active ? tokens.activeText : tokens.inactiveText)};
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;
  font-size: 14px;
  color: ${tokens.textSecondary};
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  padding: 24px 17px;
  border-top: 1px solid ${tokens.neutralBorder};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const ControlCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

const ControlHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const ControlLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: ${tokens.labelText};
  white-space: nowrap;
`;

const ResetButton = styled.button`
  align-self: flex-start;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: ${tokens.resetTeal};
`;

/* ---- NIFTY Target stepper ---- */
const StepperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${tokens.neutralBorder};
  border-radius: 4px;
  height: 25px;
  width: 125px;
  padding: 1px 4px;
`;

const StepperDivider = styled.span`
  border-left: 1px solid ${tokens.neutralBorder};
  height: 24px;
  width: 1px;
`;

const StepperValue = styled.span`
  flex: 1;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #353535;
`;

const StepperIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 17px;
    height: 17px;
  }
`;

/* ---- Date & Time nav ---- */
const DateNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

const DateLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: ${tokens.textPrimary};
  white-space: nowrap;
`;

const SliderInput = styled.input`
  display: block;
  width: 100%;
`;

const RangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: ${tokens.textSecondary};
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function PayoffGraphCard() {
  const [chartTab, setChartTab] = useState("Payoff Graph");
  const [niftyTarget, setNiftyTarget] = useState(2400.65);

  return (
    <Panel>
      <TabBar>
        {tabs.map((tab) => (
          <Tab key={tab} $active={chartTab === tab} onClick={() => setChartTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabBar>

      {chartTab === "Payoff Graph" ? <PayoffChart /> : <Placeholder>{chartTab} coming soon</Placeholder>}

      <Controls>
        <ControlCol>
          <ControlHeader>
            <ControlLabel>NIFTY Target</ControlLabel>
            <StepperBox>
              <StepperIconButton onClick={() => setNiftyTarget((v) => v - 1)}>
                <img src={imgMinus} alt="decrease" />
              </StepperIconButton>
              <StepperDivider />
              <StepperValue>{niftyTarget.toFixed(2)}</StepperValue>
              <StepperDivider />
              <StepperIconButton onClick={() => setNiftyTarget((v) => v + 1)}>
                <img src={imgPlus} alt="increase" />
              </StepperIconButton>
            </StepperBox>
          </ControlHeader>
          <ResetButton>Reset</ResetButton>
          <SliderInput type="range" min="0" max="100" defaultValue="44" className="slider-pill" />
        </ControlCol>

        <ControlCol>
          <ControlHeader>
            <ControlLabel>Date &amp; Time</ControlLabel>
            <DateNav>
              <NavButton>
                <img src={imgChevronLeft} alt="previous" />
              </NavButton>
              <DateLabel>Fri,&nbsp;&nbsp;22May&nbsp;&nbsp;3:30 PM</DateLabel>
              <NavButton>
                <img src={imgChevronRight} alt="next" />
              </NavButton>
            </DateNav>
          </ControlHeader>
          <ResetButton>Reset</ResetButton>
          <SliderInput type="range" min="0" max="100" defaultValue="0" className="slider-pill" />
          <RangeLabels>
            <span>22 May</span>
            <span>29 May</span>
          </RangeLabels>
        </ControlCol>
      </Controls>
    </Panel>
  );
}
