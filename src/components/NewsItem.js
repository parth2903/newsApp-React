import React from 'react'

const NewsItem = (props)=> {
    let {title, description , imageUrl, newsUrl, author, date} =props;
    return (
      <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://c.ndtvimg.com/2022-06/07938tuo_agnipath-protestsjune-17afp-_625x300_17_June_22.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem