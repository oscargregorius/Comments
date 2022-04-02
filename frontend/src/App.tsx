import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import CreatePost from "./components/createPost/CreatePost";
import ErrorHandler from "./components/errorHandler/ErrorHandler";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePost />
      <Posts />
      <ErrorHandler />
    </div>
  );
}

export default App;
