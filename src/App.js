import HomePage from './Pages/HomePage';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './Pages/BlogPage';
import AuthorPage from './Pages/AuthorPage';





function App() {
  return (
    <Layout>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/blogs/:slug' element={<BlogPage/>}/>
        <Route path='/authors/:slug' element={<AuthorPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
