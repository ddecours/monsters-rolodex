import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img
            alt={props.monster.id}
            src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)