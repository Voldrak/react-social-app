import { it } from "date-fns/locale";
import { formatRelative } from "date-fns";


const DateTime = (props) =>{

return (
    <>
        {formatRelative(new Date(props.relative), 
                new Date(), { addSuffix: true, locale: it })}
    </>
);
};


export { DateTime };