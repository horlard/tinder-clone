import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css';

export default function TinderCards() {
    const [people,setPeople] = useState([
        {
            name: 'Steve Jobs',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: 'Mark Zukerburg',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        }
    ])
    return (
        <div>
            <div className="card__container">
            {
                people.map(person=> {
                    return (
                    <TinderCard className='swipe' key={person.name} preventSwipe={['up','down']}>
                        <div className="card" style={{backgroundImage: `url(${person.url})`,backgroundRepeat:'no-repeat'}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    )
                })
            }
            </div>
            
        </div>
    )
}
