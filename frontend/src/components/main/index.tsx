import * as S from "./styles";
import Container from "../container";
import DivHeader from "../heading";
import Footer from "../footer";
import ThreeScene from "../3d";

const Main = ({
    title = "CS2 STATS",
    description = "Acompanhe suas estatísticas de CS2 em partidas Competitivas e Premier",
}) => (
    <>
        <>
            <DivHeader></DivHeader>
            <Container>
                <S.Wrapper>
                    <S.Title>{title} </S.Title>
                    <S.Description>{description}</S.Description>
                </S.Wrapper>
                <ThreeScene />
            </Container>
        </>
        <Footer></Footer>
    </>
);

export default Main;
