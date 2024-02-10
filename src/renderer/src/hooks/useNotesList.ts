import { selectedNoteIndexAtom } from '@/store'
import { notesMock } from '@renderer/store/mocks/index'
import { useAtom } from 'jotai'
export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  // const notes = useAtomValue(notesAtom)

  const notes = notesMock

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
