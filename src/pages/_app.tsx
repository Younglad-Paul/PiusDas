import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <div className="flex items-center justify-center">
    <div className="max-w-[414px]">
  <Component {...pageProps} />
    </div>
    </div>
  )
}
