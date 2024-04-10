
/* eslint-disable react/prop-types */

export default function CardBody({title, image, description, repo, deployedApp}) {
  console.log(title, image, repo, deployedApp)
    return (
      <div className="card" style={{width: '20rem'}}>
          <img src={image} className="card-img-top" alt="Project Image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
         
          <div className="card-body text-center">
            <a href={repo} target="_blank" rel="noreferrer" className="card-link btn btn-outline-info mb-3">View Repository</a>
            <a href={deployedApp} target="_blank" rel="noreferrer" className="card-link btn btn-outline-info mb-3" style={{margin: "-5px"}}>View Application</a>
          </div>
      </div>
    );
  }