import Image from 'next/image'

import { CustomList } from '@/ui/customlist/CustomList'

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

					{BenefitsData && <CustomList items={BenefitsData} />}
				</div>
			</div>
		</section>
	)
}
