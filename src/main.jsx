/*AGAR API CALL KARNI HOGI TO AUTH0_AUDIENCEauthorizationParams={{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE, // optional if using custom API
    }}
  >
*/
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ClerkProvider>
)
