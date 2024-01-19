import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<ChakraProvider>
		<Component {...pageProps} />
	</ChakraProvider>
);

export default App;
