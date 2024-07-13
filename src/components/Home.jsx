import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[output,setOutput] = useState([])
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res)
        setOutput(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Title</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {output.map((val,i) => (
                <TableRow key={i}>
                <TableCell>{val.id}</TableCell>
                <TableCell align="right">{val.body}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default Home
