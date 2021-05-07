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
          <p>COSA</p>
          <p>
            Phonomap è un progetto di mappatura sonora del territorio italiano.
            Una mappa dei luoghi e delle persone di questo tempo, un archivio
            online libero, accessibile e aperto di tutti i suoni provenienti da
            ogni angolo d’Italia. Ogni suono è a disposizione di chiunque lo
            voglia usare, scaricabile e gratuito attraverso la licenza Creative
            Commons sul profilo Soundcloud di Forevergreen.fm dall’apposita{' '}
            <a
              target='blank'
              href='https://soundcloud.com/forevergreenrec/sets/phonomap'
            >
              {' '}
              playlist Italian Phonomap
            </a>
            .{' '}
          </p>
          <br />
          <p>COME</p>
          <p>
            Puoi partecipare utilizzando semplicemente il tuo smartphone
            attraverso un’app di registrazione audio. Se sei in possesso di uno
            strumento più professionale, libera la tecnica! Una volta registrato
            puoi inviare il tuo suono tramite{' '}
            <a
              target='blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSe5oyK8wYeNC5HiKL3HXbsFxopf5UuFi2rP9xd3JM4nRgI75w/viewform'
            >
              il Form.{' '}
            </a>{' '}
          </p>
          <br />
          <p>CHI</p>
          <p>
            Può contribuire chiunque. C’è un suono curioso, particolare, che ha
            colto la tua attenzione? Registralo ed invialo!
          </p>
          <br />
          <p>QUANDO</p>
          <p>
            La chiamata è sempre aperta! Phonomap è nata il 1 giugno del 2020 e
            speriamo non finisca mai.
          </p>
          <br />
          <p>PERCHÈ</p>
          <p>
            Tutto il mondo ha dovuto fermarsi nel 2020. Phonomap nasce dall’idea
            di raccogliere e riordinare, nello spazio della mappa nazionale e
            dal tempo della pandemia in avanti, qualunque evento sonoro
            testimone di una inaspettata condizione per cui l'attenzione
            all'ambiente, come quello (in)sonoro durante il lockdown, si è
            imposta agli occhi e alle orecchie di tutt*.
          </p>
          <br />
          <hr style={{ borderStyle: 'dashed' }} />
          <br />
          <p>
            {' '}
            <a target='blank' href='http://forevergreen.fm/'>
              Forevergreen.fm
            </a>{' '}
            è un’associazione culturale che dal 2012 progetta in campo musicale,
            teatrale e museale attraverso festival, spettacoli, concerti e
            workshop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;