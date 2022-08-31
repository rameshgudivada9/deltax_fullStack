function Artist(props){
    return(
        <div id="artistinfo">
            <div id="ai">
                {props.name}  
            </div>
            <div id="ai">
                {props.dob}  
            </div>
            <div id="ai">
                {props.songslist}  
            </div>
        </div>
    )
}
export default Artist;