import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    height: ${theme.grid.containerheight};
    margin: 0 auto;
  `}
`
