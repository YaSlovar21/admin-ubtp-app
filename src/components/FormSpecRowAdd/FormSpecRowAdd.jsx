import { Add, DoneOutlined } from "@mui/icons-material";
import { Button, Input } from "@mui/joy";


function FormSpecRowAdd({handleSubmit}) {

    function handleClickAddRow() {
        handleSubmit();
    }

    return (
        <form className="flex gap-4 relative z-30">
            <Input type="number" className="w-16" />
            <Input sx={{fontSize: 14}} className="w-[calc(65%-80px)]" />
            <Button type="button" onClick={handleClickAddRow}><DoneOutlined /></Button>
        </form>
    );
}

export default FormSpecRowAdd;