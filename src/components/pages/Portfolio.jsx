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
            image={'/images/musicEshop.png'} 
            description={'Full-stack Application (ORM)'}
            repo={"https://github.com/gah-mewbittik/music-e-shop"} 
            deployedApp={"https://pacific-depths-04321-2c86aabef571.herokuapp.com/"}/>

          <CardBody 
            title={"Global Glimpse Voyage"} 
            image={'/images/unsplashImageChange.png'} 
            description={'Front-end Application (+3 APIs)'}
            repo={"https://github.com/gah-mewbittik/SAM-Project-1"} 
            deployedApp={"https://gah-mewbittik.github.io/SAM-Project-1/"}/>

          <CardBody 
            title={"Full-Stack Blog"} 
            image={'/images/fullStack_1.png'} 
            description={'Full-stack Application (ORM)'}
            repo={"https://github.com/gah-mewbittik/full-stack-blog"} 
            deployedApp={"https://pacific-meadow-34307-80829f509aa3.herokuapp.com/"}/>
        
          <CardBody 
            title={"JATE"} 
            image={'/images/Jate.png'} 
            description={'Progressive Web App (PWA)'}
            repo={"https://github.com/gah-mewbittik/jate"} 
            deployedApp={"https://jate-o6j6.onrender.com"}/>

          <CardBody 
            title={"Note Taker"} 
            image={'/images/note_taker_splash.png'} 
            description={'Front-end Application'}
            repo={"https://github.com/gah-mewbittik/note-taker"} 
            deployedApp={"https://young-retreat-20337-4ffcc9d0add4.herokuapp.com/"}/>

          <CardBody 
            title={"Workday Scheduler"} 
            image={'/images/Work-Day-Scheduler.png'} 
            description={'Front-end Application'}
            repo={"https://github.com/gah-mewbittik/Wok-Day-Scheduler"} 
            deployedApp={"https://gah-mewbittik.github.io/Wok-Day-Scheduler/"}/>

         </div>

      </div>
    );
  }