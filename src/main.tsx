import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GlobalStyles/normalize.css'
import './GlobalStyles/globalStyles.css'
import './GlobalStyles/media_query.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
