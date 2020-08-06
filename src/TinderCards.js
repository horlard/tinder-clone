import React from 'react'
import TinderCard from 'react-tinder-card'
import Axios from './api'
import './TinderCard.css';

class TinderCards extends React.Component {
    state={
        people: []
    }

async componentDidMount() {
    const response= await Axios.get('/search/photos', {
        params: {
            query:'single women',
            per_page:25
        }
    })
    this.setState({people:response.data.results})
    console.log(this.state.people)
}
        





render () {
    const {people} = this.state
    return (
        <div>
            <div className="card__container">
            {
                people===[] ? <h1>Hello</h1> :
                people.map((person,i)=> {
                    return (
                    <TinderCard className='swipe' key={i} preventSwipe={['up','down']}>
                        <div className="card" style={{backgroundImage: `url(${person.urls.small})`,backgroundRepeat:'no-repeat'}}>
                            <h3>{person.user.name}</h3>
                        </div>
                    </TinderCard>
                    )
                })
            }
            </div>
            
        </div>
    )
}
}  
export default TinderCards;

