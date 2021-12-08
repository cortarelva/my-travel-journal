
import Navbar from './components/navbar';
import Post from './components/post.js';

import data from './data/data.js';


function App() {

  const posts = data.map(item => {
    return (
      <Post
        key={item.id}
        {...item}
    />
  )
})


  return (
    <>
      <Navbar />
      {posts}
    </>
  );
}

export default App;
