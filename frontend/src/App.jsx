import tw from 'twin.macro'
const StyledHeader = tw.p`border border-sky-500 p-10`

function App() {

  return (
    <StyledHeader className="text-3xl font-bold text-center">
      Hello world!
    </StyledHeader>
  )

}

export default App
