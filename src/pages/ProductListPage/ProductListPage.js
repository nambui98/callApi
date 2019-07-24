import React from "react";
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import {actFetchProductsRequest, actDeleteProductRequest} from '../../actions/index';

class ProductListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    onDelete=(id)=>{
        this.props.onDeleteProduct(id)
    }
    render() {
        var {products}=this.props;
        return (
        <div className="col-12">
            <div className="row justify-content-start">
                <div className="col-1">
                    <Link to="/product/add" className=" btn btn-primary ml-100">Thêm Sản Phẩm</Link>
                </div>
            </div>
            <div className="row">
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        </div>
        );
    }
    showProducts=(products)=>{
        var result=null;
        if(products.length>0){
            result=products.map((product, index)=>{
                return <ProductItem product={product} key={index} index={index} onDelete={this.onDelete}/>
            })
        }
        return result
    }
}

const mapStateToProps=state=>{
    return{
        products:state.products
    }
}

const mapDispatchToProps=(dispatch, props)=>{
    return{
        fetchAllProducts:()=>{
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct:(id)=>{
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductListPage);
