import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesDetails: {}, isLoading: true, backgroundColor: ''}

  componentDidMount() {
    this.getTeamDteails()
  }

  getTeamDteails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({backgroundColor: id.toLowerCase()})

    const convertToCamelCase = details => ({
      umpires: details.umpires,
      result: details.result,
      manOfTheMatch: details.man_of_the_match,
      id: details.id,
      date: details.date,
      venue: details.venue,
      competingTeam: details.competing_team,
      competingTeamLogo: details.competing_team_logo,
      firstInnings: details.first_innings,
      secondInnings: details.second_innings,
      matchStatus: details.match_status,
    })

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: convertToCamelCase(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        convertToCamelCase(eachMatch),
      ),
    }

    this.setState({teamMatchesDetails: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesDetails} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails
    return (
      <div className="team-matches-responsive-container">
        <img
          className="team-banner-image"
          src={teamBannerUrl}
          alt="team banner"
        />
        <p className="latest-match-heading">Latest Matches</p>
        <LatestMatch matchDetails={latestMatchDetails} />
        <ul className="list-container">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, backgroundColor} = this.state
    return (
      <div className={`team-matches-bg-container ${backgroundColor}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
