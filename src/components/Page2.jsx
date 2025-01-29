import React from 'react'
import Page2Card from './Page2Card'
import AboutCard from './AboutCard';

const cardData = [
    { id: 1, title: 'AOSAT for JEE', detail: 'Session: 2025-26 | Class 11 & 12', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-5lg2BQXVuL6ZOrcH5ngjO0378aNcuOsbTVWxu4ixSs1nUJxj4L-JBHT8Q8Ssbudnpg&usqp=CAU" },
    { id: 2, title: 'AOSAT for NEET', detail: 'Session: 2025-26 | Class 11 ', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlLBQtXCNmE-wZ4rng5--zMBzfGlO_WNZIhYIkJnZGsZGI4UFSRP0vOGJZPS9svPgyj4&usqp=CAU" },
    { id: 3, title: 'AOSAT for Class 6-10', detail: 'Session: 2025-26 | Class 6-10', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fqbSur_F7W7iqfAKdEq7gsPj4JhsPcNZZw&s" },
    { id: 4, title: 'Card 4', detail: 'UPSC Exam', url:"https://img.freepik.com/premium-photo/cartoon-boy-is-sitting-stack-books-reading-book_744040-1028.jpg" },
  ];


  const CardData2=[
    {id: 1, title: 'Kota Faculty', detail: 'Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4alh1E00abukBFFHibUFZO48KzqEWmTdug&s"},
    {id: 2, title: 'Proven Results', detail: 'Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams', url:"https://w7.pngwing.com/pngs/897/3/png-transparent-computer-icons-achievement-trophy-black-prize-achievement.png"},
    {id: 3, title: 'Learning Tools', detail: '24x7 doubt resolution and customized study material to test, and improve continuously', url:"https://www.kindpng.com/picc/m/634-6344112_website-learning-icon-hd-png-download.png"},
    {id: 4, title: 'Mentor Support', detail: 'Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents', url:"https://cdn.iconscout.com/icon/premium/png-256-thumb/mentorship-8448186-6892055.png"},
]
const Page2 = () => {
  return (
    <>
    <div>
        <div className='mt-10'>
            <h2 className='text-2xl font-semibold'>Win up to 90% scholarship | ALLEN Online Scholarship Test (AOSAT)</h2>
        </div>
        <div className='flex flex-wrap'>
            {cardData.map((card)=>(
                <Page2Card key={card.id} title={card.title} detail={card.detail} url={card.url}               
              className="cursor-pointer"
                />
            ))}
           
        </div>
        <hr className='mt-4 h-1 bg-slate-300 shadow-2xl' />
        <div className='mt-9'>
            <div>
                <h1 className='text-3xl font-serif font-semibold '>Why ALLEN Online</h1>
            </div>
          </div>  
            <div className='flex flex-wrap mt-16'>
                {CardData2.map((card)=>(
                    <AboutCard id={card.id} title={card.title} detail={card.detail} url={card.url} />
                ))}
            </div>

    </div>
    </>
  )
}

export default Page2