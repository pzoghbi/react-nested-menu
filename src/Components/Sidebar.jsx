import menus from '../menus.json'
import { Menu } from './Menu';

function Sidebar() {
    return (
        <aside className="d-inline-block">
            <nav className='position-relative collapse show collapse-horizontal h-100 overflow-auto' id='hornav'>
                <div className='flex-column' style={{width: '250px'}}>
                    <Menu menus={menus}/>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;