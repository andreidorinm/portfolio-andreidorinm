import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
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
      <NextSeo
        title="Andrei Mihaila | Frontend Developer"
        titleTemplate="Andrei Mihaila | Frontend Developer"
        defaultTitle="Andrei Mihaila | Frontend Developer"
        description="Hey! I'm Andrei Mihaila, A Frontend Developer, Blogger and a Student!"
        openGraph={{
          url: "https://www.andreidorinm.tech/",
          title: "Andrei Mihaila | Frontend Developer",
          description:
            "Hey! I'm Andrei Mihaila, A Frontend Developer, Blogger and a Student!",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
              width: 800,
              height: 420,
              alt: "Andrei Mihaila | Frontend Developer",
            },
          ],
        }}
        // twitter={{
        //   handle: "@kr_anurag_",
        //   site: "@kr_anurag_",
        //   cardType: "summary_large_image",
        // }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, Web Developer, web development, web developer, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/bmo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
