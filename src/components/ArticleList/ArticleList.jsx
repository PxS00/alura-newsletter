import data from '../../../articles.json'
import Article from '../Article/Article'

const ArticleList = () => {
  return (
    <div className="alura-articles-grid">
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  )
}

export default ArticleList
