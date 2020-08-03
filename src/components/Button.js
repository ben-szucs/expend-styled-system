import React from 'react'
import PropTypes from 'prop-types'
import { Button as Btn } from 'rebass'
import styled, { css } from '@emotion/styled'
import theme from '../styles/theme'
import { darken } from 'polished'

export default function Button(props) {
    const { children, type, fill } = props
    const btnColour = color => {
        switch (color) {
            case 'primary':
                return `${theme.colors.primary}`
            case 'secondary':
                return `${theme.colors.secondary}`
            case 'teritary':
                return `${theme.colors.teritary}`
            case 'light':
                return `${theme.colors.grey100}`
            case 'dark':
                return `${theme.colors.grey300}`
            default:
                return `${theme.colors.primary}`
        }
    }
    return (
        <StyledButton
            {...props}
            fill={fill}
            hexColour={btnColour(type)}
        >
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    fill: PropTypes.string,
    type: PropTypes.string
}

const StyledButton = styled(Btn)`
    display: inline-block;
    border-radius: 6px;
    color: ${({ theme }) => theme.white};
    font-size: 16px;
    font-weight: 800;
    padding: 16px 32px 16px;
    transition: all .1s;
    text-align: center;
    cursor: pointer;
    focus: none;

    ${({theme}) => {
        console.log(theme);
        return
    }};
    
    ${({ fill, theme, hexColour, type }) => {
        if (fill === 'outlined') {
            return `
                color: ${hexColour};
                background-color: ${theme.colors.none};
                border: 2px solid ${hexColour};
                &:hover {
                    color: ${theme.colors.white};
                    background-color: ${hexColour};
                    border-color: ${hexColour};
                }
            `
        } else {
            return `
                color: ${type === 'light' ? theme.colors.grey200 : theme.colors.white};
                background-color: ${hexColour};
                border: 2px solid ${hexColour};
                &:hover {
                    background-color: ${darken(0.05, hexColour)};
                    border-color: ${darken(0.05, hexColour)};
                }
            `
        }
    }}
`
