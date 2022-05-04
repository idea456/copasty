import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Clipboard from "@/views/Clipboard";

function App() {
    return (
        <ChakraProvider>
            <Layout>
                <Clipboard />
            </Layout>
        </ChakraProvider>
    );
}

export default App;
