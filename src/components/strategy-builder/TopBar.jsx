import styled from "styled-components";

import imgSearch from "../../assets/icons/topbar/search.svg";
import imgChart from "../../assets/icons/topbar/chart.svg";
import imgSettings from "../../assets/icons/topbar/settings.svg";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  textPrimary: "#1a1d21",
  primary800: "#0d394d",
  success: "#34c759",
  neutralBg: "#ffffff",
};

const cardShadow = "0px 1px 1.5px rgba(0,0,0,0.1), 0px 1px 1px rgba(0,0,0,0.06)";

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

const SearchBox = styled.div`
  background: ${tokens.neutralBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 40px;
  padding: 4px 35px 4px 17px;
  border-radius: 4px;
  box-shadow: ${cardShadow};
  flex: 1;
  min-width: 0;
  overflow-x: auto;
`;

const SearchLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const PriceText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  margin: 0;
  white-space: nowrap;
`;

const SearchRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const ChartButton = styled.div`
  border: 1px solid ${tokens.primary800};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 16px;
  border-radius: 4px;

  img {
    width: 13px;
    height: 7px;
  }
`;

const InfoButton = styled.div`
  border: 1px solid ${tokens.primary800};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 16px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: ${tokens.primary800};
  white-space: nowrap;
`;

const SettingsButton = styled.button`
  background: ${tokens.neutralBg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  padding: 4px 17px 4px 16px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  box-shadow: ${cardShadow};
  flex-shrink: 0;

  img {
    width: 16px;
    height: 18px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: ${tokens.textPrimary};
    white-space: nowrap;
  }
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function TopBar() {
  return (
    <Row>
      <SearchBox>
        <SearchLeft>
          <SearchIcon src={imgSearch} alt="" />
          <PriceText>
            <span style={{ color: tokens.textPrimary }}>NIFTY </span>
            <span style={{ color: tokens.textPrimary, fontWeight: 700 }}>23719.30</span>{" "}
            <span style={{ color: tokens.success, fontWeight: 700 }}>+0.27%</span>
          </PriceText>
        </SearchLeft>
        <SearchRight>
          <ChartButton>
            <img src={imgChart} alt="" />
          </ChartButton>
          <InfoButton>Info</InfoButton>
        </SearchRight>
      </SearchBox>

      <SettingsButton>
        <img src={imgSettings} alt="" />
        <span>Settings</span>
      </SettingsButton>
    </Row>
  );
}
