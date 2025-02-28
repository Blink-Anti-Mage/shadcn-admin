import { useUsers } from '../context/users-context'

import { AlertDialogDemo } from './data-delete-dialog.tsx'



export function UsersDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useUsers()
  return (
    <>


      {currentRow && (
        <>

          <AlertDialogDemo
            open={open === 'delete'}
            onOpenChange={() => setOpen(null)}
            currentRow={currentRow}

          />

        </>
      )}
    </>
  )
}