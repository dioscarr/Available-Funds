import React from 'react';
import {MdViewList} from 'react-icons/md';


const ViewType = {
    List:'list',
    Card:'card'
}
const ToolsBarItems = [
    {id:1, viewType:ViewType.List, name:ViewType.List},
]

const ToolsBar = () =>
{
    return(
        <div id="ToolsBar_Root">
           {ToolsBarItems.map(item=>
            <div key={item.id} className={`ToolsBarItem${item.id}`}>
                <MdViewList />
            </div>       
           )}
        </div>
    )
}
export default ToolsBar;