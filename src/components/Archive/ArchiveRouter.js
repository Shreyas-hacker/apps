import React from "react";
import Archive from './Archived';

function ArchiveRouter(props){
    return(
        <div>
            {props.array.length === 0 ? 
                <div class="neVct-Ne3sFf-fmcmS">
                <img class="neVct-Ne3sFf-Bz112c" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAAAeHh7u7u5ra2vIyMilpaWWlpb6+vra2tohISHT09O8vLwoKCjQ0NCtra1RUVEMDAw+Pj7p6el7e3uHh4cZGRm1tbVWVlZzc3OKiooUFBT29vaSuoA3AAACd0lEQVR4nO3d21LCMBRG4bTIqSAVT6Dw/s+pjt4kdCtpQ/Onru9S7bDXlJZKmOIcAAAAAAAAMLb2oamnoHloO/s2+2o69pvLwF3uoRLbhYGrU+6REjutgsJF7omSWwSFj7kHSu4xKMw9zw1QWD4Ky0dh+f554dOsRE8RheE1XRlWFFIoj0IK9VFIoT4KKdRHIYX6KKRQH4UU6qOQQn0U/vLLUkQU3pUponASKCwfheWjsHxB4ZQ+PvttHxQ+5x4oueegcJ17oOTWQaF7yT1RYi9hoHNvuWdK6u0y0Lntfe6xkrnfdgV+HYzzb7tX7++3c1Vbb87X3c+PLw7BS7W35fnvDTI5e3PWEVv6hbObTTjUjEIThSootFGogkIbhSootFGogkIbhSootFGoIk/har7sbx73GYksha2/bay6+7YkQoXvg/q+dLxZrVTYDg6sqoi9OH7hOcUdUk7Xvz87fuEhQWBVHYQL0yxgXX8kjl+YZp01XNtUKpz+PvTXgvqylsYUCs/DXu5/BlU+lyY5mV5/Ks1yTbMcHLiMeLQs16UD18rN9WmdQuc27aKvtuNWeb/h/0MbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootFGogkIbhSootPmF65mqdaLCUlBIoT4KKdQXU9jkHraXJqLwmHvYXo4RhWnuQzq2iJv1lfk0jXmSlvl1iFd825qXWNpebCIDPx2OTV2K5hh1DAIAAAAAAAA38AGIGE0GrlTFbAAAAABJRU5ErkJggg==" alt="archive">
                </img><div class="neVct-Ne3sFf-fmcmS">Your Archive Notes are here</div></div> :
                props.array.map((oneArc,index)=>{
                    return <Archive key={index} id={index} title={oneArc.title} content={oneArc.content} go={props.go}/> 
        })}
        </div>
    )
}

export default ArchiveRouter;