import React from "react";
import Culture from "../components/Culture";
import { Button } from "semantic-ui-react";
import TeamMember from "../components/TeamMembers";

export default function Team() {
	return (
		<div>
			<h1>Team</h1>
			<div>
				<TeamMember />
			</div>
			<div>
				<h3>Team Culture</h3>
				<Culture />
			</div>
			<div>
				<h2>Want to Join Us?!</h2>
				<Button color="teal">
					<a href="/contact">Join Now!</a>
				</Button>
			</div>
		</div>
	);
}
