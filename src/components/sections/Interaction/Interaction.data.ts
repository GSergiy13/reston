import { v4 as uuid } from 'uuid'

import type { ListItem } from '@/ui/customlist/customlist.type'

export const InteractionData: ListItem[] = [
	{
		id: uuid(),
		icon: '/icons/interaction/interaction-1.svg',
		text: 'Розуміє контекст і наміри, пропонуючи релевантні відповіді.'
	},
	{
		id: uuid(),
		icon: '/icons/interaction/interaction-2.svg',
		text: 'Ніякої незручної взаємодії, подібної до ботів – лише плавне спілкування.'
	},
	{
		id: uuid(),
		icon: '/icons/interaction/interaction-3.svg',
		text: 'Ваші гості навіть не зрозуміють, що спілкуються з ШІ.'
	}
]
