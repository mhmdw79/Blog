import { useQuery } from '@apollo/client'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { GET_COMMENT } from '../graphql/queries'
import Loader from './Loader'

function Comments({slug}) {
    const {data,loading,error} = useQuery(GET_COMMENT,{
        variables:{slug:slug}
    })
    if (error) return <h4>ERROR</h4>;
    if (loading) return <Loader/>;
  return (
   <Grid container
   sx={{
     boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
     borderRadius: 4,
     mt: 8,
     py: 1,
   }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>

      </Grid>
      {data.comments.map(comment=>(
        <Grid key={comment.id} item xs={12} m={2} border="1px silver solid" borderRadius={1} p={2}>

          <Box component="div" display="flex" alignItems="center" mb={2} >
          <Avatar>{comment.name[0]}</Avatar>
          <Typography component="span" variant='p' fontWeight={700} mr={2}>{comment.name}</Typography>
          <Typography component="span" variant='span' color="text.secondary" mr={2}>{comment.email}</Typography>

          </Box>
          <Typography component="p" variant='p'>{comment.text}</Typography>

        </Grid>
      ))}
   </Grid>
  )
}

export default Comments