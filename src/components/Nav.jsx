import React, { useState } from 'react'

import { hamburger, close } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container'>
				<a href='/'>
					<img
						src={headerLogo}
						alt='logo'
						width={129}
						height={29}
						className='m-0 w-[129px] h-[29px]'
					/>
				</a>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='font-montserrat leading-normal text-lg text-slate-gray'>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
					<a href='/'>Sign in</a>
					<span>/</span>
					<a href='/'>Explore now</a>
				</div>

				{/* HamburgerMENU */}
				<div className='hidden max-lg:block'>
					<img
						src={toggle ? close : hamburger}
						alt='hamburger icon'
						width={25}
						height={25}
						onClick={() => {
							setToggle(!toggle)
						}}
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-pale-blue`}>
						<ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
							{navLinks.map((item) => (
								<li
									key={item.label}
									className='cursor-pointer text-md'>
									<a
										href={item.href}
										className='font-montserrat leading-normal text-lg text-slate-gray'>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Nav
