import cn from 'clsx'
import Image from 'next/image'

import style from './style.module.scss'

export const Integrations = () => {
	return (
		<section className={style.integrations}>
			<div className='container'>
				<h2 className={cn('title', style.integrations__title)}>Інтеграції</h2>

				<div className={style.integrations__inner}>
					<div className={style.integrations__row}>
						<div className={style.integrations__item}>
							<div className={style.integrations__head}>
								<div className={style.integrations__icon}>
									<Image
										src='/icons/integration/integration-1.svg'
										width={32}
										height={32}
										alt='POS'
									/>
								</div>
								<div className={style.integrations__tit}>POS-системи</div>
							</div>
							<ul className={style.integrations__list}>
								<li>Повна інтеграція з Syrve (можливість додати інші POS)</li>
								<li>Отримання актуального меню, цін, інгредієнтів, банкетів, резервів</li>
								<li>Синхронізація замовлень, бронювань, статусів</li>
							</ul>
						</div>
						<div className={style.integrations__item}>
							<div className={style.integrations__head}>
								<div className={style.integrations__icon}>
									<Image
										src='/icons/integration/integration-2.svg'
										width={32}
										height={32}
										alt='POS'
									/>
								</div>
								<div className={style.integrations__tit}>Платіжні системи</div>
							</div>
							<ul className={style.integrations__list}>
								<li>LiqPay, Fondy, інші API</li>
								<li>Підтримка онлайн-оплати та накладеного платежу</li>
								<li>Автоматичне формування чека</li>
							</ul>
						</div>
						<div className={style.integrations__item}>
							<div className={style.integrations__head}>
								<div className={style.integrations__icon}>
									<Image
										src='/icons/integration/integration-3.svg'
										width={32}
										height={32}
										alt='POS'
									/>
								</div>
								<div className={style.integrations__tit}>Соціальні мережі та месенджери </div>
							</div>
							<ul className={style.integrations__list}>
								<li>Instagram Direct, Facebook Messenger, WhatsApp</li>
								<li>Ведення розмови з гостем у звичному для нього мессенджері</li>
								<li>Можливість зберігати профіль гостя з Facebook/ Instagram</li>
							</ul>
						</div>
					</div>
					<div className={style.integrations__row}>
						<div className={style.integrations__item}>
							<div className={style.integrations__head}>
								<div className={style.integrations__icon}>
									<Image
										src='/icons/integration/integration-4.svg'
										width={32}
										height={32}
										alt='POS'
									/>
								</div>
								<div className={style.integrations__tit}>CRM + Аналітика</div>
							</div>
							<ul className={style.integrations__list}>
								<li>Власна CRM-система</li>
								<li>
									Підключення до вашої CRM-системи (можливість інтеграції з різними системами)
								</li>
								<li>Збереження та аналіз історії запитів і замовлень</li>
								<li>Facebook Pixel / Google Tag Manager для реклами</li>
							</ul>
						</div>
						<div className={style.integrations__item}>
							<div className={style.integrations__head}>
								<div className={style.integrations__icon}>
									<Image
										src='/icons/integration/integration-5.svg'
										width={32}
										height={32}
										alt='POS'
									/>
								</div>
								<div className={style.integrations__tit}>AI-сервіси</div>
							</div>
							<ul className={style.integrations__list}>
								<li>GPT-4 + GPT-Vision для розуміння запитів і фото</li>
								<li>Векторний пошук по запитаннях (Qdrant)</li>
								<li>Автоматичне розпізнавання мови</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
