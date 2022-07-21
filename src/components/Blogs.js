import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import React from 'react'
import { GET_POSTS } from '../graphql/queries'
import CardEl from './CardEl'
import Loader from './Loader.js'

function Blogs() {
    const {loading,error,data} = useQuery(GET_POSTS)

    if(error) return <h4>ERROR</h4>
    if(loading) return <Loader/>
  return (
    <Grid container spacing={2}>
     {data.posts.map(post => (
        <Grid item  key={post.id} xs={12} sm={6} md={4}>
              <CardEl {...post}/>
        </Grid>
     ))}

    </Grid>
  )
}

export default Blogs