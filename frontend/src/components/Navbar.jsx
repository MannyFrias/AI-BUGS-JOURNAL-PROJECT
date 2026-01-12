import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    	<nav className="navbar">
          <div className="navbar-brand">
          <link to="/">📔 My Smart Journal</link>
          </div>
				<div className="navbar-links">
				<Link to='/'>Home</Link>
				<Link to="/new">New Entry</Link>
				<Link to="/summary">Weekly Summary</Link>
				</div>
      </nav>
  )
}

export default Navbar; 