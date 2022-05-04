import React from "react";
import { Container } from "@chakra-ui/react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "@/styles/colors";

const Wrapper = styled(Container)`
    height: 100vh;
    justify-content: center;
    background-color: ${colors.primary};
`;

function Layout({ children }) {
    return (
        <Wrapper maxW="sm" centerContent>
            {children}
        </Wrapper>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Layout;
