import { useState } from 'react'
import { Shield, AlertCircle } from 'lucide-react'

export default function OtpPage({ userInitials = 'JD', userId = 'MF12345', onContinue }) {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!otp) {
      setError('Please enter your TOTP code.')
      return
    }

    if (!/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6 digit code.')
      return
    }

    setIsLoading(true)

    // Simulate TOTP verification API call
    setTimeout(() => {
      setIsLoading(false)
      onContinue?.()
    }, 1200)
  }

  return (
    <div
      className="d-flex flex-column justify-content-between px-3 px-sm-4 px-lg-5 py-5"
      style={{ minHeight: 'calc(100vh - 4rem)', backgroundColor: '#f8fafc' }}
    >
      {/* Centered Content Container */}
      <div className="mx-auto w-100 flex-grow-1" style={{ maxWidth: '420px' }}>
        {/* Card Panel */}
        <div className="soft-card-lg shadow p-4 p-md-5">
          {/* Avatar */}
          <div className="d-flex flex-column align-items-center">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light fw-bold text-secondary" style={{ width: '4rem', height: '4rem', fontSize: '1.125rem' }}>
              {userInitials}
            </div>
            <p className="mt-2 fw-bold text-dark mb-0">{userId}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            {/* Error Alert */}
            {error && (
              <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 small">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <label htmlFor="totp" className="form-label small fw-medium text-dark">
              External TOTP
            </label>
            <div className="position-relative">
              <Shield
                size={16}
                className="text-secondary position-absolute"
                style={{ left: '0.875rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
              />
              <input
                id="totp"
                type="password"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="••••••"
                className="form-control rounded-3 py-2"
                style={{ paddingLeft: '2.5rem', letterSpacing: '0.5em' }}
              />
            </div>
            <p className="mt-2 small text-secondary">
              Use your authenticator app to generate a 6 digit TOTP.
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-navy w-100 py-2 fw-semibold mt-3"
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              ) : (
                'Continue'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer links */}
      <footer className="mt-5 text-center">
        <div className="mx-auto small fw-semibold text-secondary" style={{ maxWidth: '48rem' }}>
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
            <a href="#about" className="text-secondary text-decoration-none">About</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#news" className="text-secondary text-decoration-none">News Room</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#research" className="text-secondary text-decoration-none">Research Directory</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#people" className="text-secondary text-decoration-none">People Directory</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#conference" className="text-secondary text-decoration-none">Conference Directory</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#school" className="text-secondary text-decoration-none">School Directory</a>
          </div>
          <div className="mt-2 d-flex flex-wrap align-items-center justify-content-center gap-2">
            <a href="#university" className="text-secondary text-decoration-none">University Directory</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#products" className="text-secondary text-decoration-none">Products</a>
            <span className="text-secondary-emphasis fw-light">|</span>
            <a href="#contact" className="text-secondary text-decoration-none">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
