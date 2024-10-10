import styled from 'styled-components/native';

const Center = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 32px;
`;

export const App = () => {
	return (
		<Center>
			<Title> Hello, World! </Title>
		</Center>
	);
};
