import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from './navigation/Navigation'

import style from './style.module.scss'

export const Header = () => {
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.header__inner}>
					<Link
						href='/'
						className={style.header__logo}
					>
						<Image
							src='/logo.svg'
							width={132}
							height={48}
							alt='Reston'
						/>
					</Link>

					<Navigation />
				</div>
			</div>
		</header>
	)
}
