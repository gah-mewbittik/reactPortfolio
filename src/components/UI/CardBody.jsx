
/* eslint-disable react/prop-types */

export default function CardBody({title, image, description, repo, deployedApp}) {
  console.log(title, image, repo, deployedApp)
    return (
      <div className="card" style={{width: '20rem'}}>
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
         
          <div className="card-body">
            <a href={repo} target="_blank" rel="noreferrer" className="card-link">View Repository</a>
            <a href={deployedApp} target="_blank" rel="noreferrer" className="card-link">View App</a>
          </div>
      </div>
    );
  }