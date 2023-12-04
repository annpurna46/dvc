import { AuthProvider } from './Providers'
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: 'DVC',
  description: 'digital cards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastContainer />
          {children}
        </AuthProvider>
      </body>

    </html>
  )
}
