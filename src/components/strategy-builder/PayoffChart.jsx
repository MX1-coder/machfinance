import styled from "styled-components";
import { payoffChartData } from "./data";

/* ------------------------------------------------------------------ */
/*  Design tokens (pulled from the Figma variables)                    */
/* ------------------------------------------------------------------ */
const tokens = {
  onExpiry: "#16a34a",
  onTargetDate: "#00374d",
  pricePointer: "#134f69",
  tooltipBg: "#2d3133",
  tooltipDot: "#ba1a1a",
  tooltipText: "#eff1f3",
  legendText: "#41484d",
  boxBorder: "#c0c7cd",
};

/* ------------------------------------------------------------------ */
/*  Path helpers — build SVG "d" strings from data.js point arrays      */
/* ------------------------------------------------------------------ */
function linePath(points) {
  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
}

function curvePath({ start, curves }) {
  const segments = curves.map(
    (c) => `C${c.c1[0]},${c.c1[1]} ${c.c2[0]},${c.c2[1]} ${c.end[0]},${c.end[1]}`
  );
  return `M${start[0]},${start[1]} ${segments.join(" ")}`;
}

/* ------------------------------------------------------------------ */
/*  Layout primitives                                                  */
/* ------------------------------------------------------------------ */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 28px 41px 17px;
`;

const ChartBox = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid ${tokens.boxBorder};
  border-left: 1px solid ${tokens.boxBorder};
  height: 340px;
  width: 100%;
  overflow: hidden;
`;

const ChartSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const PricePointerLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(p) => p.$left}%;
  border-left: 1px dashed ${tokens.pricePointer};
`;

const PricePointerLabel = styled.div`
  position: absolute;
  top: 0;
  left: ${(p) => p.$left}%;
  transform: translateX(-50%);
  background: ${tokens.pricePointer};
  border-radius: 0 0 4px 4px;
  padding: 2px 6px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10px;
  color: white;
  white-space: nowrap;
`;

const TooltipBadge = styled.div`
  position: absolute;
  left: ${(p) => p.$left}%;
  top: ${(p) => p.$top}px;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${tokens.tooltipBg};
  border-radius: 12px;
  padding: 6px 16px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
`;

const TooltipDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: ${tokens.tooltipDot};
  flex-shrink: 0;
`;

const TooltipText = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  color: ${tokens.tooltipText};

  b {
    font-weight: 700;
  }
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendSwatch = styled.span`
  width: 12px;
  height: 4px;
  flex-shrink: 0;
  background: ${(p) => p.color};
`;

const LegendLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: ${tokens.legendText};
`;

const Caption = styled.span`
  margin-left: auto;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-style: italic;
  color: ${tokens.legendText};
  white-space: nowrap;
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function PayoffChart() {
  const { zeroY, lossZone, profitZone, onExpiry, onTargetDate, currentPrice, bars, tooltip } =
    payoffChartData;

  const priceLeftPct = (currentPrice.x / 1000) * 100;
  const tooltipLeftPct = (tooltip.x / 1000) * 100;
  const tooltipTopPx = (tooltip.y / 300) * 340;

  return (
    <Wrapper>
      <ChartBox>
        <ChartSvg viewBox="0 0 1000 300" preserveAspectRatio="none">
          {/* zero baseline */}
          <line x1="0" y1={zeroY} x2="1000" y2={zeroY} stroke={tokens.boxBorder} strokeWidth="1" />

          {/* loss / profit zones */}
          <path d={`${linePath(lossZone)} Z`} fill="#fecaca" opacity="0.45" />
          <path d={`${linePath(profitZone)} Z`} fill="#bbf7d0" opacity="0.45" />

          {/* on target date curve + on expiry line */}
          <path d={curvePath(onTargetDate)} fill="none" stroke={tokens.onTargetDate} strokeWidth="2.5" />
          <path d={linePath(onExpiry)} fill="none" stroke={tokens.onExpiry} strokeWidth="2.5" />

          {/* OI bars mock */}
          {bars.map((bar) => (
            <rect key={bar.x} x={bar.x} y={290 - bar.h} width="14" height={bar.h} fill={bar.color} opacity="0.3" />
          ))}

          {/* projected-loss connector */}
          <line
            x1="40"
            y1={zeroY + 15}
            x2={tooltip.x}
            y2={tooltip.y}
            stroke={tokens.tooltipDot}
            strokeWidth="1.25"
            strokeDasharray="4 4"
          />
          <circle cx={tooltip.x} cy={tooltip.y} r="3.5" fill={tokens.tooltipDot} />
        </ChartSvg>

        <PricePointerLine $left={priceLeftPct} />
        <PricePointerLabel $left={priceLeftPct}>{currentPrice.label}</PricePointerLabel>

        <TooltipBadge $left={tooltipLeftPct} $top={tooltipTopPx}>
          <TooltipDot />
          <TooltipText>
            {tooltip.label} <b>{tooltip.value}</b>
          </TooltipText>
        </TooltipBadge>
      </ChartBox>

      <Legend>
        <LegendItem>
          <LegendSwatch color={tokens.onExpiry} />
          <LegendLabel>On Expiry</LegendLabel>
        </LegendItem>
        <LegendItem>
          <LegendSwatch color={tokens.onTargetDate} />
          <LegendLabel>On Target Date</LegendLabel>
        </LegendItem>
        <Caption>Horizontal axis represents Nifty Spot price at Expiry</Caption>
      </Legend>
    </Wrapper>
  );
}
