import styled from "styled-components";
import { positions, dateFilters } from "./data";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  textPrimary: "#1a1d21",
  textSecondary: "#5f6a76",
  textMuted: "#9aa4ae",
  primary400: "#4a7e92",
  primary100: "#c2d3db",
  primary50: "#e8eef1",
  primary600: "#134f69",
  neutralSurface: "#f7f9fb",
  neutralBorder: "#e2e6ea",
  dangerRed: "#a32d2d",
  dangerBorder: "rgba(163,45,45,0.65)",
  dangerBg: "rgba(255,56,60,0.14)",
  nrmlBg: "#f2edfd",
  nrmlText: "#8c4aff",
  rowText: "#414141",
  amountGreen: "#639922",
};

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Panel = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 19px 17px 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.05), 0px 10px 7.5px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
`;

const Title = styled.span`
  color: ${tokens.textPrimary};
`;

const ClearLink = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font: inherit;
  color: ${tokens.primary400};
`;

const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
`;

const ExitButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid ${tokens.dangerBorder};
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  padding: 9px 17px;
  height: 32px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  letter-spacing: 0.028px;
  color: ${tokens.dangerRed};
  cursor: pointer;
  white-space: nowrap;
`;

const AddTradeButton = styled(ExitButton)`
  border-color: ${tokens.primary400};
  color: ${tokens.primary600};
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 28px;
  padding-bottom: 21px;
  border-bottom: 1px solid ${tokens.neutralBorder};
`;

const DatePillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const DatePill = styled.button`
  box-sizing: border-box;
  background: ${tokens.neutralSurface};
  border: 1px solid ${tokens.primary100};
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  height: 32px;
  padding: 9px 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.024px;
  color: ${tokens.textPrimary};
  cursor: pointer;
  white-space: nowrap;
`;

const PositionRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 9px 0 21px;
  border-bottom: 1px solid ${tokens.neutralBorder};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const PositionTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const SymbolGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BadgeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Checkbox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border: 0.5px solid ${tokens.textMuted};
  border-radius: 2px;
  background: white;
  padding: 0;
  cursor: pointer;
`;

const SideBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 2px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: ${(p) => (p.$side === "B" ? tokens.primary50 : tokens.dangerBg)};
  color: ${(p) => (p.$side === "B" ? tokens.primary600 : tokens.dangerRed)};
`;

const NrmlBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 26px;
  border-radius: 4px;
  background: ${tokens.nrmlBg};
  color: ${tokens.nrmlText};
  font-size: 10px;
  letter-spacing: 0.02px;
`;

const SymbolText = styled.span`
  color: ${tokens.rowText};
  font-size: 14px;
  letter-spacing: 0.028px;
  white-space: nowrap;
`;

const NumbersGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;

const NumberText = styled.span`
  color: ${tokens.rowText};
  font-size: 14px;
  letter-spacing: 0.028px;
  white-space: nowrap;
`;

const SummaryRow = styled.div`
  background: ${tokens.neutralSurface};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 29px;
  padding: 0 12px;
  color: ${tokens.textSecondary};
  font-size: 14px;
  letter-spacing: 0.028px;

  b {
    font-weight: 500;
    color: ${tokens.rowText};
  }
`;

const Amount = styled.span`
  font-weight: 500;
  color: ${tokens.amountGreen};
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function NiftyPositions() {
  return (
    <Panel>
      <Header>
        <Title>NIFTY Positions</Title>
        <ClearLink>Clear Positions</ClearLink>
      </Header>

      <ActionsRow>
        <ExitButton>Exit Position (6)</ExitButton>
        <AddTradeButton>Add New Trade</AddTradeButton>
      </ActionsRow>

      <FilterRow>
        <DatePill>Show All</DatePill>
        <DatePillGroup>
          {dateFilters.slice(1).map((d, i) => (
            <DatePill key={`${d}-${i}`}>{d}</DatePill>
          ))}
        </DatePillGroup>
      </FilterRow>

      {positions.map((p, i) => (
        <PositionRow key={i}>
          <PositionTop>
            <SymbolGroup>
              <CheckboxGroup>
                <Checkbox aria-label="select position" />
                <BadgeGroup>
                  <SideBadge $side={p.side}>{p.side}</SideBadge>
                  <NrmlBadge>NRML</NrmlBadge>
                </BadgeGroup>
              </CheckboxGroup>
              <SymbolText>{p.symbol}</SymbolText>
            </SymbolGroup>
            <NumbersGroup>
              <NumberText>{p.qty}</NumberText>
              <NumberText>{p.price}</NumberText>
              <NumberText>{p.ltp}</NumberText>
            </NumbersGroup>
          </PositionTop>
          <SummaryRow>
            <span>
              Booked <b>0</b>
            </span>
            <span>
              Unbooked <Amount>{p.unbooked}</Amount>
            </span>
            <span>
              P&amp;L <Amount>{p.pnl}</Amount>
            </span>
          </SummaryRow>
        </PositionRow>
      ))}
    </Panel>
  );
}
