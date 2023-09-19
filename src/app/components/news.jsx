import React from 'react'



function News()  {
    const newContent = [
        {
            title:'Hydrogen vs Electric Cars',
            description: 'Will-hydrogen fueled cars ever catch up to EVs?'
    
        }  ,
        {
            title:'The Downsides of AI Artistry',
            description: 'What are the posible adverse effects of on-demand AI image generagion?'
    
        }  ,
        {
            title:'Is VC Funfing Drying Up?',
            description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    
        }  
    ]
    
  return (
    <aside className='new-content bg-[var(--Very-dark-blue)] py-6 px-7'>
        <h1 className='text-[var(--Soft-orange)] font-bold text-[2.5rem] mb-5'>New</h1>

        {newContent.map((content,index)=>(
            <div key={content.title} className={index !== newContent.length - 1 ? 'border-b-[1px] border-[var(--Grayish-blue)] mb-[22px] pb-[2.5rem]' : 'border-b-0'}>
                <h2 className='mb-2 text-[var(--Off-white)] font-bold text-[1.2rem] hover:text-[var(--Soft-orange)]'>{content.title}</h2>
                <p className='text-[var(--Grayish-blue)] font-normal'>{content.description}</p>

            </div>
        ))}
        
        
    </aside>
    )
}

export default News