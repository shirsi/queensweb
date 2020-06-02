import React from "react";
import { Item, ItemDescription } from "semantic-ui-react";

const Culture = () => (
	<Item.Group>
		<Item>
			<Item.Image size="small" src="/images/wireframe/image.png" />

			<Item.Content>
				<Item.Header>Empowering Others</Item.Header>
				<Item.Description>
					<p>
						The ability to convey confidence in employees’ ability to be
						successful, especially at challenging new tasks; delegating
						significant responsibility and authority; allowing employees freedom
						to decide how they will accomplish their goals and resolve issues.
					</p>
				</Item.Description>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="small" src="/images/wireframe/image.png" />

			<Item.Content>
				<Item.Header>Managing Change</Item.Header>
				<ItemDescription>
					<p>
						The ability to demonstrate support for innovation and for
						organizational changes needed to improve the organization’s
						effectiveness; initiating, sponsoring, and implementing
						organizational change; helping others to successfully manage
						organizational change.
					</p>
				</ItemDescription>
			</Item.Content>
		</Item>

		<Item>
			<Item.Content>
				<Item.Image size="small" src="/images/wireframe/image.png" />
				<Item.Header>Developing Others</Item.Header>
				<ItemDescription>
					<p>
						The ability to delegate responsibility and to work with others and
						coach them to develop their capabilities.
					</p>
				</ItemDescription>
			</Item.Content>
		</Item>

		<Item>
			<Item.Content>
				<Item.Image size="small" src="/images/wireframe/image.png" />
				<Item.Header>Building Collaborative Relationships</Item.Header>
				<ItemDescription>
					<p>
						The ability to develop, maintain, and strengthen partnerships with
						others inside or outside the organization who can provide
						information, assistance, and support.
					</p>
				</ItemDescription>
			</Item.Content>
		</Item>

		<Item>
			<Item.Content>
				<Item.Image size="small" src="/images/wireframe/image.png" />
				<Item.Header>Forward Thinking</Item.Header>
				<ItemDescription>
					<p>
						The ability to anticipate the implications and consequences of
						situations and take appropriate action to be prepared for possible
						contingencies.
					</p>
				</ItemDescription>
			</Item.Content>
		</Item>

		<Item>
			<Item.Content>
				<Item.Image size="small" src="/images/wireframe/image.png" />
				<Item.Header>Technical Expertise</Item.Header>
				<ItemDescription>
					<p>
						The ability to demonstrate depth of knowledge and skill in a
						technical area.
					</p>
				</ItemDescription>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default Culture;
