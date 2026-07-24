import styled from "styled-components";

/* ------------------------------------------------------------------ */
/*  Assets — downloaded locally from Figma into src/assets/icons.      */
/* ------------------------------------------------------------------ */
import imgVector from "../../assets/icons/new-strategy/vector.svg";
import imgArrow from "../../assets/icons/new-strategy/arrow.svg";
import imgPlusLeft from "../../assets/icons/new-strategy/plus-left.svg";
import imgPlusRight from "../../assets/icons/new-strategy/plus-right.svg";
import imgFilter from "../../assets/icons/new-strategy/filter.svg";
import imgDelete from "../../assets/icons/new-strategy/delete.svg";
import imgVectorSmall from "../../assets/icons/new-strategy/vector-small.svg";
import imgQuestionGroup from "../../assets/icons/new-strategy/question-group.svg";
import imgResetIcon from "../../assets/icons/new-strategy/reset-icon.svg";


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
  neutralBg: "#ffffff",
  neutralBorder: "#e2e6ea",
  neutralBorderStrong: "#c7cdd3",
  dangerBg: "rgba(255,56,60,0.14)",
  dangerRed: "#a32d2d",
};

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Panel = styled.div`
  background: ${tokens.neutralBg};
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 6px 0;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.05), 0px 10px 7.5px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 17px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: ${tokens.textPrimary};
`;

const ClearLink = styled.button`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: ${tokens.primary400};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  width: 100%;
`;

/* ---- Strategy summary row ---- */
const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  padding: 0 24px 0 17px;
  width: 100%;
`;

const SummaryLeft = styled.div`
  display: flex;
  align-items: center;
  width: 227px;
`;

const SelectedBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  height: 24px;
  padding: 1px 8px 1px 0;
  border-radius: 4px;
  width: 98px;
`;

const IconButton = styled.button`
  background: ${tokens.primary400};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 3px;
  border-radius: 2px;
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;

  img {
    width: 8px;
    height: 6px;
  }
`;

const SelectedCount = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textPrimary};
`;

const StrategyList = styled.ul`
  margin: 0;
  padding-left: 30px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${tokens.textPrimary};

  li {
    line-height: 16px;
  }
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1px;
  color: ${tokens.primary400};

  img {
    width: 16px;
    height: 16px;
  }
`;

/* ---- Leg table ---- */
const LegTableWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 17px;
  width: 100%;
`;

const TableHeaderRow = styled.div`
  background: ${tokens.neutralSurface};
  display: flex;
  align-items: center;
  padding: 0 33px 0 17px;
  width: 100%;
`;

const HeaderCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.align || "center"};
  padding: 8px 1px;
  width: ${(p) => p.width}px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${tokens.textSecondary};
`;

const LegRow = styled.div`
  background: ${tokens.neutralBg};
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 1px;
  width: 100%;
`;

const SideCell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 52px;
  height: 25px;
`;

const SideBadge = styled.span`
  background: ${(p) => (p.side === "S" ? tokens.dangerBg : tokens.primary50)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 3px;
  border-radius: 2px;
  width: 25px;
  height: 25px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${(p) => (p.side === "S" ? tokens.dangerRed : tokens.primary600)};
`;

const StepperBox = styled.div`
  background: ${tokens.neutralBg};
  border: 1px solid ${tokens.neutralBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  padding: 1px 4px;
  border-radius: 4px;
  width: ${(p) => p.width || 90}px;
`;

const Divider = styled.span`
  border-left: 1px solid ${tokens.neutralBorder};
  height: 24px;
  width: 1px;
`;

const StepIcon = styled.img`
  width: 17px;
  height: 17px;
`;

const StepperValue = styled.span`
  font-size: 12px;
  color: #353535;
  letter-spacing: 0.5px;
  text-align: ${(p) => p.align || "center"};
  flex: 1;
`;

const DataCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 3px;
  width: ${(p) => p.width}px;
`;

const SimpleBox = styled.div`
  background: ${tokens.neutralBg};
  border: 1px solid ${(p) => (p.$strong ? tokens.neutralBorderStrong : tokens.neutralBorder)};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 5px 3px;
  border-radius: 4px;
  width: ${(p) => p.width}px;
  font-size: 12px;
  color: #353535;
  letter-spacing: 0.5px;
`;

const RowIcon = styled.img`
  width: ${(p) => p.size || 18}px;
  height: ${(p) => p.size || 18}px;
  cursor: pointer;
`;

/* ---- Adjustment controls ---- */
const AdjustmentBar = styled.div`
  background: ${tokens.neutralSurface};
  display: flex;
  gap: 55px;
  height: 52px;
  align-items: flex-start;
  justify-content: center;
  padding: 13px 17px;
  width: 100%;
`;

const AdjustmentField = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 144px;
`;

const AdjustmentLabel = styled.span`
  flex: 1;
  font-size: 12px;
  color: ${tokens.textPrimary};
  letter-spacing: 0.2px;
`;

/* ---- Bottom section ---- */
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const PriceSummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 10px 17px;
  width: 100%;
`;

const MultiplierRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const MultiplierField = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-right: 12px;
  font-size: 12px;
  color: ${tokens.textPrimary};
  letter-spacing: 0.2px;
`;

