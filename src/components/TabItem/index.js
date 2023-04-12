import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickUpdateTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtn}`}
        onClick={onClickUpdateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
