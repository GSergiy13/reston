'use client'

import type { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { Header } from './header/Header'

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			{/* <Footer /> */}

			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					error: {
						duration: 12000
					},
					success: {
						duration: 3000
					}
				}}
			/>
		</>
	)
}
