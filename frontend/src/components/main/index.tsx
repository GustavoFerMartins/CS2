import * as S from './styles'
import Container from '../container'
import Header from '../heading'

const Main = ({
  title = 'CS2 STATS',
  description = 'Acompanhe suas estatísticas de CS2 em partidas Competitivas e Premier'
}) => (
  <Container>
    
    <Header>
    </Header>
   
    <S.Wrapper>
        <S.Background>
        <S.Img src="/bg.png" alt="Background." />
        </S.Background>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    </S.Wrapper>
  </Container>
)

export default Main