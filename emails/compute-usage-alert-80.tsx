import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Text,
	Button,
	Section,
	Hr,
	Tailwind,
	Row,
	Column,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

export const ComputeUsageAlert80Email = () => (
	<Html>
		<Head />
		<Preview>
			Your project OpenAI Wrapper has used 80% of the free plan's monthly
			compute hour limit
		</Preview>
		<Body>
			<Tailwind>
				<Container className="max-w-2xl mx-auto p-8 font-sans">
					<Img
						src={
							"https://github.com/user-attachments/assets/9f07be04-2f74-4c8a-af1c-36f3c944a884"
						}
						width="120"
						height="36"
						alt="Neon Logo"
						className="mb-16 mx-auto"
					/>
					<Text className="mb-4">
						Your project <strong>OpenAI Wrapper</strong> has used 80% (153.52
						hours) of the free plan's monthly 191.9 compute hour limit.{" "}
						<Link
							href="https://console.neon.tech/app/projects/damp-hall-46561362"
							className="text-[#007BFF]"
						>
							Review your compute usage in the console.
						</Link>
					</Text>
					<Section className="p-6 rounded-lg mb-6 border border-solid border-[#DEDEDE]">
						<Heading as="h2" className="text-xl mb-4 font-normal">
							Compute
						</Heading>
						<Row className="mt-[16px]">
							<Column className="w-[74%]">
								<Text>The total number of compute hours used</Text>
							</Column>
							<Column className="w-[26%]">
								<Text>153.52/191.9h - 80%</Text>
							</Column>
						</Row>

						<div className="w-full bg-gray-300 rounded-full h-2.5">
							<div
								className="bg-blue-600 h-2.5 rounded-full"
								style={{ width: "80%" }}
							></div>
						</div>
					</Section>
					<Text className="mb-4">
						Congrats on your project's growth!{" "}
						<Link
							href="https://console.neon.tech/app/billing#plans"
							className="text-[#007BFF]"
						>
							Consider upgrading to a paid plan
						</Link>{" "}
						to increase available compute hours and keep growing.
					</Text>
					<Text className="mb-4">
						Compute hour usage resets at the beginning of the month. We'll
						notify you if usage reaches 100%.{" "}
						<Link
							href="https://neon.tech/docs/introduction/plans#free-plan"
							className="text-[#007BFF]"
						>
							Learn more about the compute hour limit on the free plan.
						</Link>
					</Text>
					<Section className="text-center my-16">
						<Button
							href="https://console.neon.tech/app/billing#plans"
							className="bg-[#2E2E2E] text-white py-3 px-6 rounded-lg "
						>
							Upgrade
						</Button>
					</Section>

					<Hr className="border-gray-300 my-8" />
					<Text className="text-xs text-[#2E2E2E] mb-4">
						If you need help or have questions,{" "}
						<Link href="https://neon.tech.discord" className="text-[#007BFF]">
							please reach out on Discord
						</Link>
					</Text>
					<Text className="text-xs text-[#2E2E2E]">
						Neon Inc. -{" "}
						<Link href="https://neon.tech" className="text-[#007BFF]">
							neon.tech
						</Link>
					</Text>
					<Text className="text-xs text-[#2E2E2E]">209 Orange Street</Text>
					<Text className="text-xs text-[#2E2E2E]">
						City of Wilmington, County of New Castle, Delaware 19801, USA
					</Text>
				</Container>
			</Tailwind>
		</Body>
	</Html>
);

export default ComputeUsageAlert80Email;
