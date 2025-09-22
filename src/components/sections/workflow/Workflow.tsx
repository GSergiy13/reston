import cn from 'clsx'

import { CustomList } from '@/ui/customlist/CustomList'

import {
	WorkflowListData_Step1,
	WorkflowListData_Step2,
	WorkflowListData_Step3,
	WorkflowListData_Step4
} from './WorkflowList.data'

import style from './style.module.scss'

export const Workflow = () => {
	return (
		<section className={style.workflow}>
			<div className='container'>
				<h2 className={cn('title', style.workflow__title)}>Як працює чат-бот RestOn AI?</h2>

				<div className={style.workflow__steps}>
					<div className={style.step}>
						<div className={style.step__number}>Крок 1</div>
						<h3 className={style.step__title}>Гість звертається до закладу</h3>
						<p className={style.step__description}>
							Це може бути зроблено через віджет/чат на сайті ресторану, або через Facebook
							Messenger / Instagram дірект на сторінці закладу в соціальних мережах.
						</p>
					</div>

					<div className={style.step}>
						<div className={style.step__number}>Крок 2</div>
						<h3 className={style.step__title}>Гість пише текстом або говорить повідомлення</h3>
						<p className={style.step__description}>
							Наприклад, може ввести повідомлення або сказати голосом:«Хочу щось з курки» або «Маю
							алергію на горіхи, можете, враховуючи це, порекомендувати блюда з вашого меню». Або ж
							гість хоче забронювати стіл, чи замовити страви й під'їхати їх забрати самому або
							оформити доставку.  Наприклад, «Хочу замовити доставку страв із вашого меню, щось із
							м'яса, не гостре, для 2-х осіб, що порекомендуєте?»
						</p>

						{WorkflowListData_Step1 && (
							<CustomList
								items={WorkflowListData_Step1}
								small
							/>
						)}
					</div>

					<div className={style.step}>
						<div className={style.step__number}>Крок 3</div>
						<h3 className={style.step__title}>
							Бот аналізує запит і дає розумний зворотній зв’язок
						</h3>
						<p className={style.step__description}>
							Наприклад, на попередній запит дає відповідь:“Ви шукаєте страви з м’яса, не гострі,
							для 2-х гостей. Ось кілька варіантів, які часто замовляють: - Свинина на грилі з
							овочами — соковите філе, приготовлене на вогні; - Курячі медальйони в вершковому соусі
							— ніжні й абсолютно не гострі; - Картопля по-домашньому — смажена з розмарином
							(ідеально на гарнір);🥔 - Салат “Цезар” із куркою — легкий і поживний. Ці страви
							чудово підійдуть для двох осіб — загальна вага порцій ~1000 г”
						</p>

						{WorkflowListData_Step2 && (
							<CustomList
								items={WorkflowListData_Step2}
								small
							/>
						)}
					</div>

					<div className={style.step}>
						<div className={style.step__number}>Крок 4</div>
						<h3 className={style.step__title}>Гість завершує дію</h3>

						{WorkflowListData_Step3 && (
							<CustomList
								items={WorkflowListData_Step3}
								small
							/>
						)}
					</div>

					<div className={style.step}>
						<div className={style.step__number}>Крок 5</div>
						<h3 className={style.step__title}>Дані зберігаються для наступного візитую</h3>

						{WorkflowListData_Step4 && (
							<CustomList
								items={WorkflowListData_Step4}
								small
							/>
						)}
					</div>
				</div>

				<p className={style.workflow__description}>
					І ще: незалежно від того, звідки гість пише — через сайт, Instagram чи Facebook — бот
					<span>продовжить розмову в єдиному стилі, підтягує його профіль та контекст.</span>
				</p>
			</div>
		</section>
	)
}
