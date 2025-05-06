import { useState } from "react";
import parse from 'html-react-parser';
import SchemeSvgReal2025 from "../../SchemeSvgReal2025/SchemeSvgReal2025";

import './FormAddScheme.css';
import { useRef } from "react";
import { Button, CircularProgress, Input } from "@mui/joy";
import SelectBtpType from "../SelectBtpType/SelectBtpType";
import { useCallback } from "react";
import { memo } from "react";
import { postSchemeRequest } from "../../../utils/ubtp-admin-api";

function FormAddScheme() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        postSchemeRequest(svgText, selectedType, comment)
            .then((res) => {
                handleReset();
                console.log(res);
            });
    }

    const [selectedType, setSelectedType] = useState(null);
    const onChangeType = useCallback((val)=>{
        setSelectedType(val);
    },[]);
    const [svgLink, setSvgLink] = useState(null); //dataurl (пока использовать не будем)
    const [svgText, setSvgText] = useState(null); //поле отправляем
    const [comment, setComment] = useState('')
    const [nodeSvg, setNodeSvg] = useState(null);

    const formRef = useRef();

    function handleReset() {
        setNodeSvg(null);
        setSvgText(null);
        setSvgLink(null);
        setSelectedType(null);
        setComment('');
        formRef.current.reset();
    }
    const isSvgSchemeViewing = svgLink && svgText && nodeSvg;
    const [ isSchemeLoadingAndRendering, setIsSchemeLoadingAndRendering ] = useState(false);
    function handleSvgSchemeFileChange(evt) {
        /*[...evt.target.files].map((file)=> {
            console.log(file);
        })*/
        setIsSchemeLoadingAndRendering(true);
        const fileReaderText = new FileReader(); 
        const parser = new DOMParser(); // Инициализируем парсер
        fileReaderText.readAsText([...evt.target.files][0]);
        fileReaderText.onload = function(e) {
            setSvgText(e.target.result); // Доступ к содержимому файла
            const nodeSvg1 = parser.parseFromString(e.target.result, "text/html").querySelector('svg');
            setNodeSvg(nodeSvg1);
            setIsSchemeLoadingAndRendering(false);
        }; 
        const fileReaderAsLink = new FileReader(); 
        fileReaderAsLink.readAsDataURL([...evt.target.files][0]);
        fileReaderAsLink.onload = function(e) {
            setSvgLink(e.target.result); // Доступ к содержимому файла
        }; 
    }

    return (
        <div className="w-full grid grid-cols-12 gap-5">
            <form className="col-span-2" ref={formRef} onSubmit={handleSubmit}>
                <label className="text-lg mb-1 block font-medium">Выберите файл SVG</label>
                <Input className="mb-4" disabled={isSvgSchemeViewing} type="file" onChange={handleSvgSchemeFileChange} />
                {
                    svgLink && svgText && 
                    <>
                        <SelectBtpType onChangeType={onChangeType} />
                        <Input type="text" placeholder="Описание схемы (особенности)" onChange={(evt) => setComment(evt.target.value)} />
                        <Button type="submit" className="w-full border-2 border-b-blue-500">Отправить</Button>
                    </>
                }
                {
                    isSvgSchemeViewing &&
                    <Button variant="outlined" color="neutral" type="button" onClick={handleReset} className="w-full border-2 mt-3 border-b-blue-500">Сбросить</Button>
                }
                {selectedType}
                {comment}
            </form>
            <div className="col-span-6">
                {isSchemeLoadingAndRendering && <CircularProgress />}
                <p className="text-xs"><img src={svgLink}/></p>
                <div className={`container-svg w-full`}>{svgText && parse(svgText)}</div>
            </div> 
            <div className="col-span-4">
                <SchemeSvgReal2025 nodes={nodeSvg ? [nodeSvg]: []} />
            </div>
        </div>
    );
}

export default memo(FormAddScheme);