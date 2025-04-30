import { MoreVert } from "@mui/icons-material";
import { Table, Button, Typography } from "@mui/joy";
import React, { useState } from "react";
import FormSpecRowAdd from "../FormSpecRowAdd/FormSpecRowAdd";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

function Home() {

    const [isAddingFormOpen, setIsAddingFormOpen] = useState(false);

    function handleSubmit() {
        setIsAddingFormOpen(false)
    }

    return (
        <div>
            <Table borderAxis="both" sx={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className="w-20">№</th>
                        <th className="w-[calc(65%-80px)]">Название элемента БТП (template)</th>
                        <th className="w-[15%]">T (Трубопроводы)</th>
                        <th className="w-[20%]">Категория прайса</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{"Пластинчатый теплообменник {{ptoName\}\} расчёт № {{raschetNumber}}"}</td>
                        <td><Button endDecorator={<MoreVert />} variant="outlined" color="neutral">T1</Button></td>
                        <td><Button endDecorator={<MoreVert />} variant="outlined" color="neutral"><Typography level="body-xs" sx={{maxWidth: 200}} noWrap>Краны шаровые (LD) стандартнопроходные, фланец/фланец</Typography></Button></td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                        { isAddingFormOpen ?   
                            <>
                                <ModalOverlay onOverlayClick={()=>setIsAddingFormOpen(false)}/>
                                <FormSpecRowAdd handleSubmit={handleSubmit} />
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

export default Home;