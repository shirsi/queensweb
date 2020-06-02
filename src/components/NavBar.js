import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavBar() {
	const pathname = window.location.pathname;

	const path = pathname === "/" ? "home" : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu size="massive" color="teal" inverted>
			<Menu.Menu position="right">
				<Menu.Item
					name="home"
					active={activeItem === "home"}
					onClick={handleItemClick}
					as={Link}
					to="/"
				/>
				<Menu.Item
					name="about"
					active={activeItem === "about"}
					onClick={handleItemClick}
					as={Link}
					to="/about"
				/>
				<Menu.Item
					name="team"
					active={activeItem === "team"}
					onClick={handleItemClick}
					as={Link}
					to="/team"
				/>
				<Menu.Item
					name="contact"
					active={activeItem === "contact"}
					onClick={handleItemClick}
					as={Link}
					to="/contact"
				/>
			</Menu.Menu>
		</Menu>
	);
}

export default NavBar;
