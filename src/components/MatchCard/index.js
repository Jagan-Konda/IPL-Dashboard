import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const statusColor = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card">
      <img
        className="match-card-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
