import styled from 'styled-components'

export const Wrapper=styled.div`

width: 100%;
max-width: var(--maxWidth);
margin: 0 auto;
height: 35px;
background: var(--dark);
@media(max-width:768px){
    display: none;
}
`
export const Content=styled.div`
padding: 0 35px;
height: 100%;
.list{
    height: 100%;
    width: 80%;
    margin-left:auto ;
}

.list-item{
    cursor: pointer;
   transform: 0.3s all ease;
   color: var(--green);
   span{
       height: 100%;
       width: 10px;
       background: var(--green);
       color: var(--white);
       border-radius: 10%;
       padding: 2px;
   }
}

.list-item:hover{
    color: var(--red);

}


`