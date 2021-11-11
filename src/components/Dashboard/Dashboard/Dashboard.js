import React from 'react';

import AddReview from '../AddReview/AddReview';
import MyOrder from '../MyOrder/MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import './Dashboard.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts/ManageProducts';

const Dashboard = () => {

    let { path, url } = useRouteMatch();

    const { logout, admin } = useAuth();


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 h-100">
                    <div className="dashboard-sidebar bg-light">
                        <h5 className="text-center">Dashboard</h5>
                        <ul>

                            {!admin &&
                                <div>
                                    <Link to={`${url}`}>
                                        <li className="dashboard-menu">My order</li>
                                    </Link>

                                    <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu">Payment</li>
                                    </Link>
                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu">Add Review</li>
                                    </Link>
                                </div>
                            }


                            {admin &&
                                <Link to={`${url}/manageAllOrders`}>
                                    <li className="dashboard-menu">Manage all orders</li>
                                </Link>
                            }
                            {admin &&
                                <Link to={`${url}/addProduct`}>
                                    <li className="dashboard-menu">Add a product</li>
                                </Link>
                            }
                            {admin &&
                                <Link to={`${url}/makeAdmin`}>
                                    <li className="dashboard-menu">Make admin</li>
                                </Link>
                            }
                            {admin &&
                                <Link to={`${url}/manageProducts`}>
                                    <li className="dashboard-menu">Manage Products</li>
                                </Link>
                            }



                            <Link to="/">
                                <button className="btn btn-primary mt-5" onClick={logout}>Logout</button>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/review`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;