import cn from 'clsx'

import { QuestionsData } from './question.data'

import style from './style.module.scss'

export const Question = () => {
	return (
		<section className={style.question}>
			<div className='container'>
				<h2 className={cn('title', style.question__title)}>Поширені запитання про чат-бот AI</h2>

				<div className={style.question__inner}>
					{QuestionsData.map(item => {
						return (
							<div
								key={item.id}
								className={style.question__item}
							>
								<div className={style.question__head}>
									<h3 className={style.question__item_title}>{item.title}</h3>
									<button
										className={style.question__arrow}
										type='button'
									></button>
								</div>
								<div className={style.question__body}>
									<div className={style.question__body_wrapper}>{item.description}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
