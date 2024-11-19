import React, { useState, useEffect } from 'react';
import OrgUnitSelector from './OrgUnitSelector';
import YearSelector from './YearSelector';
import RunButton from './RunButton';
import ExportPdfButton from './ExportPdfButton';
import { JSONObject } from '@/types/definations';
import MultiSelectDropdown from '../basics/MultiSelectDropdown';
import NeedSelector from './NeedSelector';


export default function FilterPage({
    onApplyFilters
}: {
    onApplyFilters: (filterData: JSONObject) => void;
}) {
    const [selectedOrgunits, setSelectedOrgunits] = useState<JSONObject[]>([]);
    const [selectedYears, setSelectedYears] = useState<JSONObject[]>([]);
    const [selectedNeeds, setSelectedNeeds] = useState<JSONObject[]>(
        []
    );

    const [showOptionsForm, setShowOptionsForm] = useState(false);

    const handleApplyFilters = () => {
        onApplyFilters({orgUnits: selectedOrgunits, years: selectedYears, SRHRJNeeds: selectedNeeds});
    };

    let opened = showOptionsForm ? 'open' : '';

    return (
        <>
            <div className={`search_menu ${opened}`}>
                <div className="cta_area">
                    <div
                        className="cnt_ipanel"
                        onClick={(event) =>
                            setShowOptionsForm(!showOptionsForm)
                        }
                    >
                        <div className="ipanel" title="Search">
                            <div
                                id="panel_sh"
                                className={`panel_sh ${opened}`}
                            ></div>
                        </div>
                    </div>
					
                    <RunButton data={{orgUnits: selectedOrgunits, years: selectedYears, needs: selectedNeeds}} />

                    <ExportPdfButton />
                </div>

                <div className="cnt_options">
                    <div className="grd_srh">
                        <div className="cnt_sort">
							
                            <div className="grd_ou">
                                <div className="msbx-ou">
                                    <OrgUnitSelector
                                        onItemSelected={(selectedItems) =>
                                            setSelectedOrgunits(selectedItems)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grd_srv">
                                <div className="msbx-srv">
									<NeedSelector onItemSelected={(
											selectedItems: JSONObject[]
										) => setSelectedNeeds(selectedItems)}
									/>
                                </div>
                            </div>
                            <div className="grd_yrs">
								<div className="msbx-yrs">
									<YearSelector
										onItemSelected={(
											selectedItems: JSONObject[]
										) => setSelectedYears(selectedItems)}
									/>
								</div>
                            </div>
                        </div>
                    </div>
                    <div className="grd_others">
                        <div
                            className="top_left"
                            style={{ color: '#000', fontSize: 'medium' }}
                        >
                            {/* <div className="l1">Commitment 2.1 &amp; 2.2 <a href="https://docs.google.com/document/d/1-egmao8vqhMdol2E20onBdJ6S34CHQ9RKsjrFwx9cDk" target="_blank">( v1.6 )</a></div> */}
                            <div className="l2">
                                <div id="top_cn"></div>
                                <div id="top_ou"></div>
                                <div id="top_yrs"></div>
                                <div id="top_srv"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grd_footer">© FOS Feminista.</div>
                </div>
            </div>
        </>
    );
}
