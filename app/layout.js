import './globals.css'
import Head from 'next/head'




export const metadata = {
  title: 'Blog App | Next JS',
  description: 'Blog web application developed using Next JS with Static generation.',
  creator: 'Mageshkannan Annathurai',
  siteName:'Next JS Blog App',
  openGraph: {
    title: 'Blog App | Next JS',
  description: 'Blog web application developed using Next JS with Static generation.',
  type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
     </Head>
      <body >{children}</body>
    </html>
  )
}
