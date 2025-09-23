// import { NextRequest, NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(req: NextRequest) {
// 	try {
// 		const body = await req.json()

// 		const transporter = nodemailer.createTransport({
// 			port: Number(process.env.port),
// 			host: process.env.host,
// 			auth: {
// 				user: process.env.username,
// 				pass: process.env.password
// 			}
// 		})

// 		const mailData = {
// 			from: 'info@reston.ua',
// 			to: 'reston.com.ua@gmail.com',
// 			subject: `Запит: СРМ-система для ресторану`,
// 			html: `
//         <b>Ім'я:</b> ${body.name}<br/>
//         <b>Телефон:</b> ${body.phone}<br/>
//         <b>Емейл:</b> ${body.email}<br/>
//         <b>Повідомлення:</b> ${body.message}<br/>
//         <b>Ресторан:</b> ${body.restaurant}<br/>
//         <b>Адрес:</b> ${body.address}
//       `
// 		}

// 		const info = await transporter.sendMail(mailData)
// 		console.log('info', info)

// 		return NextResponse.json({ success: true, message: 'Email sent successfully' })
// 	} catch (error) {
// 		console.error('Email sending error:', error)
// 		return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
// 	}
// }
