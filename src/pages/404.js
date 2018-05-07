import React, { PureComponent } from 'react'
import Banner, { Title, Description } from '../components/Banner'
import Flex from '../components/Flex'
import Link from 'gatsby-link'

class NotFoundPage extends PureComponent {
	componentWillMount() {
		this.props.setMeta({
			title: 'Page not found',
			description: 'You seem lost. Visit https://nelo.is, maybe?'
		})
	}

	render() {
		return (
			<Flex alignItems="center" flex="1 1 auto" justifyContent="center">
				<Banner>
					<Title>Page not found</Title>
					<Description>
						You seem lost. Go back <Link href="/">home</Link>, maybe?
					</Description>
				</Banner>
			</Flex>
		)
	}
}

export default NotFoundPage
