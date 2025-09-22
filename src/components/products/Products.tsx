import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import style from './style.module.scss'

export const Products = () => {
	return (
		<section className={style.products}>
			<div className='container'>
				<h2 className={cn('title', style.products__title)}>Інші продукти</h2>

				<div className={style.products__inner}>
					<div className={style.product}>
						<div className={style.product__poster}>
							<Image
								src='/products/product-1.png'
								alt='product'
								width={620}
								height={376}
							/>
						</div>

						<div className={style.product__info}>
							<h3 className={style.product__title}>Електронна книга резервів і черга гостей</h3>
							<Link
								href='/products/product-1'
								className={style.product__link}
							>
								Дізнатися більше
							</Link>
						</div>
					</div>

					<div className={cn(style.product, style.product_pr)}>
						<div className={style.product__poster}>
							<Image
								src='/products/product-2.png'
								alt='product'
								width={620}
								height={376}
							/>
						</div>

						<div className={style.product__info}>
							<h3 className={style.product__title}>
								Віджет online-бронювання на ваш сайт, посадкова сторінка в Google чи соц. мережі
							</h3>
							<Link
								href='/products/product-1'
								className={style.product__link}
							>
								Дізнатися більше
							</Link>
						</div>
					</div>

					<div className={style.product}>
						<div className={style.product__poster}>
							<Image
								src='/products/product-3.png'
								alt='product'
								width={620}
								height={376}
							/>
						</div>

						<div className={style.product__info}>
							<h3 className={style.product__title}>CRM-система для ресторану</h3>
							<Link
								href='/products/product-1'
								className={style.product__link}
							>
								Дізнатися більше
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
