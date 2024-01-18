import {Children} from "react";

export const List = ({title, subtitle, children})=>{ 
    //Wenn ich Kinder in App.js einbauen möchte, dann children hier reinpacken: export const List = ({title, subtitle, children})=>{ 
    //man könnte aber auch die Kinder direkt hier drinnen schreiben, dann bräuchte man sie aber wie oben nicht zu schreiben z.B.  
    //  return <div>
    //         <h2>{title}</h2>
    //         <p>{subtitle}</p>
    //         <h3>Ein Kind</h3>   <---------
    //         <h3>Noch ein Kind</h3> <-------
    //     </div>
    // }
    return <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
    </div>
}

