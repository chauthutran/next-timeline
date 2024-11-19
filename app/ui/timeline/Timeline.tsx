import { JSONObject } from "@/types/definations";
import { useEffect, useState } from "react";
import * as mongodb from "@/app/libs/mongodbService";
import { useEvent } from "@/app/contexts/EventContext";

export default function Timeline() {
    
    const { events, error } = useEvent();
    
    useEffect(() => {
        
    }, [events]);

    // if( error === null ) return (<div>{error}</div>);
    
    return (
        <>
            {JSON.stringify(events)}
        </>
    )
}