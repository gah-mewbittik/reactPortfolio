import CardBody from "../UI/CardBody";

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <p>
            All about the work!
        </p>

        <CardBody 
          title={"Music eShop"} 
          image={'/public/images/iconLogo.png'} 
          repo={"View Repository"} 
          deployedApp={"View App"}/>

        <CardBody 
          title={"Global Glimpse Voyage"} 
          image={'/public/images/iconLogo.png'} 
          repo={"View Repository"} 
          deployedApp={"View App"}/>

        <CardBody 
          title={"Full-Stack Blog"} 
          image={'/public/images/iconLogo.png'} 
          repo={"View Repository"} 
          deployedApp={"View App"}/>
       
       <CardBody 
          title={"JATE"} 
          image={'/public/images/iconLogo.png'} 
          repo={"View Repository"} 
          deployedApp={"View App"}/>

        <CardBody 
          title={"Note Taker"} 
          image={'/public/images/iconLogo.png'} 
          repo={"View Repository"} 
          deployedApp={"View App"}/>

        <CardBody 
          title={"Workday Scheduler"} 
          image={'/public/images/iconLogo.png'} 
          repo={"View Repository"} 
          deployedApp={"View App"}/>

      </div>
    );
  }