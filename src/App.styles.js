import styled from "@emotion/styled";

export const App = styled.div`

${props => props.isMobile && `overflow: clip;`}

`