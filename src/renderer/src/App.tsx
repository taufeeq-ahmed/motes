import { Content, DraggableTopBar, RootLayout, Sidebar } from './components'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2"></Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20"></Content>
      </RootLayout>
    </>
  )
}

export default App
