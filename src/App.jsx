import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import OtpPage from './pages/OtpPage'
import StrategyBuilderPage from './pages/StrategyBuilderPage'

function App() {
  const [step, setStep] = useState('trade') // 'trade' | 'login' | 'otp' | 'done'

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar onLoginClick={() => setStep('login')} />
      <main>
        {step === 'trade' && <StrategyBuilderPage />}
        {step === 'login' && <LoginPage onSuccess={() => setStep('otp')} />}
        {step === 'otp' && <OtpPage onContinue={() => setStep('done')} />}
        {step === 'done' && (
          <div className="d-flex align-items-center justify-content-center px-3" style={{ minHeight: 'calc(100vh - 4rem)' }}>
            <div className="soft-card-lg shadow-lg p-4 p-md-5 text-center" style={{ maxWidth: '420px', width: '100%' }}>
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success mb-3" style={{ width: '3.5rem', height: '3.5rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 className="fw-bold text-dark">Welcome Back!</h3>
              <p className="text-secondary small mt-2">
                You have successfully logged into MachFinance.
              </p>
              <button
                onClick={() => setStep('trade')}
                className="btn btn-navy w-100 fw-semibold mt-4"
              >
                Continue to Trade
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
