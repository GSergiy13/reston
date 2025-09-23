import { Layout } from 'components/layout/Layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'

const InterFont = Inter({
	variable: '--font-inter',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'AI чат-бот для закладів який консультує, радить, підвищує продажі та зберігає гостей',
	description:
		'Створіть спеціального AI Чат-бота для свого веб-сайту та запропонуйте своїм гостям сучасний спосіб взаємодії з вашим закладом, надайте їм миттєву підтримку, консультацію та підвищте загальну задоволеність відвідувачів'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${InterFont.variable}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
