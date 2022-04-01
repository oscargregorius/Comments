import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import CreatePost from "./components/createPost/CreatePost";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default App;
