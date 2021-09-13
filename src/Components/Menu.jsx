export function Menu(props) {
    return(
        <ul className="list-unstyled accordion">
            {props.menus && props.menus.map((menu) => {
                return (
                    <li key={menu.url} className="accordion-item border-0 bg-primary">
                        {menu.menus ? 
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed ps-1 py-1 bg-primary text-white" 
                                data-bs-toggle="collapse" data-bs-target={`#${menu.url}`} type="button">
                                <strong>{menu.name}</strong>
                            </button>
                        </h2> : 
                        <a className="ps-2 text-decoration-none d-inline-block btn-primary w-100" href={`/${menu.url}`}>
                            {menu.name}
                        </a>
                        }
                        
                        {menu.menus && 
                        <div className="accordion-collapse collapse" id={menu.url}>
                            <div className="accordion-body p-1 ps-2 pe-0">
                                <Menu id={props.id} menus={menu.menus}/>
                            </div>
                        </div>
                        }
                    </li>
                )
            })}
        </ul>
    )
}