import { useState } from "react";
import styled from "styled-components";

import imgQuestion from "../../assets/icons/stats-summary/question-mark.svg";
import imgQuestionSmall from "../../assets/icons/stats-summary/question-mark-sm.svg";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  primary400: "#4a7e92",
  primary50: "#e8eef1",
  primary600: "#134f69",
  textSecondary: "#5f6a76",
  rowText: "#414141",
  successBg: "#e4faec",
  successText: "#16a34a",
  dangerBg: "rgba(255,56,60,0.1)",
  dangerText: "#ff383c",
  neutralPillBg: "#f1f1f1",
};

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Panel = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 19px;
  padding: 17px;
  border-radius: 3px;
  width: 100%;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.05), 0px 10px 7.5px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.gap || "7px"};
  min-width: ${(p) => p.minWidth || "auto"};
  flex: ${(p) => p.flex || "0 0 auto"};
`;

const QuestionIcon = styled.img`
  width: ${(p) => p.size || 14}px;
  height: ${(p) => p.size || 14}px;
`;

/* ---- Max Profit / Max Loss ---- */
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MaxLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(p) => p.color};
  white-space: nowrap;
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const ValuePill = styled.span`
  background: ${(p) => p.bg};
  color: ${(p) => p.color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

/* ---- Breakeven ---- */
const BreakevenRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BreakevenLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${tokens.primary600};
  white-space: nowrap;
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${tokens.textSecondary};
  border-radius: 4px;
  padding: 1px;
`;

const ToggleOption = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px 16px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: ${(p) => (p.$active ? tokens.primary600 : "transparent")};
  color: ${(p) => (p.$active ? "white" : tokens.textSecondary)};
`;

const NeutralPill = styled.span`
  display: inline-flex;
  align-items: center;
  background: ${tokens.neutralPillBg};
  color: ${tokens.textSecondary};
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

/* ---- Reward/Risk, POP, Time Value, Intrinsic Value ---- */
const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

const StatLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${tokens.rowText};
  white-space: nowrap;
`;

const StatValue = styled.span`
  font-size: 12px;
  color: ${tokens.rowText};
  letter-spacing: 0.2px;
  white-space: nowrap;
`;

const RatioBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${tokens.primary50};
  color: ${tokens.textSecondary};
  width: 22px;
  height: 18px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
`;

/* ---- Funds & Margin ---- */
const FundsHeader = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${tokens.primary400};
`;

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */
const rewardStats = [
  { label: "Reward/Risk", value: "1.1", badge: "1/x" },
  { label: "POP", value: "48%" },
  { label: "Time Value", value: "1,232" },
  { label: "Intrinsic Value", value: "4,959" },
];

const fundsStats = [
  { label: "Standalone Funds", value: "10.2L" },
  { label: "Margin Used", value: "08.L" },
  { label: "Margin Available", value: "0.2L" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function StatsSummary() {
  const [breakeven, setBreakeven] = useState("Expiry");

  return (
    <Panel>
      <Column gap="25px" minWidth="283px">
        <HeaderRow>
          <MaxLabel color={tokens.primary400}>MAX PROFIT</MaxLabel>
          <MaxLabel color={tokens.primary600}>
            MAX Loss
            <QuestionIcon src={imgQuestion} alt="" />
          </MaxLabel>
        </HeaderRow>
        <ValueRow>
          <ValuePill bg={tokens.successBg} color={tokens.successText}>+6,809</ValuePill>
          <ValuePill bg={tokens.dangerBg} color={tokens.dangerText}>-6,191</ValuePill>
        </ValueRow>

        <div>
          <BreakevenRow>
            <BreakevenLabel>Breakeven</BreakevenLabel>
            <ToggleGroup>
              <ToggleOption $active={breakeven === "Target"} onClick={() => setBreakeven("Target")}>
                Target
              </ToggleOption>
              <ToggleOption $active={breakeven === "Expiry"} onClick={() => setBreakeven("Expiry")}>
                Expiry
              </ToggleOption>
            </ToggleGroup>
            <QuestionIcon src={imgQuestionSmall} size={12} alt="" />
          </BreakevenRow>
          <div style={{ marginTop: 9 }}>
            <NeutralPill>23795(+0.3%)</NeutralPill>
          </div>
        </div>
      </Column>

      <Column gap="16px" minWidth="330px" flex="1 1 300px">
        {rewardStats.map((stat) => (
          <StatRow key={stat.label}>
            <StatLabel>
              {stat.label} <QuestionIcon src={imgQuestion} alt="" />
              {stat.badge && <RatioBadge>{stat.badge}</RatioBadge>}
            </StatLabel>
            <StatValue>{stat.value}</StatValue>
          </StatRow>
        ))}
      </Column>

      <Column gap="16px" minWidth="220px">
        <FundsHeader>Funds &amp; Margin</FundsHeader>
        {fundsStats.map((stat) => (
          <StatRow key={stat.label}>
            <StatLabel>
              {stat.label} <QuestionIcon src={imgQuestion} alt="" />
            </StatLabel>
            <StatValue>{stat.value}</StatValue>
          </StatRow>
        ))}
      </Column>
    </Panel>
  );
}
