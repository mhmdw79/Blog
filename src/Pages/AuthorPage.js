import React from "react";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_AUTHOR } from "../graphql/queries";
import CardEl from "../components/CardEl";
import Loader from "../components/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const { data, error, loading } = useQuery(GET_AUTHOR, {
    variables: { slug: slug },
  });
  if (error) return <h4>ERROR</h4>;
  if (loading) return <Loader/>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            alt={data.author.name}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.feild}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
              <Typography component="h3" variant="h5" fontWeight={700}>مقالات {data.author.name}</Typography>

          <Grid container spacing={2} mt={2}>
                {data.author.posts.map(post=>(
                  <Grid item xs={12} sm={6} md={4} key={post.id}>
                      <CardEl slug={post.slug} coverPhoto={post.coverPhoto} title={post.title}/>
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
