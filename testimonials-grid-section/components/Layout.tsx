import Content from './Content'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-app min-h-screen">
      <header>
        {/* header */}
      </header>
      <main>
        <Content>
          {children}
        </Content>
      </main>
      <footer>
        {/* footer */}
      </footer>
    </div>
  )
}

export default Layout
