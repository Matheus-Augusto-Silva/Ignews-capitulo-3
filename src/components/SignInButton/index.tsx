import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
	const [session] = useSession();
	
	return session ? (
		<button className={styles.signInButton} type="button">
			<FaGithub color="#04d361" />
				Matheus Silva
			<FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()}/>
		</button>
	) : (
		// TODO: add key to onclick
			<button className={styles.signInButton} onClick={() => signIn('github')} type="button">
			<FaGithub color="#eba417" />
				Sign in with GitHub

		</button>
	)
}