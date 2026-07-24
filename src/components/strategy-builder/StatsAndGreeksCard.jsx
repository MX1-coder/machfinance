import { useState } from "react";
import styled from "styled-components";
import { ivRows, greeks, futurePrices, standardDeviations, history } from "./data";

import imgMinus from "../../assets/icons/stats-greeks/plus-left.svg";
import imgPlus from "../../assets/icons/stats-greeks/plus-right.svg";
import imgQuestionSm from "../../assets/icons/stats-greeks/question-sm.svg";
import imgQuestionLg from "../../assets/icons/stats-greeks/question-lg.svg";
import imgToggleKnob from "../../assets/icons/stats-greeks/toggle-knob.svg";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  primary600: "#134f69",
  primary100: "#c2d3db",
  neutralSurface: "#f7f9fb",
  neutralBorder: "#e2e6ea",
  neutralBorderStrong: "#c7cdd3",
  textPrimary: "#1a1d21",
  textSecondary: "#5f6a76",
  rowText: "#414141",
  dangerRed: "#a32d2d",
  tabActiveText: "#00374d",
  tabInactiveText: "#41484d",
  toggleOffBg: "#e2e6ea",
};

const tabs = ["Stats and Greeks", "History"];

const amountColor = (value) => (value.startsWith("-") ? "#dc2626" : "#639922");

/* ------------------------------------------------------------------ */
/*  Shell / tabs                                                       */
/* ------------------------------------------------------------------ */
const Panel = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.05), 0px 10px 7.5px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 59px;
  padding: 0 16px 0 17px;
  border-bottom: 1px solid ${tokens.neutralBorderStrong};
`;

const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 58px;
  padding: 12px 0 14px;
  border: none;
  border-bottom: 2px solid ${(p) => (p.$active ? "#4a7e92" : "transparent")};
  background: none;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.2px;
  color: ${(p) => (p.$active ? tokens.tabActiveText : tokens.tabInactiveText)};
`;

/* ------------------------------------------------------------------ */
/*  Stats and Greeks tab content                                       */
/* ------------------------------------------------------------------ */
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 24px;
  padding: 24px 23px 24px 17px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoIcon = styled.img`
  width: ${(p) => p.size || 14}px;
  height: ${(p) => p.size || 14}px;
  flex-shrink: 0;
`;

/* ---- Strikewise IVs column ---- */
const IvHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${tokens.primary100};
`;

const IvHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IvTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.15px;
  color: ${tokens.primary600};
`;

const ResetLink = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textPrimary};
`;

const OffsetRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const OffsetLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: ${tokens.textSecondary};
`;

const StepperBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${tokens.neutralBorder};
  border-radius: 4px;
  height: 25px;
  width: ${(p) => p.width || 105}px;
  padding: 1px 4px;
`;

const StepperDivider = styled.span`
  border-left: 1px solid ${tokens.neutralBorder};
  height: 24px;
  width: 1px;
  flex-shrink: 0;
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
  flex-shrink: 0;

  img {
    width: 17px;
    height: 17px;
  }
`;

function Stepper({ value, onChange, width }) {
  return (
    <StepperBox width={width}>
      <StepperIconButton onClick={() => onChange(-1)}>
        <img src={imgMinus} alt="decrease" />
      </StepperIconButton>
      <StepperDivider />
      <StepperValue>{value}</StepperValue>
      <StepperDivider />
      <StepperIconButton onClick={() => onChange(1)}>
        <img src={imgPlus} alt="increase" />
      </StepperIconButton>
    </StepperBox>
  );
}

const IvColumnHeaders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 21px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textSecondary};
`;

const IvHeadGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 12px;
`;

const IvRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
`;

const IvRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 3px 0;
`;

const IvRowGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 12px;
`;

const IvStrike = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
  white-space: nowrap;
`;

const IvExpiry = styled.span`
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
  white-space: nowrap;
`;

const IvChg = styled.span`
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.dangerRed};
  white-space: nowrap;
`;

/* ---- Toggles + Greeks column ---- */
const ToggleBox = styled.div`
  background: ${tokens.neutralSurface};
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 12px 7px 12px 5px;
`;

const ToggleRow = styled.label`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  user-select: none;
`;

const ToggleTrack = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 49px;
  height: 21px;
  border-radius: 9999px;
  background: ${(p) => (p.$checked ? tokens.primary600 : tokens.toggleOffBg)};
  flex-shrink: 0;
`;

