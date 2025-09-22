import style from '../style.module.scss'

export const Navigation = () => {
	return (
		<nav className={style.header__nav}>
			<a
				href='#'
				className={style.header__link}
			>
				Як працює?
			</a>
			<a
				href='#'
				className={style.header__link}
			>
				Можливості
			</a>
			<a
				href='#'
				className={style.header__link}
			>
				Переваги
			</a>
			<a
				href='#'
				className={style.header__link}
			>
				Інтеграції
			</a>
			<a
				href='#'
				className={style.header__link}
			>
				Поширені запитання
			</a>
		</nav>
	)
}
