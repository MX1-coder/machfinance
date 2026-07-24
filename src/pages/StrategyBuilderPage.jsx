import TopBar from '../components/strategy-builder/TopBar'
import NewStrategyCard from '../components/strategy-builder/NewStrategyCard'
import ReadyMadeStrategies from '../components/strategy-builder/ReadyMadeStrategies'
import NiftyPositions from '../components/strategy-builder/NiftyPositions'
import StatsSummary from '../components/strategy-builder/StatsSummary'
import PayoffGraphCard from '../components/strategy-builder/PayoffGraphCard'
import StatsAndGreeksCard from '../components/strategy-builder/StatsAndGreeksCard'

export default function StrategyBuilderPage() {
  return (
    <div className="px-3 px-sm-4 px-lg-5 py-4" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <div className="mx-auto strategy-builder-grid" style={{ maxWidth: '1536px' }}>
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div className="d-flex flex-column gap-3">
          <TopBar />
          <NewStrategyCard />
          <ReadyMadeStrategies />
          <NiftyPositions />
        </div>

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div className="d-flex flex-column gap-3">
          <StatsSummary />
          <PayoffGraphCard />
          <StatsAndGreeksCard />
        </div>
      </div>
    </div>
  )
}
