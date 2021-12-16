import { it } from "date-fns/locale";
import { formatDistance } from "date-fns";


const DateTime = (props) =>{

return (
    <>
        {formatDistance(new Date(props.distance), 
                new Date(), { addSuffix: true, locale: it })}
    </>
);
};


export { DateTime };