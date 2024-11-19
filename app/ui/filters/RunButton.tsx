import { JSONObject } from "@/types/definations";
import React, {useState, useEffect} from "react";
import Timeline from "../timeline/Timeline";
import { useEvent } from "@/app/contexts/EventContext";


export default function RunButton({data}: {data: JSONObject}) {

    const initDisabled = !(data.orgUnits.length > 0 && data.years.length > 0 && data.needs.length > 0 );
    const [disabled, setDisabled] = useState(initDisabled);
    const { fetchEvents } = useEvent();
    
    useEffect(() => {
        const initDisabled = !(data.orgUnits.length > 0 && data.years.length > 0 && data.needs.length > 0 );
        setDisabled( initDisabled );
    }, [data]);

    
    const fetchData = async(e: React.MouseEvent) => {
        e.preventDefault();
        
        const orgunitIds = data.orgUnits.map((item: JSONObject) => ({ "$oid": item._id}) );
        const eventDateRanges = data.years.map((year: JSONObject) => (
                                                    {
                                                        "eventDate": {
                                                            "$gte": {"$date":`${year._id}-01-01T00:00:00Z`},
                                                            "$lte": {"$date":`${year._id}-12-31T00:00:00Z`}
                                                        }
                                                    }));
        const payload = {
            "orgunitId": { "$in": orgunitIds },
            "$or": eventDateRanges,
            "SRHRJNeed": { "$in": data.needs.map((item: JSONObject) => item._id) }
        };
        
        await fetchEvents(payload);
    }
    const clazz = disabled ? "disabled" : "";
    const activeClazz = (!disabled) ? "btn-run-active" : "";

  	return   (
        <div className="cnt_irun" onClick={(event) => fetchData(event)}>
            <div className={`irun ${clazz} ${activeClazz}`} >
                <div id="panel_tl" className="panel_tl"></div>
            </div>
        </div>
    );
}