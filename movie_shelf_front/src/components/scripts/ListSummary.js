import "../styles/ListSummary.css"

function ListSummary(props){
    return (
        <div className="list_summary_body">
            <p className="list_title"><a href={props.link}>{props.title}</a></p>
            <div className="image_and_description">
                <img className="list_banner" src={props.banner}></img>
                <div className="description_box">
                    <p className="description_label">Description</p>
                    <p className="description_text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ListSummary;