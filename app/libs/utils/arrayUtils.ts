import { JSONObject } from "@/types/definations";

export const cloneJson = ( jsonData: JSONObject[] | JSONObject ) => {
    return JSON.parse(JSON.stringify(jsonData));
}
