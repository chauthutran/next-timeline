import { useState } from "react";
import CategoryList from "./category/CategoryList";
import FilterPage from "./filters/FilterPage";
import OrgUnitList from "./filters/OrgUnitSelector";
import { JSONObject } from "@/types/definations";
import Timeline from "./timeline/Timeline";
import { useEvent } from "../contexts/EventContext";

export default function HomePage() {

    const [filterData, setFilterData] = useState<JSONObject | null>(null);
    const { events } = useEvent();
    
    return (
        <>

        <div className="wrapper">

            {/* <header></header> */}
            <header className="top_bar">
                <div className="top_ctrs"></div>
                <CategoryList />
            </header>

            <FilterPage onApplyFilters={(filter: JSONObject) => setFilterData(filter) } />

            <div className="content">
                <div className="views_Container">
                    {events !== null && <Timeline /> }
                </div>
            </div>
        </div>
        </>
    )
}