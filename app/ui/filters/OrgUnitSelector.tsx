import { JSONObject } from '@/types/definations';
import { useEffect, useState } from 'react';
import Loading from '../basics/Loading';
import * as mongodb from "@/app/libs/mongodbService";


export default function OrgUnitSelector({ onItemSelected }: { onItemSelected: (orgUnitId: string) => void }) {

	const [list, setList] = useState<JSONObject[] | null>(null);
	const [errMsg, setErrMsg] = useState("");
	const [selectedOrgunit, setSelectedOrgunit] = useState('');

	const fetchOrgunits = async () => {
		const response = await mongodb.getData("organisationunits", {});
		if (response.status === "success") {
			setList(response.data);
		}
		else {
			setErrMsg(response.message);
		}
	}

	useEffect(() => {
		fetchOrgunits();
	}, []);

	const handleItemSeleted = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setSelectedOrgunit( selectedValue );
		onItemSelected( selectedValue );
	}

	if (list === null) return (<Loading />);

	return (
		<select
			value={selectedOrgunit}
			onChange={(e) => handleItemSeleted(e)}
		>
			<option>[Select Orgunit]</option>
			{list.map((orgunit) => (
				<option key={orgunit._id} value={orgunit._id}>{orgunit.name}</option>
			))}
		</select>
	)
}