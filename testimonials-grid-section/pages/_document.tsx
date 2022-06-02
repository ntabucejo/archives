import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-light-grayish-blue font-primary text-sm">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
