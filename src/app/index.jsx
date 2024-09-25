import React from 'react'
import ReactDOM from 'react-dom/client'
import '../common/styles/normalize.css'
import '../common/styles/index.css'
import { ErrorBoundary } from '../components/error_boundary/error_boundary.jsx'
import { RecoilRoot } from 'recoil'
import { Router } from './router.jsx'
import gsap from 'gsap-trial'
gsap.config({ trialWarn: false })

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <React.StrictMode>
            <ErrorBoundary>
                <Router />
            </ErrorBoundary>
        </React.StrictMode>
    </RecoilRoot>,
)
