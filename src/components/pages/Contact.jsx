export default function Contact() {
    return (
      <div>
        <h1>Contact Page</h1>
        <h3>Let's create together...</h3>
        <p>We'll learn our coffee ways!</p>
        <form action="mailto:andrewbiron@outlook.com" method="GET">
          <input type="text" required name="name" placeholder="Enter your full name"></input>
          <input type="email" required name="email" placeholder="Enter Email"></input>
          <textarea required name="body" placeholder="Enter message HERE"></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </div>
    );
  }