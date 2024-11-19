import { JSONObject } from "@/types/definations";
import { useEffect, useState } from "react"
import * as mongodb from "@/app/libs/mongodbService";
import Loading from "@/app/ui/basics/Loading";
import CategoryListItem from "./CategoryListItem";


export default function CategoryList() {

    const [list, setList] = useState<JSONObject | null>(null);
	const [errMsg, setErrMsg] = useState("");

    const fetchCategories = async() => {
        const response = await mongodb.getData("categories", {});
		if (response.status === "success") {
			setList(response.data);
		}
		else {
			setErrMsg(response.message);
		}
    }
    
    useEffect(() => {
        fetchCategories();
    }, []);


    if( list === null ) return (<Loading />);

    return (
        <div className="top_lgnds">
            <div className="list_lgnds">
                <div className="pnl">
                    {list.map((category: JSONObject, idx: number) => (
                        <CategoryListItem key={category._id} data={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}