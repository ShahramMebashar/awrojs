import styled from 'styled-components';
import React from 'react';

const Header = styled.header`
    color: #000;

`;

export default ({children}) => {
   return(
    <Header>
        <h1>Header title</h1>
        <div>
            {children}
        </div>
    </Header>
   );
}