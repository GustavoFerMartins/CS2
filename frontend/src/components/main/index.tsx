import * as S from "./styles";
import Container from "../container";
import DivHeader from "../heading";
import Footer from "../footer";
import ThreeScene from "../3d";
import ContentArea from "../contentarea";

const Main = ({
    title = "CS2 STATS",
    description = "Acompanhe suas estatísticas de CS2 em partidas Competitivas e Premier",
}) => (
    <ContentArea>
        <DivHeader></DivHeader>
        <Container>
            <S.Wrapper>
                <S.Title>{title} </S.Title>
                <ThreeScene />
                <S.Description>{description}</S.Description>
            </S.Wrapper>
        </Container>

        <Footer></Footer>
    </ContentArea>
);

export default Main;
