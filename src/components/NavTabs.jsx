/* eslint-disable react/prop-types */
      
      function NavTabs({ currentPage, handlePageChange }) {
        return (<>
          <img className="personal-logo" src='/images/personalLogo_v5.png' />
          <div className="nav-tabs-container">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a 
                  href="#about"
                  onClick={() => handlePageChange('About')}
            
        
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                
        
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                
        
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  
        
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                  RESUME
                </a>
              </li>
            </ul>
          </div>
          </>);
      }
      
      export default NavTabs;