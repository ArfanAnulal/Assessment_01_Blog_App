import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div style={{textAlign:'center',padding:'2rem'}}>
      <Typography variant='h3'>Add Your Blog</Typography>
      <br /><br />
      <TextField variant='outlined' label='Blog Name'/>
      <br /><br />
      <TextField variant='outlined' label='Description'/>
      <br /><br />
      <TextField variant='outlined' label='Author Name'/>
      <br /><br />
      <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default Addblog
