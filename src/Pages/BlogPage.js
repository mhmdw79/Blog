import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { GET_POST } from '../graphql/queries';

function BlogPage() {
  const { slug } = useParams();
  const { data, error, loading } = useQuery(GET_POST, {
    variables: { slug: slug },
  });
  if (error) return <h4>ERROR</h4>;
  if (loading) return <Loader/>;
  console.log(data);
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage