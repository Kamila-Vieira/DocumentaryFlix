import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){

    return(
        <PageDefault>
            <h1>Cadastro de Vídeos</h1>
            <p>
                <form>
                    <input className="cadastro" type="text" placeholder="Título" required name="Título"/><br/>
                    <input className="cadastro" type="url" placeholder="Link do Vídeo" required name="Link do Vídeo"/><br/>
{/*                     <input className="cadastro" type="url" placeholder="Link da imagem do Vídeo" required name="Link da imagem do Vídeo"/><br/>
 */}                    <label list="category">Escolha uma Categoria: <br/>
                            <input className="cadastro" /><br/>
                        </label>
                    <textarea className="cadastro" rows = "4"  cols = "40" placeholder="Descrição" required name="Descrição"/><br/>
                    <input type="submit"/>
                    <input type="reset"/>

                </form>
                {/* <button type="submit">
                    Cadastrar
                </button>
                <button type="reset">
                    Limpar
                </button> */}
            </p>
            
            <Link className="ButtonLink" to="/cadastro/categoria">
                Cadastrar Nova Categoria
            </Link>
        </PageDefault>
    )
  }

  export default CadastroVideo;