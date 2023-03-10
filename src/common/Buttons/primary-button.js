import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: #437EF7;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
    border-radius: 5px;
    font-weight: 600;
    line-height: 20px;
    color: #FFF;
    padding: 10px 0;
    border: none;
`

const PrimaryButton = ({children, className}) => {
    return (
        <Button className={className}>
            {children}
        </Button>
    )
}

export default PrimaryButton