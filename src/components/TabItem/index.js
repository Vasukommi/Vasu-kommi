import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTabChange = () => {
    activeTabItem(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onTabChange}
        type="button"
        className={`tab-btn ${activeClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
