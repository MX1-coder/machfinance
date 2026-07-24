import iconBuyCall1 from '../../assets/icons/ready-made/buy-call-1.svg'
import iconSalePut from '../../assets/icons/ready-made/sale-put.svg'
import iconBullCallSpread from '../../assets/icons/ready-made/bull-call-spread.svg'
import iconBullPutSpread from '../../assets/icons/ready-made/bull-put-spread.svg'
import iconBuyCall2 from '../../assets/icons/ready-made/buy-call-2.svg'
import iconBuyCall3 from '../../assets/icons/ready-made/buy-call-3.svg'

export const legs = [
  { id: 1, side: 'B', expiry: '26 Mar', strike: 23700, type: 'CE', lots: 1, price: '182.7' },
  { id: 2, side: 'S', expiry: '26 Mar', strike: 23700, type: 'CE', lots: 1, price: '182.7' },
]

export const strategiesByFilter = {
  Bullish: [
    { name: 'Buy Call', icon: iconBuyCall1 },
    { name: 'sale put', icon: iconSalePut },
    { name: 'Bull call spread', icon: iconBullCallSpread },
    { name: 'Bull Put Spread', icon: iconBullPutSpread },
    { name: 'Buy Call', icon: iconBuyCall2 },
    { name: 'Buy Call', icon: iconBuyCall3 },
    { name: 'Buy Call', icon: iconBuyCall3 },
    { name: 'Buy Call', icon: iconBuyCall3 },
  ],
  Bearish: [
    { name: 'Buy Put', shape: 'bearDown' },
    { name: 'sale call', shape: 'bearDown' },
    { name: 'Bear put spread', shape: 'bearDown' },
    { name: 'Bear Call Spread', shape: 'bearDown' },
    { name: 'Put Ratio Back Spread', shape: 'putRatioBack' },
    { name: 'Long Calendar With Puts', shape: 'bearCalendarHump' },
    { name: 'Bear Condor', shape: 'bearCondor' },
    { name: 'Bear Butterfly', shape: 'bearButterfly' },
    { name: 'Short Range Forward', shape: 'shortRangeForward' },
    { name: 'Short Synthetic Future', shape: 'shortSyntheticFuture' },
  ],
  Neutral: [
    { name: 'Short Straddle', shape: 'spreadInv' },
    { name: 'Iron Condor', shape: 'spread' },
    { name: 'Butterfly', shape: 'spread' },
    { name: 'Iron Butterfly', shape: 'spreadInv' },
    { name: 'Short Strangle', shape: 'spreadInv' },
    { name: 'Calendar Spread', shape: 'spread' },
    { name: 'Short Strangle', shape: 'spreadInv' },
    { name: 'Iron Condor', shape: 'spread' },
  ],
  Other: [
    { name: 'Covered Call', shape: 'rise' },
    { name: 'Protective Put', shape: 'dip' },
    { name: 'Collar', shape: 'spread' },
    { name: 'Ratio Spread', shape: 'spreadInv' },
    { name: 'Covered Call', shape: 'rise' },
    { name: 'Protective Put', shape: 'dip' },
    { name: 'Collar', shape: 'spread' },
    { name: 'Ratio Spread', shape: 'spreadInv' },
  ],
}

export const positions = [
  { side: 'S', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495' },
  { side: 'S', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495' },
  { side: 'B', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495' },
  { side: 'B', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495' },
]

export const dateFilters = ['Show All', '07 Jul', '07 Jul', '07 Jul', '14 Jul', '14 Jul']

export const history = [
  { side: 'S', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495', time: '2026-04-01 3:30:30', startCap: '+10,40,321', presentCap: '+12,20,125' },
  { side: 'B', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '-14,495', pnl: '-14,495', time: '2026-04-01 3:30:30', startCap: '+10,40,321', presentCap: '+12,20,125' },
  { side: 'S', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495', time: '2026-04-01 3:30:30', startCap: '+10,40,321', presentCap: '+12,20,125' },
  { side: 'B', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '-14,495', pnl: '-14,495', time: '2026-04-01 3:30:30', startCap: '+10,40,321', presentCap: '+12,20,125' },
  { side: 'S', symbol: '26th May 23150 PE', qty: 5, price: '54.10', ltp: '9.50', unbooked: '+14,495', pnl: '+14,495', time: '2026-04-01 3:30:30', startCap: '+10,40,321', presentCap: '+12,20,125' },
]

export function amountTone(value) {
  return value.startsWith('-') ? 'text-danger' : 'text-success'
}

export const ivRows = [
  { strike: 23200, expiry: '26 Mar', iv: 15.8, chg: '(-0.1)' },
  { strike: 23200, expiry: '26 Mar', iv: 15.8, chg: '(-0.1)' },
  { strike: 23200, expiry: '26 Mar', iv: 15.8, chg: '(-0.1)' },
  { strike: 23200, expiry: '26 Mar', iv: 15.8, chg: '(-0.1)' },
  { strike: 23200, expiry: '26 Mar', iv: 15.8, chg: '(-0.1)' },
]

export const greeks = [
  { label: 'Delta', value: '-0.41' },
  { label: 'Theta', value: '186' },
  { label: 'Decay', value: '+519' },
  { label: 'Gamma', value: '-0.014' },
  { label: 'Vega', value: '1142' },
]

export const futurePrices = [
  { label: '26 May FUT', value: '23776.30' },
  { label: '30 Jun FUT', value: '23842.00' },
  { label: '28 Jul FUT', value: '23949.00' },
]

export const standardDeviations = [
  { sd: '1 SD', points: '462.7(2%)', low: '23256.6', high: '24182.0' },
  { sd: '2 SD', points: '925.3(3.9%)', low: '22794.0', high: '24644.6' },
]

// Payoff chart demo data. Coordinates are expressed in the chart's 1000x300
// SVG viewBox units, not real price/P&L values — swap this object for one
// derived from a live payoff API later; PayoffChart.jsx only cares about the
// point/segment shape, not where the numbers come from.
export const payoffChartData = {
  zeroY: 150,
  lossZone: [[0, 50], [0, 150], [380, 150]],
  profitZone: [[380, 150], [620, 50], [1000, 50], [1000, 150]],
  onExpiry: [[0, 150], [380, 150], [620, 50], [1000, 50]],
  onTargetDate: {
    start: [0, 165],
    curves: [
      { c1: [160, 160], c2: [320, 145], end: [430, 95] },
      { c1: [560, 55], c2: [780, 35], end: [1000, 32] },
    ],
  },
  currentPrice: { x: 430, label: '24009.55' },
  bars: [
    { x: 70, h: 36, color: '#2563eb' },
    { x: 250, h: 24, color: '#dc2626' },
    { x: 470, h: 60, color: '#2563eb' },
    { x: 680, h: 48, color: '#dc2626' },
    { x: 900, h: 42, color: '#2563eb' },
  ],
  tooltip: { x: 660, y: 175, label: 'Projected loss:', value: '-56.20' },
}
