import { Option, Select } from "@mui/joy";
import React, { useCallback, useState } from "react";

const SelectBtpType = React.memo(({ onChangeType }) => {


    return (
        <Select size="sm" className="my-8" placeholder="Тип загружаемого узла" name="tableName" onChange={useCallback((evt, val)=> { onChangeType(val); },[])}>
            <Option value="gvs">Узел ГВС</Option>
            <Option value="uv">Узел ввода</Option>
            <Option value="collector">Коллектор</Option>
            <Option value="so">Узел отопления</Option>
            <Option value="sv">Узел вентиляции</Option>
        </Select>
    );
})

export default SelectBtpType;