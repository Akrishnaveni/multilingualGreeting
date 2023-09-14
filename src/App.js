import {Component} from 'react'
import './App.css'
import Tabs from './components/Tabs'
import Language from './components/Language'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  onClickedTab = id => {
    this.setState({activeTabId: id})
  }

  getFilterTab = () => {
    const {activeTabId} = this.state

    const filterData = languageGreetingsList.fiter(
      each => each.id === activeTabId,
    )
    return filterData
  }

  render() {
    const {activeTabId} = this.state
    const filterLanguage = this.getFilterTab()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(eachTab => (
            <Tabs
              id={eachTab.id}
              GreetingDetails={eachTab}
              onClickedTab={this.onClickedTab}
              isActive={activeTabId === eachTab.id}
            />
          ))}
        </ul>
        {filterLanguage.map(eachItem => (
          <Language key={eachItem.id} details={eachItem} />
        ))}
      </div>
    )
  }
}
export default App
