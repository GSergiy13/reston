import Image from 'next/image'

import { BenefitsData } from './benefits.data'

import style from './style.module.scss'

export const Benefits = () => {
	return (
		<section className={style.benefits}>
			<div className={`container ${style.benefits__container}`}>
				<div className={style.benefits__inner}>
					<div className={style.image}>
						<Image
							src='/benefits.png'
							width={390}
							height={374}
							alt='benefits image'
						/>
					</div>

					<ul className={style.benefits__list}>
						{BenefitsData.map(benefit => (
							<li
								key={benefit.id}
								className={style.benefits__item}
							>
								<Image
									src={benefit.icon}
									width={24}
									height={24}
									alt='benefits list icon'
								/>

								<span>{benefit.text}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
