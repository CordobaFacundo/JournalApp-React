import { colors, IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Esse ad voluptate consequat proident aliquip est in eiusmod sint pariatur elit. Velit aute duis eiusmod sint ipsum eu anim laboris est. Cillum amet duis officia do irure est sit tempor consequat nostrud. Anim ipsum duis proident duis magna consectetur pariatur sunt. Excepteur do adipisicing irure ex sint culpa consectetur incididunt aliqua ea officia reprehenderit nostrud. Velit tempor esse laborum tempor excepteur labore labore nisi dolor.</Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover':{backgroundColor: 'error.main', opacity:0.9},
          position:'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}} />

      </IconButton>
    
    
    </JournalLayout>
  )
}
