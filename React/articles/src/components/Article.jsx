import "./Article.css";

function Article(props) {
    return (
        <div className="Article">
            <h3>{props.articleName}</h3>
            <p>Author: {props.author}</p>
            <p>Date: {props.date}</p>
        </div>
    )
}

export default Article;