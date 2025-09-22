'use client'

import cn from 'clsx'
import { useCallback, useRef } from 'react'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import style from './style.module.scss'

const LOGOS = [
	{ id: 'citronelle', src: '/partners/partners-1.png', alt: 'Citronelle' },
	{ id: 'nam', src: '/partners/partners-2.png', alt: 'NAM' },
	{ id: 'bao', src: '/partners/partners-3.png', alt: 'BAO' },
	{ id: 'fenix', src: '/partners/partners-4.png', alt: 'Fenix' },
	{ id: 'mimosa', src: '/partners/partners-5.png', alt: 'Mimosa' },
	{ id: 'sushi', src: '/partners/partners-6.png', alt: 'Sushi' }
]

export const Partners = () => {
	const sliderRef = useRef<Slider | null>(null)

	const settings: Settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		pauseOnFocus: true,
		swipeToSlide: true,
		cssEase: 'ease-in-out',
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
		touchThreshold: 12,
		responsive: [
			{ breakpoint: 1280, settings: { slidesToShow: 4 } },
			{ breakpoint: 1024, settings: { slidesToShow: 3 } },
			{ breakpoint: 768, settings: { slidesToShow: 2 } },
			{ breakpoint: 480, settings: { slidesToShow: 2 } }
		],
		accessibility: true
	}

	const handlePrev = useCallback(() => sliderRef.current?.slickPrev(), [])
	const handleNext = useCallback(() => sliderRef.current?.slickNext(), [])

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

					<Slider
						ref={sliderRef}
						{...settings}
					>
						{LOGOS.map(logo => (
							<div
								key={logo.id}
								className={style.partners__item}
							>
								<img
									src={logo.src}
									alt={logo.alt}
									loading='lazy'
									decoding='async'
									draggable={false}
								/>
							</div>
						))}
					</Slider>

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
