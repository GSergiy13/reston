'use client'

import { Interaction } from 'components/sections/Interaction/Interaction'
import { Advantages } from 'components/sections/advantages/Advantages'
import { Benefits } from 'components/sections/benefits/Benefits'
import { Contact } from 'components/sections/contact/Contact'
import { Hero } from 'components/sections/hero/Hero'
import { Integrations } from 'components/sections/integrations/Integrations'
import { Messaging } from 'components/sections/messaging/Messaging'
import { Opportunities } from 'components/sections/opportunities/Opportunities'
import { Products } from 'components/sections/products/Products'
import { Question } from 'components/sections/question/Question'
import { Requests } from 'components/sections/requests/Requests'
import { Workflow } from 'components/sections/workflow/Workflow'

export default function HomeClient() {
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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel necessitatibus, vitae aperiam
			repellendus sequi modi hic ipsam atque impedit possimus, temporibus voluptate error molestias?
			Qui repudiandae veritatis minima aliquam?
		</>
	)
}
