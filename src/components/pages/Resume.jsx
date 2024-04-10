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
                            <strong>Full Stack Web Development</strong> <br/> Carleton University (Current)<br/>
                            <strong>Information Technology-Interactive Multimedia & Design</strong> <br/> Carleton University (2014-2019)<br/>
                            <strong>Business Administration-Marketing</strong> <br/> Nipissing University (2008-2009)<br/>
                            <strong>Business Administration-Marketing</strong> <br/> Canadore College (2003-2006)<br/>
                          

                        </p>
                        <p className="resume-titles">WORK</p>
                        <p className="info-card"><strong>Financial Analyst</strong> <br/> Tawich Development Corporation (May-September 2019)<br/>
                            <strong>Project Manager</strong> <br/> Tawich Development Corporation (March-August 2014)<br/>
                            <strong>Proprietor</strong> <br/> Neh T-Bone (2012-2014)<br/>
                            <strong>Project Manager</strong> <br/> Tawich Construction Inc. (2010-2012)<br/>
                            <strong>Interim Economic Development Officer</strong> <br/> Cree Nation of Wemindji (2006-2007)<br/> 
                        </p>
                        <p className="resume-titles">SKILLS</p>
                        <p className="info-card">Adobe Creative Suite Applications, Unity 3D, Microsoft Office<br/>
                            Object-Relational Mapping (ORM), Model-View-Controller (MVC), mySql2, Nodejs, Express, Sequelize, <br/>
                            Object-Document Mappinng (ODM), MongoDB, Mongoose, NoSQL, MERN
                            React, Bootstrap, Handlebars<br/>
                          
                        </p>
                    </div>
                </div>
                <a className="download-link" download="andrewBiron_resume.pdf" href="/public/images/andrewBiron_resume.pdf">Download Resume</a>
      </div>
    );
  }