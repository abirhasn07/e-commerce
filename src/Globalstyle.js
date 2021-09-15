import { createGlobalStyle } from 'styled-components'

export const GlobalStyle=createGlobalStyle`
:root{
    --fontLarge:3.5rem;
    --fontBig:2.5rem;
    --fontMed:1.8rem;
    --font:1.3rem;
    --fontSmall:1rem;
    --fontMini:0.8rem;
    --green:#207567;
    --white:#fff;
    --black:#000;
    --darkWhite:#f2f3f8;
    --dark:#ecf0f1;
    --red:#f76867;
    --padding:35px;
    --margin:70px;
    --maxWidth:1280px;
    --boxShadow: 0px 4px 4px rgba(0,0,0,0.15);
}


*{margin: 0;
padding: 0;}

body{
    font-family: 'Poppins', sans-serif;

    html{
        margin: 0;
        padding: 0;
    }

    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
}


.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`