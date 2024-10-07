export default function Resume() {
    return (
      <div>
        <h1>Resume Page</h1>
        <div className="resume-container">
                    <h1 className="resume-name">Andrew Biron</h1>
                    <div className="multicolumn">
                        <p className="resume-contact">
                            Designer/Developer<br/>
                             Ottawa ON.<br/>
                             (613)791-7249<br/>
                            andrewbiron@outlook.com 
                            
                        </p>
                        <p></p> 
                        <p className="resume-titles">Objective</p>
                        <p className="info-card">To acquire a full-time Web Development position where I can use my web development, user experience, and design skills.</p>
                        <p className="resume-titles">EDUCATION</p>
                        <p className="info-card"> 
                            <strong>Full Stack Web Development</strong> <br/> Certificate, Carleton University (May 2024)<br/>
                            <strong>Information Technology-Interactive Multimedia & Design</strong> <br/> Bachelors Degree, Carleton University (2014-2019)<br/>
                            <strong>Business Administration-Marketing</strong> <br/> Nipissing University (2008-2009)<br/>
                            <strong>Business Administration-Marketing</strong> <br/> Advance Diploma, Canadore College (2003-2006)<br/>
                          

                        </p>
                        <p className="resume-titles">WORK</p>
                        <p className="info-card">
                        <strong>Communications Officer</strong> <br/> Apatisiiwin Skills Development (August 2024-Current)<br/> 
                            <strong>Financial Analyst</strong> <br/> Tawich Development Corporation (May-September 2019)<br/>
                            <strong>Project Manager</strong> <br/> Tawich Development Corporation (March-August 2014)<br/>
                            <strong>Proprietor</strong> <br/> Neh T-Bone (2012-2014)<br/>
                            <strong>Project Manager</strong> <br/> Tawich Construction Inc. (2010-2012)<br/>
                        </p>
                        <p className="resume-titles">SKILLS</p>
                        <p className="info-card">Adobe Creative Suite Applications, Unity 3D, Microsoft Office<br/>
                            Object-Relational Mapping (ORM), Model-View-Controller (MVC), mySql2, Nodejs, Express, Sequelize, <br/>
                            Object-Document Mapping (ODM), MongoDB, Mongoose, NoSQL, MERN
                            React, Bootstrap, Handlebars<br/>
                          
                        </p>
                    </div>
                </div>
                <a className="download-link" download="andrewBiron_Resume.pdf" href="/public/images/andrewBiron_Resume.pdf">Download Resume</a>
      </div>
    );
  }