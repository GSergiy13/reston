'use client'

import type { ReactNode } from 'react'

import { Header } from './header/Header'

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	)
}
