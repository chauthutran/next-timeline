export default function MonthLine() {
    
    return (
        <div className="t_line">
            <div className="yr_start">
                <div className="lbl">{year}</div>
                    <div></div>
                </div>
            {renderTimelineDetails(year)}
        </div>
    )
}