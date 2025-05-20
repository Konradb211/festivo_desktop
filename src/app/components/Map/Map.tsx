export default function Map() {
	return (
		<div className='wrapper w-full h-[500px]'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64041.87117521986!2d10.702717499444377!3d59.89382923910347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C%20Norwegia!5e0!3m2!1spl!2spl!4v1746906699670!5m2!1spl!2spl'
				width='100%'
				height='100%'
				style={{ border: 0 }}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'></iframe>
		</div>
	)
}
