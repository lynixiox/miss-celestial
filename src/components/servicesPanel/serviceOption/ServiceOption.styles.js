import styled from "@emotion/styled";

export const ServiceOptionContainer = styled.div`
padding-top: 50px;
display: inline-block;
vertical-align: middle;
-webkit-transform: perspective(1px) translateZ(0);
transform: perspective(1px)translateZ(0);
box-shadow: 0 0 1px rgba(0, 0, 0, 0);
-webkit-transition-duration: 0.3s;
transition-duration: 0.3s;
-webkit-transition-property: transform, box-shadow;
transition-property: transform, box-shadow;

    &&:hover{
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const ServiceOptionImage = styled.div`

`

export const ServiceOptionLabel = styled.div`
    font-size: 20px;
    color: white;
`