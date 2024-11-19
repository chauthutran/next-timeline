import { JSONObject } from "@/types/definations";
import { useState } from "react";
import * as Utils from "@/app/libs/utils";


export default function CategoryListItem({data}: {data: JSONObject}) {
    const [checked, setChecked] = useState(true);

    const styleClazz = Utils.getEventClazzByAdvStage(data.name);

    return (
        <div className="lgnd pr-2 items-center flex flex-wrap">
            <div className="ctrl">
                <label className={`checkbox ${styleClazz} font-bold `}>
                    <input type="checkbox" name={data._id} checked={checked} onChange={() => setChecked(!checked)} />
                    <span className="indicator"></span>
                    {data.name}
                </label>
            </div>
            <div className="cta">
                <div className="btn-lgnd-inf"></div>
            </div>
        </div>
    )
}