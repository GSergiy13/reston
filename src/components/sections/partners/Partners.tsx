'use client'

import cn from 'clsx'
import { useCallback, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import style from './style.module.scss'

const LOGOS = [
	{ id: 'citronelle', src: '/partners/partners-1.png', alt: 'Citronelle' },
	{ id: 'nam', src: '/partners/partners-2.png', alt: 'NAM' },
	{ id: 'bao', src: '/partners/partners-3.png', alt: 'BAO' },
	{ id: 'fenix', src: '/partners/partners-4.png', alt: 'Fenix' },
	{ id: 'mimosa', src: '/partners/partners-5.png', alt: 'Mimosa' },
	{ id: 'sushi', src: '/partners/partners-6.png', alt: 'Sushi' },
	{ id: 'tartine', src: '/partners/partners-7.png', alt: 'Tartine' },
	{ id: 'veranda', src: '/partners/partners-8.png', alt: 'Veranda' },
	{ id: 'vineria', src: '/partners/partners-9.png', alt: 'Vineria' },
	{ id: 'yama', src: '/partners/partners-10.png', alt: 'Yama' },
	{ id: 'yoshi', src: '/partners/partners-11.png', alt: 'Yoshi' },
	{ id: 'zhen', src: '/partners/partners-12.png', alt: 'Zhen' },
	{ id: 'bamboo', src: '/partners/partners-13.png', alt: 'Bamboo' },
	{ id: 'lotus', src: '/partners/partners-14.png', alt: 'Lotus' },
	{ id: 'olive', src: '/partners/partners-15.png', alt: 'Olive' },
	{ id: 'eden', src: '/partners/partners-16.png', alt: 'Eden' },
	{ id: 'aurora', src: '/partners/partners-17.png', alt: 'Aurora' },
	{ id: 'luna', src: '/partners/partners-18.png', alt: 'Luna' },
	{ id: 'terra', src: '/partners/partners-19.png', alt: 'Terra' },
	{ id: 'cielo', src: '/partners/partners-20.png', alt: 'Cielo' },
	{ id: 'flora', src: '/partners/partners-21.png', alt: 'Flora' }
]

export const Partners = () => {
	const swiperRef = useRef<SwiperType | null>(null)

	const handlePrev = useCallback(() => {
		swiperRef.current?.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		swiperRef.current?.slideNext()
	}, [])

	return (
		<section className={style.partners}>
			<div className='container'>
				<h2 className={cn('title', style.partners__title)}>
					Заклади, які уже використовують RestOn
				</h2>

				<div
					className={style.partners__slider}
					role='region'
					aria-label='Слайдер логотипів партнерів'
				>
					<button
						type='button'
						onClick={handlePrev}
						className={cn(style.navBtn, style.prev)}
						aria-label='Попередній'
					></button>

					<Swiper
						modules={[Autoplay]}
						autoplay={{ delay: 2500, disableOnInteraction: false }}
						loop
						spaceBetween={50}
						slidesPerView={4}
						breakpoints={{
							320: {
								slidesPerView: 2,
								spaceBetween: 20
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 30
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 50
							}
						}}
						onSwiper={swiper => {
							swiperRef.current = swiper
						}}
					>
						{LOGOS.map(logo => (
							<SwiperSlide
								key={logo.id}
								className={style.partners__item}
							>
								<img
									src={logo.src}
									alt={logo.alt}
									draggable={false}
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<button
						type='button'
						onClick={handleNext}
						className={cn(style.navBtn, style.next)}
						aria-label='Наступний'
					></button>
				</div>
			</div>
		</section>
	)
}
