import { HelpCircle, Minus, Plus } from 'lucide-react'

export function InfoDot() {
  return <HelpCircle className="info-dot" />
}

export function Stepper({ value, onChange, small, compact }) {
  return (
    <div className={`stepper ${compact ? 'stepper-compact' : ''}`}>
      <button type="button" onClick={() => onChange(-1)} className="stepper-btn">
        <Minus size={compact ? 10 : 12} />
      </button>
      <span className={`stepper-value ${small ? 'stepper-value-sm' : ''}`}>{value}</span>
      <button type="button" onClick={() => onChange(1)} className="stepper-btn">
        <Plus size={compact ? 10 : 12} />
      </button>
    </div>
  )
}

export function Toggle({ checked, onChange, label }) {
  return (
    <label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer', userSelect: 'none' }}>
      <span
        onClick={() => onChange(!checked)}
        className={`toggle-switch ${checked ? 'checked' : ''}`}
      >
        <span className="toggle-knob" />
      </span>
      <span className="small fw-medium text-secondary">{label}</span>
    </label>
  )
}

export function Pill({ active, children, tone = 'default', className = '', ...props }) {
  const toneClass = tone === 'muted' ? 'tone-muted' : ''
  return (
    <button
      type="button"
      className={`pill-btn ${toneClass} ${active ? 'active' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SegmentedTabs({ tabs, active, onChange }) {
  return (
    <div className="tab-strip">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`tab-strip-item ${active === tab ? 'active' : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
