import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamObject} = props
  const {id, name, teamImageUrl} = teamObject
  return (
    <li className="list-item">
      <Link className="team-card-link" to={`/team-matches/${id}`}>
        <img className="team-card-image" src={teamImageUrl} alt={name} />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
