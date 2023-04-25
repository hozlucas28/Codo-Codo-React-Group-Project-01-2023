import { useContext } from 'react'

import TEXTS from '../../constants/TEXTS.js'
import LINKS from '../../constants/LINKS.js'

import { GroupContext } from '../../contexts/GroupContext.jsx'

const Footer = () => {
	const { name } = useContext(GroupContext)

	return (
		<footer>
			<p>
				{TEXTS.footer.copyright} {name}
			</p>
			<a
				href={LINKS.repository}
				rel='noreferrer'
				target='_blank'
			>
				{TEXTS.footer.sourceCode}
			</a>
		</footer>
	)
}

export default Footer
