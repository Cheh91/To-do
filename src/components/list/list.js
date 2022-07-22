import ListItem from "./list-item/list-Item";
import SearchPanel from "./search-panel/search-panel";
import "./list.scss";

const List = () => {
    return (
        <div className="list">
            <SearchPanel/>
            <div className="list__wrapper">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
        </div>
    )
}

export default List