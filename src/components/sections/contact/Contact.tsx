import cn from 'clsx'
import Image from 'next/image'

import style from './style.module.scss'

export const Contact = () => {
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
									required
								/>
								<input
									className={style.contact__input}
									type='tel'
									placeholder='+38 (___) ___ __ __*'
									required
								/>
							</div>

							<button
								className={style.contact__btn}
								type='submit'
							>
								Відправити
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
