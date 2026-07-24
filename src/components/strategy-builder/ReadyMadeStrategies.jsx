import { useState } from "react";
import styled from "styled-components";
import StrategyIcon from "./StrategyIcon";
import { strategiesByFilter } from "./data";

import imgLearnIcon from "../../assets/icons/ready-made-shared/learn-icon.svg";
import imgArrow from "../../assets/icons/ready-made-shared/arrow.svg";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  primary900: "#082636",
  primary800: "#0d394d",
  primary600: "#134f69",
  primary400: "#4a7e92",
  primary50: "#e8eef1",
  textMuted: "#9aa4ae",
  textSecondary: "#5f6a76",
  neutralBorder: "#e2e6ea",
};

const navItems = ["Ready-made", "Positions", "Saved Strategies", "Draft Portfolios"];
const filterOptions = ["Bullish", "Bearish", "Neutral", "Other"];

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Panel = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: center;
  padding: 19px 17px 17px;
  border-radius: 6px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.05), 0px 10px 7.5px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
  width: 100%;
`;

const NavBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  height: 34px;
  width: 100%;
  border-bottom: 1px solid ${tokens.neutralBorder};
`;

const NavLink = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.6px;
  color: ${(p) => (p.$active ? tokens.primary900 : tokens.primary400)};
  white-space: nowrap;
`;

const SubHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

const HelperText = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textMuted};
`;

const LearnLink = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: 12px;
  letter-spacing: 0.2px;
  color: ${tokens.primary600};

  img {
    width: 9px;
    height: 8px;
  }
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

const FilterPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

const FilterPill = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 7px 13px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  background: ${(p) => (p.$active ? tokens.primary400 : tokens.primary50)};
  color: ${(p) => (p.$active ? "white" : tokens.primary800)};
`;

const ExpiryGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const ExpiryLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textSecondary};
`;

const ExpiryDropdown = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  height: 23px;
  width: 70px;
  padding: 5px 3px;
  border: 1px solid ${tokens.neutralBorder};
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textSecondary};

  img {
    width: 12.74px;
    height: 11.738px;
    transform: rotate(90deg);
  }
`;

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  width: 100%;

  @media (min-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StrategyCard = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  height: 97px;
  padding: 0 12px 12px;
  border: none;
  border-radius: 3px;
  background: white;
  box-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08);
  }
`;

const StrategyLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textSecondary};
  white-space: nowrap;
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 100%;
  font-size: 14px;
  color: ${tokens.textSecondary};
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function ReadyMadeStrategies() {
  const [readyMadeTab, setReadyMadeTab] = useState("Ready-made");
  const [filter, setFilter] = useState("Bullish");

  return (
    <Panel>
      <NavBar>
        {navItems.map((tab) => (
          <NavLink key={tab} $active={readyMadeTab === tab} onClick={() => setReadyMadeTab(tab)}>
            {tab}
          </NavLink>
        ))}
      </NavBar>

      {readyMadeTab === "Ready-made" ? (
        <>
          <SubHeader>
            <HelperText>Please click on a ready-made strategy to load it</HelperText>
            <LearnLink>
              <img src={imgLearnIcon} alt="" />
              Learn options strategies
            </LearnLink>
          </SubHeader>

          <FilterRow>
            <FilterPills>
              {filterOptions.map((f) => (
                <FilterPill key={f} $active={filter === f} onClick={() => setFilter(f)}>
                  {f}
                </FilterPill>
              ))}
            </FilterPills>
            <ExpiryGroup>
              <ExpiryLabel>Expiry</ExpiryLabel>
              <ExpiryDropdown>
                26 Mar
                <img src={imgArrow} alt="" />
              </ExpiryDropdown>
            </ExpiryGroup>
          </FilterRow>

          <StrategyGrid>
            {strategiesByFilter[filter].map((s, i) => (
              <StrategyCard key={`${s.name}-${i}`}>
                <StrategyIcon shape={s.shape} src={s.icon} />
                <StrategyLabel>{s.name}</StrategyLabel>
              </StrategyCard>
            ))}
          </StrategyGrid>
        </>
      ) : (
        <Placeholder>{readyMadeTab} coming soon</Placeholder>
      )}
    </Panel>
  );
}
