import { Table, Button, Typography } from "@mui/joy";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSchemesAdminRequest } from "../../../utils/ubtp-admin-api";
import FormAddScheme from "../../_forms/FormAddScheme/FormAddScheme";

function AdminSchemes() {

    const [schemesInSystem, setSchemesInSystem] = useState([]);

    useEffect(()=> {
        getSchemesAdminRequest()
            .then(schemes => setSchemesInSystem(schemes));
    },[])

    return (
        <>
            <Table borderAxis="both" sx={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className="w-20">ID</th>
                        <th className="w-20">TYPE</th>
                        <th className="w-32">NAME</th>
                        <th className="w-[calc(65%-80px)]">svgSchemeTemplate</th>
                        <th className="w-[20%]">imageView</th>
                    </tr>
                </thead>
                <tbody>
                    {schemesInSystem.map((scheme)=> ( 
                        <tr>
                            <td><Link className="text-xl font-semibold underline text-blue-800" to={`/admin/schemes/${scheme.id}`}>{scheme.id}</Link></td>
                            <td>{scheme.type}</td>
                            <td>{scheme.name}</td>
                            <td><p className="h-40 overflow-ellipsis overflow-hidden text-xs">{scheme.svgSchemeTemplate}</p></td>
                            <td><img src={`http://postatic.utermo.ru.website.yandexcloud.net/miniviews/${scheme.imageView}`} alt="" /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <FormAddScheme />
        </>
    );
}

export default AdminSchemes;