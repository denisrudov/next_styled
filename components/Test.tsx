import React from 'react'
import styled from 'styled-components'
import { IS_DEV } from '../data/constants'

const Wrapper = styled.div``

const Test = () => {
    return <Wrapper>{IS_DEV ? 'Development' : 'Production'}</Wrapper>
}

export default Test
