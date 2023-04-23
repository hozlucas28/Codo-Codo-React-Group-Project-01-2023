import { createContext } from 'react'

const groupThree = {
	id: 'G3-CLHCM',
	name: 'React Innovators',
	members: [
		{
			name: 'Lucas Nahuel Hoz',
			photo: 'https://avatars.githubusercontent.com/u/88015479?v=4',
			socialNetworks: {
				email: 'hozlucas28@gmail.com',
				gitHub: 'https://github.com/hozlucas28',
				linkedIn: 'https://www.linkedin.com/in/lucashoz/',
			},
			isLeader: true,
		},
		{
			name: 'Fari;a Gladis',
			photo: 'https://avatars.githubusercontent.com/u/96497035?v=4',
			socialNetworks: {
				email: 'lalyfar@hotmail.com',
				gitHub: 'https://github.com/GladisFarina',
				linkedIn: 'https://www.linkedin.com/in/gladis-fariña-66a879238',
			},
			isLeader: false,
		},
		{
			name: 'Acevedo Carlos',
			photo: 'XXX', // TODO
			socialNetworks: {
				email: 'carlosacevedo1@yahoo.com',
				gitHub: 'XXX', // TODO
				linkedIn: 'XXX', // TODO
			},
			isLeader: false,
		},
		{
			name: 'Francisco Carlos',
			photo: 'https://avatars.githubusercontent.com/u/86804652?v=4',
			socialNetworks: {
				email: 'calitoozzy@gmail.com',
				gitHub: 'https://github.com/calitoozzy',
				linkedIn: 'XXX', // TODO
			},
			isLeader: false,
		},
		{
			name: 'Casasola Marisol',
			photo: 'https://avatars.githubusercontent.com/u/109025352?v=4',
			socialNetworks: {
				email: 'mmarisol.casasola97@gmail.com',
				gitHub: 'https://github.com/Mmarisolcasasola97',
				linkedIn: 'XXX', // TODO
			},
			isLeader: false,
		},
	],
}

export const GroupContext = createContext()

export const GroupProvider = ({ children }) => {
	return <GroupContext.Provider value={groupThree}>{children}</GroupContext.Provider>
}
