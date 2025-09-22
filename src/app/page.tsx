'use client'

import { Interaction } from 'components/Interaction/Interaction'
import { Advantages } from 'components/advantages/Advantages'
import { Benefits } from 'components/benefits/Benefits'
import { Contact } from 'components/contact/Contact'
import { Hero } from 'components/hero/Hero'
import { Integrations } from 'components/integrations/Integrations'
import { Messaging } from 'components/messaging/Messaging'
import { Opportunities } from 'components/opportunities/Opportunities'
import { Products } from 'components/products/Products'
import { Question } from 'components/question/Question'
import { Requests } from 'components/requests/Requests'
import { Workflow } from 'components/workflow/Workflow'

export default function Home() {
	return (
		<>
			<Hero />
			<Benefits />
			<Requests />
			{/* <Partners /> */}
			<Messaging />
			<Workflow />
			<Interaction />
			<Opportunities />
			<Advantages />
			<Integrations />
			<Question />
			<Products />
			<Contact />
		</>
	)
}
