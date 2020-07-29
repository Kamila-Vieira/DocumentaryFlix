import React from 'react';

function ButtonLink(props){
    //props = {className = "O que passar!", href = "/"}
    console.log(props)
    return(
       
        <a className={props.className} href={props.href}>Novo Vídeo</a >
    );

}

export default ButtonLink;