import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />

          {/* Primary SEO Meta */}
          <meta
            name='title'
            content='{process.env.NEXT_PUBLIC_APP_NAME} | Trusted Investment, Loan & Savings Company'
          />
          <meta
            name='description'
            content='{process.env.NEXT_PUBLIC_APP_NAME} is a reliable financial platform offering secure investments, flexible loan options, and smart savings plans. Build wealth confidently with transparent services and expert financial support.'
          />
          <meta
            name='keywords'
            content='{process.env.NEXT_PUBLIC_APP_NAME}, investment company, savings platform, loan services, financial planning, secure investment, personal finance, wealth growth, lending solutions, high-yield savings'
          />
          <meta
            name='author'
            content='{process.env.NEXT_PUBLIC_APP_NAME} Finance'
          />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.smartpocket.com/' />
          <meta
            property='og:title'
            content='{process.env.NEXT_PUBLIC_APP_NAME} | Trusted Investment, Loan & Savings Company'
          />
          <meta
            property='og:description'
            content='Invest, save, and borrow smarter with {process.env.NEXT_PUBLIC_APP_NAME}. Transparent, secure, and customer-focused financial services for your growth.'
          />
          <meta
            property='og:image'
            content='https://res.cloudinary.com/da26wgev2/image/upload/v1761134034/receipts/bmnhjzee3cynfi5w3djz.png'
          />

          {/* Twitter Meta */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://www.smtpocket.com/' />
          <meta
            name='twitter:title'
            content='{process.env.NEXT_PUBLIC_APP_NAME} | Trusted Investment, Loan & Savings Company'
          />
          <meta
            name='twitter:description'
            content='Empowering your financial journey with secure investments, flexible loans, and smart savings plans.'
          />
          <meta
            name='twitter:image'
            content='https://res.cloudinary.com/da26wgev2/image/upload/v1761134034/receipts/bmnhjzee3cynfi5w3djz.png'
          />

          {/* Favicon */}
          <link
            rel='icon'
            href='https://res.cloudinary.com/da26wgev2/image/upload/v1761134034/receipts/bmnhjzee3cynfi5w3djz.png'
          />

          {/* Google Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
            rel='stylesheet'
          />

          {/* Structured Data / Schema */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FinancialService',
                name: '{process.env.NEXT_PUBLIC_APP_NAME}',
                url: 'https://www.smtpocket.com',
                logo: 'https://res.cloudinary.com/da26wgev2/image/upload/v1761134034/receipts/bmnhjzee3cynfi5w3djz.png',
                description:
                  '{process.env.NEXT_PUBLIC_APP_NAME} provides secure investment, flexible loan, and savings services designed to help individuals and businesses grow wealth confidently.',
                sameAs: [
                  'https://facebook.com/smartpocket',
                  'https://twitter.com/smartpocket',
                  'https://instagram.com/smartpocket'
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
