import { v4 as uuid } from 'uuid'

import type { ListItem } from '@/ui/customlist/customlist.type'

export const WorkflowListData_Step1: ListItem[] = [
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-1.svg',
		text: 'Вибрати страви (з урахуванням уподобань та алергій)'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-2.svg',
		text: 'Забронювати столик'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-3.svg',
		text: 'Задати організаційне питання (час роботи, правила, акції)'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-4.svg',
		text: 'Підтримується голосовий та текстовий ввід'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-5.svg',
		text: 'Автоматичне розпізнання мови'
	}
]

export const WorkflowListData_Step2: ListItem[] = [
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-6.svg',
		text: 'Бот аналізує запит і дає розумний зворотній звʼязок'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-7.svg',
		text: 'Формує зрозумілу відповідь на основі меню та контексту'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-8.svg',
		text: 'Виводить фото чи опис страви для підтвердження вибору'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-9.svg',
		text: 'Надсилає кнопку для оформлення замовлення'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-10.svg',
		text: 'Фіксує бронювання столика чи оформлення доставки'
	}
]

export const WorkflowListData_Step3: ListItem[] = [
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-11.svg',
		text: 'Замовлення оформлюється (доставка/самовивіз)'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-12.svg',
		text: 'Бронювання потрапляє у CRM або POS систему'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-13.svg',
		text: 'Гість отримує підтвердження повідомленням'
	}
]

export const WorkflowListData_Step4: ListItem[] = [
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-14.svg',
		text: 'CRM автоматично зберігає історію запитів'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-15.svg',
		text: 'Бот памʼятає улюблені страви, мову, алергії гостя'
	},
	{
		id: uuid(),
		icon: '/icons/workflow/workflow-16.svg',
		text: 'Гостю можна надсилати персональні пропозиції'
	}
]
