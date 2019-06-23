import styled from 'styled-components'

const Wrapper = styled.div`
`

export default (props) => {
  const {rightColumn, leftColumn} = props

  return (
      <Wrapper className="c-col-2">
        <Wrapper className="c-col-left">
          {rightColumn[0]['@id']}
        </Wrapper>
        <Wrapper className="c-col-right">
          {leftColumn[0]['@id']}
        </Wrapper>  
      </Wrapper>
    )
}