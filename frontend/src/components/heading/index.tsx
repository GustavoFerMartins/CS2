import React, { useState } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import * as S from "./styles";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
            <S.StyledHeader>
                <S.HeadBar>
                    <S.Logo src="./favicon.ico" alt="Logo" />
                    <S.NavTexts isOpen={isMenuOpen}>
                        <S.Text href="http://google.com" target="blank_">
                            Home
                        </S.Text>
                        <S.Text>News</S.Text>
                        <S.Text>Players</S.Text>
                        <S.Text>Teams</S.Text>
                    </S.NavTexts>
                    <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </S.Hamburger>
                </S.HeadBar>
            </S.StyledHeader>
        </StyleSheetManager>
    );
};

export default Header;
