'use client'

import cn from 'clsx'
import { toastStyle } from 'config/toast.config'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'

import style from './style.module.scss'

export const Contact = () => {
	const [email, setEmail] = useState<string>('')
	const [tel, setTel] = useState<string>('')

	const [loading, setLoading] = useState<boolean>(false)

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (!email || !email.includes('@') || tel.length < 10) {
			alert('Заповніть всі поля')
			return
		}

		setLoading(true)

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: email, tel: tel })
			})

			if (!response.ok) {
				console.error('Failed to send email')

				toast.error('Виникла помилка відправки', toastStyle)
				return
			}

			setEmail('')
			setTel('')
			toast.success('Повідомлення відправлено', toastStyle)
		} catch (error) {
			console.error(error)
			toast.error('Виникла помилка відправки', toastStyle)
		} finally {
			setLoading(false)
		}
	}

	return (
		<section
			className={style.contact}
			id='contact'
		>
			<div className={cn('container', style.contact__container)}>
				<div className={style.contact__inner}>
					<p className={style.contact__text}>Дізнайтеся як RestOn може допомогти вашому закладу</p>

					<div className={style.contact__tlt}>
						<h3 className={style.contact__title}>Залиште заявку, і ми зв'яжемося з вами</h3>

						<div className={style.contact__icon}>
							<Image
								src='/icons/contact-icon.svg'
								width={34}
								height={34}
								alt='icon'
							/>
						</div>
					</div>

					<div className={style.contact__form}>
						<form action=''>
							<div className={style.contact__group}>
								<input
									className={style.contact__input}
									type='email'
									placeholder='Email*'
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
								<input
									className={style.contact__input}
									type='tel'
									placeholder='+38 (___) ___ __ __*'
									// pattern='[+]{1}[0-9]{2} [(]{1}[0-9]{3}[)]{1} [0-9]{3} [0-9]{2} [0-9]{2}'
									maxLength={15}
									minLength={9}
									value={tel}
									onChange={e => setTel(e.target.value)}
									required
								/>
							</div>

							<button
								className={style.contact__btn}
								disabled={loading}
								onClick={handleClick}
							>
								{loading ? 'Відправка...' : 'Відправити'}
							</button>
						</form>
					</div>

					<div className={style.contact__accept}>
						<sup>*</sup> Обов'язкові поля
					</div>
				</div>
			</div>
		</section>
	)
}
