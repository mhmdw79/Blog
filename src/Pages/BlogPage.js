import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { GET_POST } from '../graphql/queries';
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import { Container, height } from '@mui/system';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sanitizeHtml from "sanitize-html";
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';

function BlogPage() {
  const { slug } = useParams();
  const { data, error, loading } = useQuery(GET_POST, {
    variables: { slug: slug },
  });
  const navigate = useNavigate()
  if (error) return <h4>ERROR</h4>;
  if (loading) return <Loader/>;
  return (
    <Container maxWidth="lg">
            <Grid container>
                  <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
                      <Typography component="h2" variant='h4' color="primary" fontWeight={700}>{data.post.title}</Typography>
                      <ArrowBackRoundedIcon onClick={()=>navigate(-1)}/>
                  </Grid>
                  <Grid item xs={12} mt={6}>
                    <img src={data.post.coverPhoto.url} alt={data.post.slug} style={{width:"100%",borderRadius:16}}/>
                  </Grid>
                  <Grid item xs={12} mt={6} display="flex" alignItems="center">
                      <Avatar src={data.post.author.avatar.url} sx={{width:80,height:80,marginLeft:2}}/>
                      <Box component="div">
                      <Typography component="p" variant='h5' fontWeight={700}>{data.post.author.name}</Typography>
                      <Typography component="p" variant='p' color="text.secondary" >{data.post.author.feild}</Typography>
                      </Box>

                  </Grid>
                  <Grid item xs={12} mt={6}>
                      <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.contentText.html)}}>

                      </div>
                  </Grid>
                  <Grid item xs={12}>
                    <CommentForm slug={slug}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Comments slug={slug}/>
                  </Grid>
            </Grid>
    </Container>
  )
}

export default BlogPage