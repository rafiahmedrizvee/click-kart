import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Pages/Context/UserContext.jsx'
import CartContext from './Pages/Context/CartContext.jsx'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client = {queryClient}>
     <UserContext>
      <CartContext>     
       <App/>
      </CartContext>
   </UserContext>
  </QueryClientProvider>
  </StrictMode>,
)
