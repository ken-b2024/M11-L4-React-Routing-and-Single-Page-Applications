import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="clearfix">
            <NavLink to='/Home' activeClassName="active">Home</NavLink>
            <Link to='/browse-characters'>Browse</Link>
            <Link to='comics'>Comics</Link>
        </nav>
    )
}
export default NavigationBar