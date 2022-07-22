import "./search-panel.scss";

const SearchPanel = () => {
    return (
        <div className="search-wrap">
            <input type="text" placeholder="Search"/>
            <button className="search-wrap__btn">Add</button>
        </div>
    )
}

export default SearchPanel;