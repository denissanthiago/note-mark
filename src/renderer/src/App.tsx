import {
  Content,
  RootLayout,
  SideBar,
  DraggableTopBard,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'
import React from 'react'

const App = (): JSX.Element => {
  const contentContainerRef = React.useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef?.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBard />
      <RootLayout>
        <SideBar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </SideBar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
