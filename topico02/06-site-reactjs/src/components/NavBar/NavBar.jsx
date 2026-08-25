
// const NavBar = () => {/*Arrow Function*/
export default function NavBar(){
  return (
    <nav className="nav_container">
        <div className="nav_logo">
          <a href="#">
            <img src="/img/appLogo.svg" className="nav_logo_img" /></a>
        </div>
        <div className="nav_links">
          <a href="#">Dashboard</a><a href="#">Log in</a
          ><a href="#">Register</a>
        </div>
      </nav>
  )
}

{/* export default NavBar */}
