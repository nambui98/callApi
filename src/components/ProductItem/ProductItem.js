import React from "react";
import {Link} from 'react-router-dom';

class ProductItem extends React.Component {

    onDelete=(id)=>{
        if(confirm('Bạn có chắc chắn muốn xoá không?')){//eslint-disable-line
            this.props.onDelete(id)
        }
    }
    render() {
        var {product, index}=this.props;
        var statusName=product.status?"Còn hàng":"Hết hàng";
        var statusClass=product.status?"badge-warning":"badge-secondary";
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge ${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success">Sửa</Link>
                    <button type="button" className="btn btn-danger ml-2" onClick={()=>this.onDelete(product.id)}>Xoá</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
