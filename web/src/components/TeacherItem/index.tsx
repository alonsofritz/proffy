import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/37676673?s=460&u=1e8a664721c540021c5d42c52911b2030def8035&v=4" alt="Alonso Fritz"/>
                <div>
                    <strong>Alonso Fritz</strong>
                    <span>Unity</span>
                </div>
            </header>

            <p>
                Estudante de Programação, entusiasta em desenvolvimento de jogos.
                <br /> <br />
                Aprendendo e Ensinando desenvolvimento de jogos com Unity Engine.
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ FREE</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;