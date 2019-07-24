import React from "react";
import {Route, Link} from 'react-router-dom';
import './Menu.css'
const menus=[
    {
        name:'Trang Chủ',
        to:'/',
        exact:true
    },
    {
        name:'Quản Lý Sản Phẩm',
        to:'/product-list',
        exact:false
    },
]

const MenuLink=({label, to, activeOnlyWhenExact})=>{
    return(
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active=match? 'active':'';
                return(
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
            />
    )
}

class Menu extends React.Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="# ">
                    NamBui
                </a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
    showMenus=(menus)=>{
        var result=null;
        if(menus.length>0){
            result=menus.map((menu, index)=>{
                return <MenuLink
                            key={index}
                            label={menu.name}
                            to={menu.to}
                            activeOnlyWhenExact={menu.exact}
                        />
            })
        }
        return result;
    }
}
export default Menu;
