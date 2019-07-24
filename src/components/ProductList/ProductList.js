import React from "react";


class ProductList extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="card text-left">
                
                <div className="card text-left">
                    <div className="card-header bg-primary ">
                        <h3 className="card-title text-white">Danh Sách Sản Phẩm</h3>
                        </div>
                        <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}
export default ProductList;
