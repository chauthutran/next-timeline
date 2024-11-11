import { JSONObject } from "@/types/definations";
import { useState } from "react"


export default function CategoryListItem({data}: {data: JSONObject}) {
    const [checked, setChecked] = useState(true);

    return (
        <>
           <div className="flex flex-row items-center mr-3">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    color={data.color} // Set color for the checkbox when checked
                  />
                <div className="">{data.name}</div>
            </div>
        </>
    )
}