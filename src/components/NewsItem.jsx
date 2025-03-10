import Image from '../assets/news.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:Image} style={{height:"200px"}}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text"style={{height:"100px"}}>{description?description.slice(0,90):"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nesciunt porro Blanditiis aperiam obcaecati perspiciatis quas possimus"}</p>
    <a href={url} className="btn btn-primary border-success bg-success border-none">Read More</a>
  </div>
</div> 
  )
}

export default NewsItem