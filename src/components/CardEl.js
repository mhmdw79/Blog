import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardEl({author,coverPhoto,id,slug,title}) {
  return (
    <Card sx={{boxShadow:"0px 4px 12px rgba(0,0,0,0.1)",borderRadius:4}}>
      {author &&<CardHeader avatar={<Avatar sx={{marginLeft:2}} src={author.avatar.url}/>} title={<Typography component="p" variant='p' color="text.secondary">{author.name}</Typography>}/>}
        <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug}/>
        <CardContent>
            <Typography component="h3" variant='h6' color="text.primary" fontWeight={600}>{title}</Typography>
        </CardContent>
        <Divider variant='middle' sx={{margin:"10px"}}/>
        <CardActions>
            <Link style={{textDecoration:"none",width:"100%"}} to={`/blogs/${slug}`}>
            <Button variant='outlined' size="small" sx={{width:"100%",borderRadius:3}}>مطالعه مقاله</Button>
            </Link>
        </CardActions>
    </Card>
  )
}

export default CardEl