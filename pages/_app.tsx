import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Head>
        <title>Andrei Mihaila | Frontend Developer</title>
        <meta name="description" content="Hey! I'm Andrei Mihaila, A Frontend Developer specialized in Angular" />
        <meta name="keywords" content="Frontend Developer, Web Developer, web development, web developer, tech enthusiast, open source" />
        <meta property="og:url" content="https://www.andreidorinm.com/" />
        <meta property="og:title" content="Andrei Mihaila | Frontend Developer" />
        <meta property="og:description" content="Hey! I'm Andrei Mihaila, A Frontend Developer specialized in Angular" />
        <meta property="og:image" content="https://res.cloudinary.com/dlnywh1pc/image/upload/v1703544505/gradient_lam4wf.png" />
        <link rel="icon" type="image/png" href="/assets/bmo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;