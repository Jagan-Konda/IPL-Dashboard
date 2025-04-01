import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <div className="latest-match-card">
      <div className="latest-match-text-image-container">
        <div>
          <p className="latest-match-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="latest-match-description">{venue}</p>
          <p className="latest-match-description">{result}</p>
        </div>
        <img
          className="latest-match-image"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr />
      <div>
        <p className="latest-match-sub-heading">First Innings</p>
        <p className="latest-match-description">{firstInnings}</p>
        <p className="latest-match-sub-heading">Second Innings</p>
        <p className="latest-match-description">{secondInnings}</p>
        <p className="latest-match-sub-heading">Man Of The Match</p>
        <p className="latest-match-description">{manOfTheMatch}</p>
        <p className="latest-match-sub-heading">Umpires</p>
        <p className="latest-match-description">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
