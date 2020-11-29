import styled from 'styled-components';


export const ContainerRoot = styled.div`
    position:absolute;
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;

  .bg-profile{
      height:90vh;
      width: 100vw;
      object-fit: cover;
      position: absolute;
      z-index:-1;
  }
`;

export const ContainerHome = styled.main`
    display:flex;
    align-items: center;
    justify-content:center;
    background: linear-gradient(180deg, rgba(150, 143, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
    display:flex;
    height:90vh;
    width: 100vw;
    position:relative;
    animation-name: animated-gradient;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    
    


    @keyframes animated-text {
        33%  {color:grey}
        66%  {color:white}
        100%  {color:black}
    }


    .container-icons{

        display: flex;
        flex-direction: column;
        align-items: center;
        position:absolute;
        left:0;
        margin-left: 16px;
        /* margin-bottom:20px; */
        > a button{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            width: 80px;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            transition: .2s;
            color: white;

            &:hover{
                background-color: white;
                border-color: var(--primaryColor);
                color: var(--primaryColor);
            }
        }
        > a  + a {
            margin-top: 20px;
        }

        @media(max-width:1024px){
            top:60vh;
            > a button{
                padding:12px;
                width:50px;
                height:50px;
            }
        }
    }

    .container-texts-home{
        display: flex;
        flex-direction: column;
        align-items:center;
        
        h2, h1{
            color: white;
            font-weight: 400;
            transform: translateY(-100px);
        }
        h2{
            font-size:30px;
            margin-bottom:70px;
        }
        h1{
            font-size:60px;
        }


        .role-down{
            
            position:absolute;
            bottom:0;
            display:flex;
            flex-direction:column;
            align-items:center;
            margin-bottom:20px;
            animation-name: animated-text;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }

        @media(max-width:1024px){

        h1,h2{
            transform: translateY(-70px);
        }    
        h2{
            font-size:20px;
            margin-bottom:60px;

        }

        h1{
            font-size:30px;
            text-align:center;

        }
    }
    }  
`;

export const ContainerAbout = styled.div`
    display:flex;
    justify-content: space-between;
    width:100vw;
    
    .container-text-about{
        margin-top:100px;
        margin-bottom:30px;
        margin-right:200px;
        width: 45vw;
        #title-container{
            display:flex;
            align-items:center;
            justify-content:center;
            background-color:var(--primaryColor);
            height:90px;
            width:45vw;
            color:white;
            margin-bottom:80px; 
            >p{
                font-size:30px;
                font-weight:bold;

                @media(min-width:1400px){
                    font-size:45px;
                
                }
            }
            
            

            @media(max-width:1024px){
                width:40vw;
                
            }
            
            @media(max-width:600px){
                width:80vw;
                


            }

            

        }
        #title-content{
            margin-left:60px;
            >p{
                font-size:30px;
                    
                @media(max-width:1024px){
                        font-size:20px;
                        margin-right:100px;
                    }
                    
                    @media(max-width:600px){
                        font-size:20px;
                        margin-right:50px;
                    }   
            }

        }

        @media(max-width:1024px){
            width:100vw;
            margin-right:0;
            
        }
    }

    .container-photo{
        margin-top:120px;
        margin-bottom:30px;
        #container-image{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            height:80vh;
            /* width:500px; */
            background-color:var(--primaryColorLight);
            >img{
                
                width:90%;
                height:90%;
                object-fit:cover;
                border-radius:32px 0 0 0;
            }

            @media(max-width:1024px){
                width:none;
                height:150vh;

            }
            @media(min-width:1024px){
                height:150vh;
            }
        }
        @media(max-width:1024px){
            margin-top:40px;
        }
    }

    @media(max-width:1024px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    
`
