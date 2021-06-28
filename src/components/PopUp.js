import React from 'react';
import './PopUp.css';

// inserire contenuti
const PopUp = ({ visibility }) => {
  var nomeClasse;
  if (visibility === true) {
    nomeClasse = 'slideIn';
  } else {
    nomeClasse = 'slideOut';
  }
  return (
    <div className={nomeClasse + ' popupContainer'}>
      <div id='popUp'>
        <div id='testoPopUp'>
          <p>COS'{'è'.toUpperCase()} PHONOMAP?</p>
          <p>
            Phonomap è una mappatura sonora del territorio italiano. Racconta un
            arco temporale esteso attraverso il punto di vista e di ascolto
            delle persone. Chiunque può contribuire, anche tu.
            <br />
            Ogni suono raccolto è a disposizione di chiunque lo voglia ascoltare
            ed utilizzare. È scaricabile gratuitamente dal profilo Soundcloud di
            Forevergreen.fm all’apposita playlist .
            <a
              target='blank'
              href='https://soundcloud.com/forevergreenrec/sets/phonomap'
            >
              playlist Italian Phonomap
            </a>
            .
          </p>
          <br />
          <p>POSSO FARLO ANCH'IO?</p>
          <p>
            Può contribuire chiunque. C’è un suono curioso, particolare, che ha
            attirato la tua attenzione? Qualcosa che stimola in te un'emozione
            forte, bella o brutta? Qualcosa a cui ti sei affezionat*? Registralo
            ed invialo!
          </p>
          <p>COME PARTECIPARE</p>
          <p>
            Puoi partecipare utilizzando semplicemente il tuo smartphone
            attraverso un’app di registrazione audio. Se sei però in possesso di
            uno strumento più professionale, sentiti liber* di utilizzarlo!
          </p>
          <p>
            Puoi partecipare utilizzando semplicemente il tuo smartphone
            attraverso un’app di registrazione audio. Se sei però in possesso di
            uno strumento più professionale, sentiti liber* di utilizzarlo! Ti
            chiediamo inoltre: - una fotografia del punto in cui effettui la
            registrazione <br />
            - una descrizione del suono <br />
            - il tuo nome o nickname
            <br />
            Quì trovi tutte le informazioni necessarie:
            <br />
            <a
              target='blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSe5oyK8wYeNC5HiKL3HXbsFxopf5UuFi2rP9xd3JM4nRgI75w/viewform'
            >
              Form di partecipazione
            </a>{' '}
          </p>
          <p>C'È UN TERMINE?</p>
          <p>
            La chiamata è sempre aperta! Phonomap è nata il 1 giugno del 2020 e
            speriamo non finisca mai.
          </p>
          <p>PERCHÉ ESISTE?</p>
          <p>
            Tutto il mondo ha, in qualche modo, dovuto fermarsi nel 2020.
            L'inaspettata condizione creatasi ha stimolato una maggiore
            attenzione all'ambiente, in particolare quello (in)sonoro del
            lockdown.
            <br />
            Phonomap nasce dall’idea di raccogliere e riordinare nello spazio di
            una mappa nazionale gli eventi sonori dal tempo della pandemia in
            avanti.
            <br />I suoni raccolti possono essere ascoltati, scaricati, remixati
            e utilizzati da chiunque.
            <br />
            Leggi di più sulle licenze{' '}
            <a
              target='blank'
              href='https://creativecommons.org/faq/#what-are-creative-commons-licenses'
            >
              Creative Commons
            </a>{' '}
            applicate a Phonomap, ovvero “BY” e “NC”.
          </p>
          <hr style={{ borderStyle: 'dashed' }} />
          <br />
          <p>
            <p>COM'È NATA PHONOMAP?</p>
            <p>
              Phonomap è un progetto di{' '}
              <a target='blank' href='http://forevergreen.fm/'>
                Forevergreen.fm
              </a>
              , un’associazione culturale che dal 2012 progetta in campo
              musicale, teatrale e museale attraverso festival, spettacoli,
              concerti e workshop.
            </p>
            <p>
              La scintilla è partita nel 2020 da{' '}
              <a
                target='blank'
                href='http://www.trallaleronline.net/2019/09/25/intervista-a-rinaldo-marti/'
              >
                Rinaldo Marti
              </a>
              , docente di Musica atipico, dedito all’ascolto meditativo, che ha
              proposto l’idea di una mappa sonora inclusiva.
            </p>
            <p>
              Lo sviluppo di questa mappa è stato possibile grazie al lavoro
              dell'artista multiforme{' '}
              <a
                target='blank'
                href='http://formeuniche.org/author/carlo-gambirasio/'
              >
                Carlo Gambirasio
              </a>
              , fondatore di StudioEO a Milano.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
