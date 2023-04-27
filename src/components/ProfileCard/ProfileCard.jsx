import TEXTS from '../../constants/TEXTS.js'

import SocialNetworkLink from './SocialNetworkLink.jsx'

import emailIcon from '../../static/social/email-icon.svg'
import gitHubIcon from '../../static/social/gitHub-icon.svg'
import linkedInIcon from '../../static/social/linkedIn-icon.svg'

const ProfileCard = ({ name, photo, socialNetworks, isLeader }) => {
	const title = isLeader ? TEXTS.cardsView.profileCard.header.leader : TEXTS.cardsView.profileCard.header.developer

	return (
		<article>
			<header>
				<img
					src={photo}
					alt={TEXTS.cardsView.profileCard.photo.alt + ` ${name}`}
				/>
				<h2>
					<span>{name}</span>
					<span>{title}</span>
				</h2>
			</header>
			<footer>
				<SocialNetworkLink
					href={socialNetworks.email}
					iconSrc={emailIcon}
					iconAlt={TEXTS.cardsView.profileCard.footer.email.alt + ` ${name}`}
				/>
				<SocialNetworkLink
					href={socialNetworks.gitHub}
					iconSrc={gitHubIcon}
					iconAlt={TEXTS.cardsView.profileCard.footer.gitHub.alt + ` ${name}`}
				/>
				<SocialNetworkLink
					href={socialNetworks.linkedIn}
					iconSrc={linkedInIcon}
					iconAlt={TEXTS.cardsView.profileCard.footer.linkedIn.alt + ` ${name}`}
				/>
			</footer>
		</article>
	)
}

export default ProfileCard
