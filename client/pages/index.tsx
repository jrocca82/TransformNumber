import { useTransform } from "@/hooks/useTransform";
import { Flex, Text, Heading, Input, Button } from "@chakra-ui/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
	const { value, handleSubmit, handleChange, errorMessage, returnValue } =
		useTransform();

	return (
		<Flex
			p="20px"
			justifyContent="center"
			alignItems="center"
			h="100vh"
			flexDirection="column"
		>
			<Heading textAlign="center">
				Convert any decimal to a dollar amount!
			</Heading>
			<Text textAlign="center">
				Input any decimal amount and click "Transform" to see your input in a
				string format.
			</Text>
			<Flex
				width="300px"
				marginY="20px"
				flexDirection="column"
				height="150px"
				justifyContent="space-between"
				alignItems="center"
			>
				<Text fontWeight="bold">Your number:</Text>
				<Input
					width="150px"
					value={value}
					onChange={handleChange}
					type="number"
				/>
				<Button onClick={handleSubmit}>Transform my number!</Button>
				{errorMessage && <Text>{errorMessage}</Text>}
				{returnValue && <Text>{returnValue}</Text>}
			</Flex>
			<Text>
				** For example, given the number 4.56, the output will be "four dollars
				and fifty six cents". **
			</Text>
		</Flex>
	);
};

export default HomePage;
