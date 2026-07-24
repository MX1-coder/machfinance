import { useState } from 'react'
import { Eye, EyeOff, Check, AlertCircle, Sparkles } from 'lucide-react'

export default function LoginPage({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [saveDetails, setSaveDetails] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Interaction states
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address.')
      return
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!password) {
      setError('Please enter your password.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setIsLoading(true)

    // Simulate login request API call
    setTimeout(() => {
      setIsLoading(false)
      if (onSuccess) {
        onSuccess()
      } else {
        setSuccess(true)
      }
    }, 1500)
  }

  return (
    <div
      className="d-flex flex-column justify-content-between px-3 px-sm-4 px-lg-5 py-5"
      style={{ minHeight: 'calc(100vh - 4rem)', background: 'linear-gradient(to top right, #f8fafc, #f1f5f9, rgba(239,246,255,0.3))' }}
    >
      {/* Centered Content Container */}
      <div className="mx-auto w-100 flex-grow-1 d-flex flex-column justify-content-center" style={{ maxWidth: '440px' }}>

        {/* Title */}
        <h2 className="mb-4 text-center fw-bold text-brand-navy" style={{ fontSize: '1.875rem' }}>
          Login
        </h2>

        {/* Card Panel */}
        <div className="soft-card-lg shadow p-4 p-md-5">

          {success ? (
            <div className="d-flex flex-column align-items-center text-center py-3">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success mb-3" style={{ width: '3.5rem', height: '3.5rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 className="fw-bold text-dark">Welcome Back!</h3>
              <p className="text-secondary small mt-2">
                You have successfully logged into MachFinance.
              </p>
              <button
                onClick={() => {
                  setSuccess(false)
                  setEmail('')
                  setPassword('')
                }}
                className="btn btn-navy w-100 fw-semibold mt-4"
              >
                Log Out / Reset
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">

              {/* Error Alert */}
              {error && (
                <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 small mb-0">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Email Address field */}
              <div>
                <label htmlFor="email" className="form-label text-uppercase small fw-semibold text-secondary">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="form-control rounded-3 py-2 px-3"
                />
              </div>

              {/* Password field */}
              <div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <label htmlFor="password" className="form-label text-uppercase small fw-semibold text-secondary mb-0">
                    Password
                  </label>
                  <a href="#forgot-password" className="small fw-semibold text-primary text-decoration-none">
                    Forgot password?
                  </a>
                </div>
                <div className="position-relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-control rounded-3 py-2 px-3"
                    style={{ paddingRight: '2.75rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-link position-absolute top-0 end-0 h-100 d-flex align-items-center text-secondary px-3"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Save Details Checkbox */}
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={saveDetails}
                  onClick={() => setSaveDetails(!saveDetails)}
                  className="btn p-0 border d-flex align-items-center justify-content-center"
                  style={{
                    width: '1.125rem',
                    height: '1.125rem',
                    borderRadius: '0.25rem',
                    backgroundColor: saveDetails ? 'var(--brand-teal)' : '#fff',
                    borderColor: saveDetails ? 'var(--brand-teal)' : '#cbd5e1',
                  }}
                >
                  {saveDetails && <Check size={12} color="#fff" strokeWidth={3} />}
                </button>
                <span
                  onClick={() => setSaveDetails(!saveDetails)}
                  className="ms-2 small fw-semibold text-brand-navy user-select-none"
                  style={{ cursor: 'pointer' }}
                >
                  Save Details
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-navy w-100 py-2 fw-semibold"
              >
                {isLoading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                ) : (
                  'Login'
                )}
              </button>
            </form>
          )}

          {/* Under card divider link */}
          {!success && (
            <div className="mt-4 text-center border-top pt-3">
              <a href="#forgot-id-password" className="small text-secondary text-decoration-none">
                Forgot user ID or password ?
              </a>
            </div>
          )}
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
