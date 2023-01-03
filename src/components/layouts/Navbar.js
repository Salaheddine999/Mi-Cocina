import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation()
    const pathMatchRoute = (route) =>{
        if(route===location.pathname){
            return true
        }
    }


    return (
        <>
        <nav className="uk-navbar-container uk-letter-spacing-small">
            <div className="uk-container">
                <div className="uk-position-z-index" data-uk-navbar>
                    <div className="uk-navbar-left">

                        {/* LOGO */}
                        <Link to={'/'} className="uk-navbar-item uk-logo">MiCocina</Link>
                        
                        <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                        <li className={pathMatchRoute('/') ? 'uk-active': ''}><Link to='/'>Home</Link></li>
                        <li className={pathMatchRoute('/random') ? 'uk-active': ''}><Link to={'/random'}>Random Recipe</Link></li>
                        <li className={pathMatchRoute('/search') ? 'uk-active': ''} ><Link to={'/search'}>Search</Link></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
                        <span data-uk-navbar-toggle-icon></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
              <div className="uk-offcanvas-bar">
                 <Link to={'/'} className="uk-logo">MiCocina</Link>
                 <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 1.2"></button>
                 <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
                    <li className={pathMatchRoute('/') ? 'uk-active': ''}><Link to='/'>Home</Link></li>
                    <li className={pathMatchRoute('/random') ? 'uk-active': ''}><Link to={'/random'}>Random Recipe</Link></li>
                    <li className={pathMatchRoute('/search') ? 'uk-active': ''} ><Link to={'/search'}>Search</Link></li>
                 </ul>
              </div>
            </div>
        </>
     );
}
 
export default Navbar;