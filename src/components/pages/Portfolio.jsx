import CardBody from "../UI/CardBody";

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <p>
            All about the work!
        </p>
        <div className="card-container">
          <CardBody 
            title={"Music eShop"} 
            image={'/public/images/musicEshop.png'} 
            repo={"View Repository"} 
            deployedApp={"View App"}/>

          <CardBody 
            title={"Global Glimpse Voyage"} 
            image={'/public/images/unsplashImageChange.png'} 
            repo={"View Repository"} 
            deployedApp={"View App"}/>

          <CardBody 
            title={"Full-Stack Blog"} 
            image={'/public/images/fullStack_1.png'} 
            repo={"View Repository"} 
            deployedApp={"View App"}/>
        
          <CardBody 
            title={"JATE"} 
            image={'/public/images/Jate.png'} 
            repo={"View Repository"} 
            deployedApp={"View App"}/>

          <CardBody 
            title={"Note Taker"} 
            image={'/public/images/note_taker_splash.png'} 
            repo={"View Repository"} 
            deployedApp={"View App"}/>

          <CardBody 
            title={"Workday Scheduler"} 
            image={'/public/images/Work-Day-Scheduler.png'} 
            repo={"View Repository"} 
            deployedApp={"View App"}/>

         </div>

      </div>
    );
  }