import { v4 as uuid } from 'uuid'

import type { ListItem } from '@/ui/customlist/customlist.type'

export const BenefitsData: ListItem[] = [
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