const ToggleKnob = styled.img`
  position: absolute;
  top: 1px;
  left: ${(p) => (p.$checked ? "29px" : "1px")};
  width: 19px;
  height: 19px;
`;

const ToggleLabel = styled.span`
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.textPrimary};
  white-space: nowrap;
`;

function Toggle({ checked, onChange, label }) {
  return (
    <ToggleRow onClick={() => onChange(!checked)}>
      <ToggleTrack $checked={checked}>
        <ToggleKnob src={imgToggleKnob} alt="" $checked={checked} />
      </ToggleTrack>
      <ToggleLabel>{label}</ToggleLabel>
    </ToggleRow>
  );
}

const GreeksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19px;
`;

const GreekRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid ${tokens.primary100};

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const GreekLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
`;

const GreekValue = styled.span`
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
`;

/* ---- Future prices + Standard deviation column ---- */
const SectionHeader = styled.h3`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: ${tokens.textPrimary};
`;

const FutureList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19px;
`;

const FutureRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid ${tokens.primary100};

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const FutureLabel = styled.span`
  font-size: 11px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
  white-space: nowrap;
`;

const FutureValue = styled.span`
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
  white-space: nowrap;
`;

const SdTable = styled.div`
  margin-top: 25px;
`;

const SdHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
`;

const SdRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.rowText};
`;

const SdPrice = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 16px;
`;

/* ------------------------------------------------------------------ */
/*  History tab content                                                */
/* ------------------------------------------------------------------ */
const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 17px;
`;

const HistoryRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 15px 0;
  border-bottom: 1px solid ${tokens.neutralBorder};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const HistoryPositionTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
`;

const HistorySideGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HistorySideBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 500;
  background: ${(p) => (p.$side === "B" ? "#e8eef1" : "rgba(255,56,60,0.14)")};
  color: ${(p) => (p.$side === "B" ? tokens.primary600 : tokens.dangerRed)};
`;

const HistoryNrmlBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #f2edfd;
  color: #8c4aff;
  font-size: 12px;
  padding: 5px 3px;
  min-width: 70px;
`;

const HistorySymbol = styled.span`
  color: ${tokens.rowText};
`;

const HistoryNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${tokens.rowText};
  letter-spacing: 0.2px;
`;

const HistoryFooter = styled.div`
  margin-top: 12px;
  background: ${tokens.neutralSurface};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 14px;
  height: 43px;
  font-size: 14px;
  color: ${tokens.textSecondary};
`;

const HistoryAmount = styled.span`
  font-weight: 500;
  color: ${(p) => p.$color};
`;

const HistoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 700px) {
    border-left: 1px solid ${tokens.neutralBorder};
    padding-left: 24px;
  }
`;

const HistoryDetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 14px;
  color: ${tokens.rowText};
  letter-spacing: 0.2px;
`;

const HistoryCapRow = styled(HistoryDetailsRow)`
  background: ${tokens.neutralSurface};
  gap: 52px;
  padding: 4px 14px;
  height: 42px;
  font-weight: 500;
