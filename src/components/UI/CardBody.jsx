
/* eslint-disable react/prop-types */

export default function CardBody({title, image, repo, deployedApp}) {
  console.log(title, image, repo, deployedApp)
    return (
      <div className="card" style={{width: '20rem'}}>
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
          </div>
         
          <div className="card-body">
            <a href="#" className="card-link">{repo}</a>
            <a href="#" className="card-link">{deployedApp}</a>
          </div>
      </div>
    );
  }