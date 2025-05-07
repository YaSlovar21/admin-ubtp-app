import { MoreVert } from "@mui/icons-material";
import { Table, Button, Typography, CircularProgress } from "@mui/joy";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormSpecRowAdd from "../components/FormSpecRowAdd/FormSpecRowAdd";
import ModalOverlay from "../components/ModalOverlay/ModalOverlay";
import { addSpecificattionRowRequest, getSpecificationByIdSchemeRequest } from "../utils/ubtp-admin-api";


function AdminSpecificationsPage() {
    const { idScheme }= useParams();
    //надо достать по этому id схему и спецификацию
    const [isAddingFormOpen, setIsAddingFormOpen] = useState(false);
    const [specList, setSpecList] = useState([]);
    const [isRequestingSpecs, setIsRequestingSpecs] = useState(false);

    React.useEffect(()=> {
        setIsRequestingSpecs(true);
        getSpecificationByIdSchemeRequest(idScheme)
            .then((specList) => {
                setSpecList(specList);
                setIsRequestingSpecs(false)
            })
            .catch((err)=> {alert(err); setIsRequestingSpecs(false)})
    }, [])

    async function handleSubmit(values) {
        console.log(values);
        const res = await addSpecificattionRowRequest(idScheme, values.idSort, values.nameTemplate, values.quantity);
        console.log(res);
        if (res) {
            await getSpecificationByIdSchemeRequest(idScheme)
                .then(specList => setSpecList(specList))
        }
        setIsAddingFormOpen(false);
    }

    return (
        <div>
            <Table borderAxis="both" size="sm" sx={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className="w-20">№</th>
                        <th className="w-[calc(65%-80px)]">Название элемента БТП (template)</th>
                        <th className="w-20">Количество</th>
                        <th className="w-[15%]">T (Трубопроводы)</th>
                        <th className="w-[20%]">Категория прайса</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 (бут.запись)</td>
                        <td>{"Пластинчатый теплообменник {{ptoName\}\} расчёт № {{raschetNumber}}"}</td>
                        <td>5</td>
                        <td><Button endDecorator={<MoreVert />} variant="outlined" color="neutral">T1</Button></td>
                        <td><Button endDecorator={<MoreVert />} variant="outlined" color="neutral"><Typography level="body-xs" sx={{maxWidth: 200}} noWrap>Краны шаровые (LD) стандартнопроходные, фланец/фланец</Typography></Button></td>
                    </tr>
                    {isRequestingSpecs && 
                        <tr><td colSpan={5}><CircularProgress size="sm" sx={{marginX: 'auto'}} /></td></tr>
                    }
                    { specList.map((specRow) => (
                        <tr>
                            <td>{specRow.idSort}</td>
                            <td>{specRow.nameTemplate}</td>
                            <td>{specRow.quantity}</td>
                            <td><Button endDecorator={<MoreVert />} variant="outlined" color="neutral">T1</Button></td>
                            <td><Button endDecorator={<MoreVert />} variant="outlined" color="neutral"><Typography level="body-xs" sx={{maxWidth: 200}} noWrap>Краны шаровые (LD) стандартнопроходные, фланец/фланец</Typography></Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={4}>
                        { isAddingFormOpen ?   
                            <>
                                <ModalOverlay onOverlayClick={()=>setIsAddingFormOpen(false)}/>
                                <FormSpecRowAdd handleSubmit={handleSubmit} idSortInit={specList[specList.length-1].idSort}/>
                            </> 
                            :
                            <Button className="w-full" size="lg" variant="outlined" onClick={()=>setIsAddingFormOpen(true)}>Добавить</Button>
                        }
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AdminSpecificationsPage;