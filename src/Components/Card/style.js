import styled from 'styled-components';

export const Wrapper=styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
width: 100%;
overflow: hidden;

`
export const Content=styled.div`
/* background: red; */
padding: 20px 35px;
margin: 10px 15px;

.card{
  
  margin: 10px 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  border: 1px solid var(--dark);
  position: relative;
overflow: hidden;
  img{
    margin: 0 auto;
    width: 150px;
  }
  p{
    width: 80%;
    font-size: var(--fontMini);
    margin: 0 auto;
  }

  strong{
    width: 80%;
    margin: 0 auto;
    color: var(--green);
  }
  .review{
    width: 80%;
    margin:0 auto;
  }

  .cart{
    position: absolute;
    top: 10px;
    right:-100%;
    font-size: var(--fontMed);
    opacity: 1;
    text-align: left;
    color: grey;
    cursor: pointer;
    transition: 0.4s ease-in;

    
  
  .icon:hover{
    color: var(--green);
   
    
  }

  
  }





    
 
}

.card:hover>.cart{
  right: 10px;
}

.card:hover{
  box-shadow: var(--boxShadow);
}
`