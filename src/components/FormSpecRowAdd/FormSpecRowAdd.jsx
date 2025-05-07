import { Add, DoneOutlined } from "@mui/icons-material";
import { Button, Input } from "@mui/joy";
import { useForm } from "../../utils/useForm";


function FormSpecRowAdd({handleSubmit, idSortInit}) {

    function handleClickAddRow() {
        handleSubmit(form.values);
    }
    const form = useForm({
        idSort: idSortInit+1,
        quantity: null,
        nameTemplate: null,
    })

    return (
        <form className="flex gap-4 relative z-30">
            {idSortInit}
            <Input  defaultValue={idSortInit+1} value={form.idSort} onChange={form.handleInputChange} name="idSort" type="number" className="w-16" />
            <Input value={form.nameTemplate} onChange={form.handleInputChange} name="nameTemplate" sx={{fontSize: 14}} className="w-[calc(65%-80px)]" />
            <Input value={form.quantity} onChange={form.handleInputChange} name="quantity" type="number" className="w-16" />
            <Button type="button" onClick={handleClickAddRow}><DoneOutlined /></Button>
        </form>
    );
}

export default FormSpecRowAdd;