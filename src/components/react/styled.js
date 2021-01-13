import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
header h1{
  font-family: 'Lobster', cursive;
}
// p{
//   font-family: cursive;
// }
`
const Scroll = styled.div`
  grid-column: 1 / 4;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  background: #111;
  padding: 2rem;
`

export { GlobalStyle, Scroll }