`;

const ShowPositionsLink = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-weight: 600;
  color: #4a7e92;
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function StatsAndGreeksCard() {
  const [statsTab, setStatsTab] = useState("Stats and Greeks");
  const [multiplyByLotSize, setMultiplyByLotSize] = useState(false);
  const [multiplyByLots, setMultiplyByLots] = useState(true);
  const [ivOffset, setIvOffset] = useState(0);

  return (
    <Panel>
      <TabBar>
        {tabs.map((tab) => (
          <Tab key={tab} $active={statsTab === tab} onClick={() => setStatsTab(tab)}>
            {tab}
          </Tab>
        ))}
      </TabBar>

      {statsTab === "Stats and Greeks" ? (
        <StatsGrid>
          {/* Strikewise IVs */}
          <div>
            <IvHeader>
              <IvHeaderRow>
                <IvTitle>Stikewise IVs</IvTitle>
                <ResetLink>Reset IVs</ResetLink>
              </IvHeaderRow>
              <OffsetRow>
                <OffsetLabel>Offset</OffsetLabel>
                <Stepper value={ivOffset} onChange={(d) => setIvOffset((v) => v + d)} />
              </OffsetRow>
            </IvHeader>

            <IvColumnHeaders>
              <IvHeadGroup>
                <span>Strike</span>
                <span>Expiry</span>
              </IvHeadGroup>
              <span>IV</span>
              <span>Chg</span>
            </IvColumnHeaders>

            <IvRows>
              {ivRows.map((row, i) => (
                <IvRow key={i}>
                  <IvRowGroup>
                    <IvStrike>
                      {row.strike} <InfoIcon src={imgQuestionSm} alt="" />
                    </IvStrike>
                    <IvExpiry>{row.expiry}</IvExpiry>
                  </IvRowGroup>
                  <Stepper value={row.iv} onChange={() => {}} width={105} />
                  <IvChg>{row.chg}</IvChg>
                </IvRow>
              ))}
            </IvRows>
          </div>

          {/* Toggles + Greeks */}
          <div>
            <ToggleBox>
              <Toggle checked={multiplyByLotSize} onChange={setMultiplyByLotSize} label="Multiply by Lot Size" />
              <Toggle checked={multiplyByLots} onChange={setMultiplyByLots} label="Multiply by Number of Lots" />
            </ToggleBox>

            <GreeksList>
              {greeks.map((g) => (
                <GreekRow key={g.label}>
                  <GreekLabel>
                    {g.label} <InfoIcon src={imgQuestionSm} alt="" />
                  </GreekLabel>
                  <GreekValue>{g.value}</GreekValue>
                </GreekRow>
              ))}
            </GreeksList>
          </div>

          {/* Future prices + Standard Deviation */}
          <div>
            <SectionHeader>
              Target Day Future Prices <InfoIcon src={imgQuestionLg} size={20} alt="" />
            </SectionHeader>
            <FutureList>
              {futurePrices.map((f) => (
                <FutureRow key={f.label}>
                  <FutureLabel>{f.label}</FutureLabel>
                  <FutureValue>{f.value}</FutureValue>
                </FutureRow>
              ))}
            </FutureList>

            <SectionHeader style={{ marginTop: 25 }}>
              Standard Deviation <InfoIcon src={imgQuestionLg} size={20} alt="" />
            </SectionHeader>
            <SdTable>
              <SdHeaderRow>
                <span>SD</span>
                <span>Points</span>
                <span>Price</span>
              </SdHeaderRow>
              {standardDeviations.map((row) => (
                <SdRow key={row.sd}>
                  <span>{row.sd}</span>
                  <span>{row.points}</span>
                  <SdPrice>
                    <span>{row.low}</span>
                    <span>{row.high}</span>
                  </SdPrice>
                </SdRow>
              ))}
            </SdTable>
          </div>
        </StatsGrid>
      ) : (
        <HistoryList>
          {history.map((h, i) => (
            <HistoryRow key={i}>
              <div>
                <HistoryPositionTop>
                  <HistorySideGroup>
                    <HistorySideBadge $side={h.side}>{h.side}</HistorySideBadge>
                    <HistoryNrmlBadge>NRML</HistoryNrmlBadge>
                    <HistorySymbol>{h.symbol}</HistorySymbol>
                  </HistorySideGroup>
                  <HistoryNumbers>
                    <span>{h.qty}</span>
                    <span>{h.price}</span>
                    <span>{h.ltp}</span>
                  </HistoryNumbers>
                </HistoryPositionTop>
                <HistoryFooter>
                  <span>Booked 0</span>
                  <span>
                    Unbooked <HistoryAmount $color={amountColor(h.unbooked)}>{h.unbooked}</HistoryAmount>
                  </span>
                  <span>
                    P&amp;L <HistoryAmount $color={amountColor(h.pnl)}>{h.pnl}</HistoryAmount>
                  </span>
                </HistoryFooter>
              </div>

              <HistoryDetails>
                <HistoryDetailsRow>
                  <span>
                    Time&nbsp;&nbsp;{h.time}
                  </span>
                  <ShowPositionsLink>Show Positions</ShowPositionsLink>
                </HistoryDetailsRow>
                <HistoryCapRow>
                  <span>
                    Starting Cap <HistoryAmount $color="#639922">{h.startCap}</HistoryAmount>
                  </span>
                  <span>
                    Present Cap <HistoryAmount $color="#639922">{h.presentCap}</HistoryAmount>
                  </span>
                </HistoryCapRow>
              </HistoryDetails>
            </HistoryRow>
          ))}
        </HistoryList>
      )}
    </Panel>
  );
}
