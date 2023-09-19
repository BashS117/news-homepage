import React from 'react'



function TierTop() {
    const Top = [
        {
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/770387180302895.6508a290d7993.jpg",
            title: 'Reviving Retro Pcs',
            description: 'What happends when old PCs are given modern upgrades'

        },
        {
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ca0ec180302895.6508a290d531a.jpg",
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets'

        },
        {
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/07a34a180302895.6508a290d6468.jpg",
            title: 'The Growth of Gaming',
            description: 'How the pandemy has sparked fresh opportunities'

        }
    ]

    return (
        <aside className='tier bg-red py-6 flex gap-[30px] sm:flex-col'>

            {Top.map((content, index) => (
                <div key={content.title} className='flex w-[450px] sm:w-auto ' >
                    <figure>
                        <img className='sm:w-[110px]' width='105px' src={content.image} alt="" />
                    </figure>
                    <div className='w-[240px] ml-6 '>
                        <span className='text-[2rem] font-bold text-[var(--Grayish-blue)]'>0{index + 1}</span>
                        <h2 className='hover:text-[var(--Soft-red)] mb-2 text-[var(--Very-dark-blue)] font-extrabold text-[1.2rem] sm:text-[1.1rem]'>{content.title}</h2>
                        <p className='font-normal sm:pr-2 sm:text-[0.9rem]'>{content.description}</p>
                    </div>

                </div>
            ))}


        </aside>
    )
}

export default TierTop