const PriceInfo = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 12px;
  color: ${tokens.textPrimary};
  letter-spacing: 0.2px;

  b {
    font-weight: 700;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  width: 100%;
`;

const OutlineButton = styled.button`
  background: ${tokens.neutralBg};
  border: 1px solid ${tokens.primary100};
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 9px 17px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${tokens.textPrimary};
  cursor: pointer;
  white-space: nowrap;
`;

const PrimaryButton = styled(OutlineButton)`
  background: ${tokens.primary400};
  border: none;
  color: #ffffff;
`;

const ManualPLRow = styled.div`
  border-top: 1px solid ${tokens.neutralBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 51px;
  padding: 0 20px 0 13px;
  width: 100%;
`;

const ManualPLLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 4px;
`;

const Checkbox = styled.button`
  border: 0.5px solid ${tokens.textMuted};
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 3px;
  border-radius: 2px;
  width: 14px;
  height: 14px;
  cursor: pointer;

  img {
    width: 7px;
    height: 5px;
  }
`;

const ManualPLLabel = styled.span`
  font-size: 14px;
  color: #414141;
  letter-spacing: 0.2px;
`;

const AddManualPL = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${tokens.primary400};
  letter-spacing: 0.2px;
`;

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                    */
/* ------------------------------------------------------------------ */
function Stepper({ value, width = 105, align, decrementIcon = imgPlusLeft, incrementIcon = imgPlusRight }) {
  return (
    <StepperBox width={width}>
      <StepIcon src={decrementIcon} alt="decrease" />
      <Divider />
      <StepperValue align={align}>{value}</StepperValue>
      <Divider />
      <StepIcon src={incrementIcon} alt="increase" />
    </StepperBox>
  );
}

function DateStepper({ value, width = 90, align }) {
  return (
    <StepperBox width={width}>
      <StepperValue align={align}>{value}</StepperValue>
      <Divider />
      <StepIcon src={imgArrow} alt="change date" style={{ width: 13, height: 13, transform: "rotate(89.72deg)" }} />
    </StepperBox>
  );
}

const legs = [
  { side: "B", expiry: "26 Mar", strike: "23700", type: "CE", lots: "1", price: "182.7" },
  { side: "S", expiry: "26 Mar", strike: "23700", type: "CE", lots: "1", price: "182.7" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function NewStrategyPanel() {
  return (
    <Panel>
      <Header>
        <Title>New Strategy</Title>
        <ClearLink>Clear New Trades</ClearLink>
      </Header>

      <Body>
        <SummaryRow>
          <SummaryLeft>
            <SelectedBadge>
              <IconButton>
                <img src={imgVector} alt="" />
              </IconButton>
              <SelectedCount>2 selected</SelectedCount>
            </SelectedBadge>
            <StrategyList>
              <li>Bull Call Spread</li>
            </StrategyList>
          </SummaryLeft>
          <ResetButton>
            <img src={imgResetIcon} alt="" />
            Reset Prices
          </ResetButton>
        </SummaryRow>

        <LegTableWrap>
          <TableHeaderRow>
            <HeaderCell width={42} align="flex-start">B/S</HeaderCell>
            <HeaderCell width={92}>Expiry</HeaderCell>
            <HeaderCell width={114}>Strike</HeaderCell>
            <HeaderCell width={53}>Type</HeaderCell>
            <HeaderCell width={71}>Lots</HeaderCell>
            <HeaderCell width={99}>Price</HeaderCell>
          </TableHeaderRow>

          {legs.map((leg, i) => (
            <LegRow key={i}>
              <SideCell>
                <IconButton>
                  <img src={imgVector} alt="" />
                </IconButton>
                <SideBadge side={leg.side}>{leg.side}</SideBadge>
              </SideCell>

              <DataCell width={93}>
                <DateStepper value={leg.expiry} />
              </DataCell>

              <DataCell width={106}>
                <Stepper value={leg.strike} width={105} />
              </DataCell>

              <DataCell width={35}>
                <SimpleBox width={32}>{leg.type}</SimpleBox>
              </DataCell>

              <DataCell width={73}>
                <DateStepper value={leg.lots} width={70} align="right" />
              </DataCell>

              <DataCell width={93}>
                <SimpleBox width={90} $strong>{leg.price}</SimpleBox>
              </DataCell>

              <RowIcon src={imgFilter} size={25} alt="filter" />
              <RowIcon src={imgDelete} size={18} alt="delete" />
            </LegRow>
          ))}
        </LegTableWrap>
      </Body>

      <AdjustmentBar>
        <AdjustmentField>
          <AdjustmentLabel>Shift</AdjustmentLabel>
          <Stepper value="100" />
        </AdjustmentField>
        <AdjustmentField>
          <AdjustmentLabel>Width</AdjustmentLabel>
          <Stepper value="100" />
        </AdjustmentField>
        <AdjustmentField>
          <AdjustmentLabel>Hedge</AdjustmentLabel>
          <Stepper value="100" />
        </AdjustmentField>
      </AdjustmentBar>

      <BottomSection>
        <PriceSummaryWrap>
          <MultiplierRow>
            <MultiplierField>
              Multiplier
              <DateStepper value="1" width={70} align="right" />
            </MultiplierField>
            <PriceInfo>
              <span>Price <b>Pay 95.25</b></span>
              <span>Premium <b>Pay 6,191</b></span>
            </PriceInfo>
          </MultiplierRow>

          <ButtonsRow>
            <OutlineButton>Add/Edit</OutlineButton>
            <OutlineButton>Drafts</OutlineButton>
            <PrimaryButton>Trade All</PrimaryButton>
          </ButtonsRow>
        </PriceSummaryWrap>

        <ManualPLRow>
          <ManualPLLeft>
            <Checkbox>
              <img src={imgVectorSmall} alt="" />
            </Checkbox>
            <ManualPLLabel>Manual P/L</ManualPLLabel>
            <img src={imgQuestionGroup} alt="info" width={14} height={14} />
          </ManualPLLeft>
          <AddManualPL>Add Manual P/L</AddManualPL>
        </ManualPLRow>
      </BottomSection>
    </Panel>
  );
}