import './index.css'

const Tabs = props => {
  const {GreetingDetails, isActive, onClickedTab} = props
  const {id, buttonText} = GreetingDetails
  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  const onClickBtn = () => {
    onClickedTab(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onClickBtn}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
