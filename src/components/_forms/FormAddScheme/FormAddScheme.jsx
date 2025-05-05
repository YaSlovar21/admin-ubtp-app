import { useState } from "react";

function FormAddScheme() {

    
    const [svgLink, setSvgLink] = useState(null);
    const [svgText, setSvgText] = useState(null);

    function handleSvgSchemeFileChange(evt) {
        [...evt.target.files].map((file)=> {
            console.log(file);
        })
        const fileReaderText = new FileReader(); 
        fileReaderText.readAsText([...evt.target.files][0]);
        fileReaderText.onload = function(e) {
            console.log(e);
            setSvgText(e.target.result); // Доступ к содержимому файла
        }; 
        const fileReaderAsLink = new FileReader(); 
        fileReaderAsLink.readAsDataURL([...evt.target.files][0]);
        fileReaderAsLink.onload = function(e) {
            console.log(e);
            setSvgLink(e.target.result); // Доступ к содержимому файла
        }; 
    }

    return (
        <div className="w-full grid grid-cols-12">
            <form className="col-span-2">
                <label>Выберите файл SVG</label>
                <input type="file" onChange={handleSvgSchemeFileChange}  />
                {
                    svgLink && svgText && 
                    <button type="submit" className="w-full border-2 border-b-blue-500">Отправить</button>
                }
            </form>
            <div className="col-span-3">
                <p className="text-xs"><img src={svgLink}/></p>
                <p className="text-xs">{svgText}</p>
            </div>
            
        </div>
    );
}

export default FormAddScheme;