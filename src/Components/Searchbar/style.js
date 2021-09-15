import styled from 'styled-components'

export const Wrapper=styled.div`

width: 100%;
max-width: var(--maxWidth);
margin: 15px auto;
height: 50px;

@media(max-width:768px){
    
}
`

export const Content=styled.div`


padding: 0 35px;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;

.logo{
    width: 25%;
    img{
        width: 130px;
    }
}
.input{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    input{
        width: 80%;
        height: 80%;
        border: 1px solid var(--green);
        border-radius: 5px;
    
        ::placeholder{
            font-size: var(--fontMini);
            padding-left: 15px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
        }
    }
    span{
        width: 10%;
        height: 80%;
        background: var(--green);
        text-align: center;
        line-height: 40px;
        border: 1px solid var(--green);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: var(--white);
        cursor: pointer;
        margin-left: -5px;
    }
    span:hover{
        border: 1px solid var(--red);
        background:var(--red)    }
    }
    span:hover>input{
        
        border: 1px solid var(--red);
}
.login{
    width: 25%;
    justify-content: center;
    .buttons{
        margin-right: 20px;
        a{
            color: var(--green);
            font-weight: 500;
        }
        a:hover{
            color: var(--red);
        }
    }
    .cart{
        color: var(--green);
        font-size: var(--fontMed);
        position: relative;
        cursor: pointer;
        p{
            font-size: 1rem;
           position: absolute;
           top: -10px;
           font-weight: 700;
           left: 25px;
           height: 25px;
           width: 25px;
           background: coral;
           border-radius: 50%;
           text-align: center;
           z-index: -1;
           color: white;
           line-height: 25px;
           
        }
    }
}

@media(max-width:768px){
    padding: 0 15px;
    justify-content: space-around;
    .logo{
        width: 5%;
        margin-right: 20px;
        img{
            width: 75px;
        }
    }
    .input{
        width: 50%;
        height: 70%;

        ::placeholder{
            padding-left: 0;
            font-weight: 100;
            color: red;
        }
        span{
            width: 10%;
            line-height: 30px;
         
        }
    }

    .login{
        width: 1%;
        .buttons{
            display: none;
        }
        .cart{
            font-size:var(--font)
            ;
            margin-left: -30px;
        }
    }
}
`