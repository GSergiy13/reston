import { v4 as uuid } from 'uuid'

import type { ListItem } from '@/ui/customlist/customlist.type'

export const MessagingListData: ListItem[] = [
	{
		id: uuid(),
		icon: '/icons/messaging/messaging-1.svg',
		text: 'Гості можуть бронювати та ставити запитання через FB Messenger / Instagram'
	},
	{
		id: uuid(),
		icon: '/icons/messaging/messaging-2.svg',
		text: 'RestOn AI керує всім у режимі реального часу — менеджер не потрібен'
	}
]
