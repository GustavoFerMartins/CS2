import React from "react";

import * as S from "./styles";

type Props = {
    id?: string;
    children: React.ReactNode;
};

const ContentArea: React.FC<Props> = ({ children, id }) => <S.ContentArea id={id}>{children}</S.ContentArea>;

export default ContentArea;
