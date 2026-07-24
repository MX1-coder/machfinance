const strategyIconPaths = {
  // low-left flat rises through the breakeven line to a high-right plateau (calls / bullish)
  bullUp: {
    low: 'M10,42 L28,42 L46,26',
    high: 'M46,26 L62,15 L75,13 L88,7',
  },
  // mirror of bullUp: high-left plateau falls through the breakeven line to a low-right flat (puts / bearish)
  bearDown: {
    low: 'M90,42 L72,42 L54,26',
    high: 'M54,26 L38,15 L25,13 L12,7',
  },
  // rises then plateaus then falls back down (capped-profit spreads / butterflies)
  spread: {
    low: 'M10,42 L24,42 L38,20',
    high: 'M38,20 L52,10 L64,10 L90,32',
  },
  // falls then plateaus then rises back up (capped-loss / condor style)
  spreadInv: {
    low: 'M10,10 L24,10 L38,20',
    high: 'M38,20 L52,32 L64,32 L90,10',
  },
  // mirror of a high-dip-high back spread (put ratio back spread)
  putRatioBack: {
    low: 'M60,24 L52,34 L44,24',
    high: 'M90,14 L70,14 L60,24 M44,24 L32,12 L12,6',
  },
  // mirror of an up-down hump (long calendar with puts)
  bearCalendarHump: {
    low: 'M90,38 L80,38 L70,28 M30,28 L20,36 L12,38',
    high: 'M70,28 L58,14 L42,14 L30,28',
  },
  // mirror of a capped plateau (bear condor)
  bearCondor: {
    low: 'M90,40 L78,40 L66,24',
    high: 'M66,24 L54,12 L36,12 L12,12',
  },
  // mirror of a spike (bear butterfly)
  bearButterfly: {
    low: 'M90,40 L78,40 L66,24 M40,24 L28,40 L12,40',
    high: 'M66,24 L56,10 L50,10 L40,24',
  },
  // mirror of a plain down-sloping diagonal (short range forward)
  shortRangeForward: {
    low: 'M90,42 L54,26',
    high: 'M54,26 L12,8',
  },
  // mirror of a plain down-sloping diagonal (short synthetic future)
  shortSyntheticFuture: {
    low: 'M90,44 L54,26',
    high: 'M54,26 L12,6',
  },
}

export default function StrategyIcon({ shape, src }) {
  // Real Figma-exported icon (used for Bullish, where each card has a
  // genuinely distinct hand-drawn shape rather than one reused pattern).
  if (src) {
    return <img src={src} alt="" style={{ height: '3rem', width: 'auto', maxWidth: '6rem' }} />
  }

  const path = strategyIconPaths[shape] ?? strategyIconPaths.bullUp
  return (
    <svg viewBox="0 0 100 56" style={{ height: '3rem', width: '6rem' }}>
      <line x1="9" y1="4" x2="9" y2="50" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="9" y1="26" x2="92" y2="26" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
      <path d={path.low} fill="none" stroke="#f0653a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path.high} fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
