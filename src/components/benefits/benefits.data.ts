import { v4 as uuid } from 'uuid'

interface Benefit {
	id: string
	icon: string
	text: string
}

export const BenefitsData: Benefit[] = [
	{
		id: uuid(),
		icon: '/icons/benefits/benefits-1.svg',
		text: 'Економте час зі штучним інтелектом'
	},
	{
		id: uuid(),
		icon: '/icons/benefits/benefits-2.svg',
		text: 'Обробляйте бронювання та передзамовлення страв без зусиль людини'
	},
	{
		id: uuid(),
		icon: '/icons/benefits/benefits-3.svg',
		text: 'Відповідайте на різного роду запити гостей, не відволікаючись від роботи'
	},
	{
		id: uuid(),
		icon: '/icons/benefits/benefits-4.svg',
		text: 'Стежте за своїми резервами, не поворухнувши пальцем'
	}
]
