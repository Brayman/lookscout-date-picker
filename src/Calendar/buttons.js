import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../common/Buttons/primary-button'
import SecondaryButton from '../common/Buttons/secondary-button'

const ButtonsStyled = styled.div`
    display: flex;
    flex-direction: row;
    button {
        flex-grow: 1;
        margin-right: 8px;
        &:last-child {
            margin-right: 0;
        }
    }
`



export const Buttons = () => {
  return (
    <ButtonsStyled>
        <SecondaryButton>
            Cancel
        </SecondaryButton>
        <PrimaryButton>
            Continue
        </PrimaryButton>
    </ButtonsStyled>
  )
}
