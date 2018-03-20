import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Wrapper from '../Wrapper'
import { transparentize } from 'polished'

export const BannerContainer = styled.div`
  color: ${props => props.theme.text};
  display: flex;
  margin-top: -7em;
  opacity: 0.9;
  padding-top: 8em;
  text-align: center;
  z-index: 0;
`

export const Title = styled.h1`
  font-size: 2.25em;
  line-height: 1.25;
  margin: 0;
`

export const Subtitle = styled.h2`
	color: ${props => props.theme.contrast4};
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
`

export const Description = styled.p`
	color: ${props => props.theme.contrast5};
  font-size: 1.15em;
  line-height: 1.5;
  margin: 0 auto 1.5em;
  max-width: 480px;

  & > a {
    border-bottom: ${props => transparentize(0.75, props.theme.text)} solid 1px;
    color: inherit;
    text-decoration: none;

    &:hover, &:focus {
      border-color: ${props => props.theme.primary};
      border-width: 2px;
    }
  }
`

class Banner extends PureComponent {
	render() {
		return (
			<BannerContainer>
				<Wrapper>
					{this.props.children}
				</Wrapper>
			</BannerContainer>
		)
	}
}

export default Banner
