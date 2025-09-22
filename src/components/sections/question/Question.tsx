import cn from 'clsx'
import { useState } from 'react'

import { QuestionsData } from './question.data'

import style from './style.module.scss'

export const Question = () => {
	const [activeQuestion, setActiveQuestion] = useState<string | null>(null)

	const toggleQuestion = (id: string) => {
		setActiveQuestion(prev => (prev === id ? null : id))
	}

	return (
		<section className={cn(style.question)}>
			<div className='container'>
				<h2 className={cn('title', style.question__title)}>Поширені запитання про чат-бот AI</h2>

				<div className={style.question__inner}>
					{QuestionsData.map(item => {
						const isActive = activeQuestion === item.id

						return (
							<div
								key={item.id}
								className={cn(style.question__item)}
							>
								<div
									className={style.question__head}
									onClick={() => toggleQuestion(item.id)}
								>
									<h3 className={style.question__item_title}>{item.title}</h3>
									<button
										className={cn(style.question__arrow, { [style.open]: isActive })}
										type='button'
									></button>
								</div>
								<div
									className={cn(style.question__body, {
										[style.open]: isActive
									})}
								>
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
