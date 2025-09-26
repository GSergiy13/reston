import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
	try {
		const { email, tel } = await request.json()

		if (!email || !tel || !email.includes('@')) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
		}

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		})

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.RECIPIENT_EMAIL,
			subject: 'New Subscribe',
			html: `
				<h2>New message from contact form</h2>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone number:</strong> ${tel}</p>
			`,
			replyTo: email
		}

		await transporter.sendMail(mailOptions)

		return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
	}
}
