import './App.css';
import Article from './components/Article';

const article = {
  articleName: "How to workout?",
  author: "Ronnie Coleman",
  date: new Date().toLocaleDateString(),
  isLiked: false
}

function App() {
  return (
    <div className="App">
      <h1>Articles</h1>
      <div className='Articles'>
        <Article {...article} />
        <Article {...article} />
        <Article {...article} />
        <Article {...article} />
        <Article {...article} />
        <Article {...article} />
        <Article {...article} />
      </div>
    </div>
  );
}

export default App;
