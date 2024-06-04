

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
       
          <div className="col-md-6 ">
            <p>&copy; 2024 <strong>Andrew Biron</strong> All rights reserved. </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-end">
            <li className="list-inline-item "><a href="https://biron.myportfolio.com"><img className="linkIconsPort " src="/images/personalLogo_Designs.png" /></a></li>
              <li className="list-inline-item "><a href="https://github.com/gah-mewbittik"><img className="linkIcons " src="/images/github-mark.png" /></a></li>
              <li className="list-inline-item "><a href="https://www.linkedin.com/in/andrew-biron-201b51294/"><img className="linkIconsLINK " src="/images/linkedin-icon-512x512-dhkaf9ri.png" /></a></li>
              <li className="list-inline-item "><a href="https://twitter.com/Gah_Mewbittik"><img className="linkIconsX " src="/images/twitter_x_new_logo_square_x_icon_256075.png" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;