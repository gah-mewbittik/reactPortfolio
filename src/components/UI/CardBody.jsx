
/* eslint-disable react/prop-types */

export default function CardBody({title, image, repo, deployedApp}) {
  console.log(title, image, repo, deployedApp)
    return (
      <>
      <div className="card-body">
        <h1>{title}</h1>
        <img src={image} />
        <p></p>
        <a>{repo}</a><br></br>
        <a>{deployedApp}</a>

      </div>


      </>
    );
  }