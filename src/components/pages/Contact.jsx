export default function Contact() {
    return (
      <div>
        <h1>Contact Page</h1>
        <h3>Let us create together...</h3>
        <p>We will learn our coffee ways!</p>
        <form action="mailto:andrewbiron@outlook.com" method="GET">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" style={{ height: '200px' }} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
          <button className="btn btn-outline-primary" type="submit">Submit Message</button>
        </form>
      </div>
    );
  }