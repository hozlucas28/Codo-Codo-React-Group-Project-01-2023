const SocialNetworkLink = ({ href, iconSrc, iconAlt }) => {
	return (
		<a
			href={href}
			rel='noreferrer'
			target='_blank'
		>
			<img
				src={iconSrc}
				alt={iconAlt}
			/>
		</a>
	)
}

export default SocialNetworkLink
