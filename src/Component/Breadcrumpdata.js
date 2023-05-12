import React from 'react'
import { Breadcrumb } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";

export const Breadcrumpdata = ({ page }) => {
    return (
        <Breadcrumb>
            
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
