import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "@/styles/colors";

const ClipCardWrapper = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 10px 20px;
    width: 100%;
    text-align: center;
    margin: 10px auto;
    cursor: pointer;

    &:hover {
        background-color: ${colors.action};
        color: white;
    }
`;

function ClipCard({ text }) {
    return <ClipCardWrapper>{text}</ClipCardWrapper>;
}

ClipCard.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ClipCard;
