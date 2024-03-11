import "./App.css";
import HeaderCrow from "./components/HeaderCrow";
import SmokeBackground from "./components/smoke/SmokeBackground";
// import MarkdownRenderer from "./components/MarkdownRenderer";

function App() {
  return (
    <div className="flex flex-col w-full h-full items-center font-serif ">
      <div className="w-5/6 bg-transparent ">
        <HeaderCrow />
      </div>
      <SmokeBackground />
      <div className="w-full bg-transparent text-gray-200 w-full lg:w-1/2 p-3">
        {/* title of the poem, a bit bigger */}
        <h1 className="text-4xl text-center p-10">Une journée d’été</h1>
        <div className="flex flex-col text-left text-2xl space-y-3 ">
          <p>Je suis une journée d’été,</p>
          <p>léger comme le repas de midi</p>
          <p>Les mouettes chient sur les corps nus des plages</p>
          <p>Ils se font bronzer par le soleil de midi, mais ils sont froids</p>
          <p>
            Ce n’est pas seulement des meules d’algues qui trainent dans l’air
          </p>
          <p>Il y a aussi un air aigre qui y est venu ce matin</p>
          <p>
            La mer est lisse comme le scellofrais au-dessus de la salade aux
            patates
          </p>
          <p>Il y a les pêcheurs, moins d’habitude,</p>
          <p>
            Dont los crochets sont beaucoup plus larges, dont les cannes à
            pêches beaucoup plus tendues que d’habitude.
          </p>
          <p>
            Il y a une pêcheuse dont les rides du front ramassent l’orage de la
            nuit dernière
          </p>
          <p>
            Il y a l’église du village dont l’horloge irrégulier frappe les
            corbeaux
          </p>
          <p>
            Et plus en plus de corps et de canots de sauvetages déchirés qui se
            font tirer sur le sable
          </p>
          <p>Et le monsieur pâle de pompes funèbres qui rit avec lui-même</p>
          <p>
            Et c’est le déjeuner : les côtelettes commandées deviennent froides
            dans la sauce blanche, avec les patates frites et de l’épinard
          </p>
          <p>Dans l’auberge qui est si vide</p>
          <p>Les serviettes jetées sur les assiettes</p>
          <p>Les fourchettes tranchées dans la viande</p>
          <p>A travers les stores moitié fermés</p>
          <p>s’élève le gaz de la bière tiède au ciel bleu ouvert</p>
          <p>une glace jetée sur la bitume, naufragée dans le cornet</p>
          <p>
            Plus en plus de corps cuits s’empilent encore sur les dunes vertes
          </p>
          <p>expulsés au rivage</p>
          <p>Je suis une journée d’été</p>
          <p>Je suis le nuage sur le ciel immaculé</p>
        </div>
        <h1 className="text-4xl text-center p-10 mt-20">
          La Cantina del Alma (El Hogar de Ismael)
        </h1>
        <div className="flex flex-col text-left text-2xl space-y-3 ">
          <p>Yo soy el chamán sin más sambuca</p>
          <p>con el corazón desgastado</p>
          <p>y la mano loca</p>
          <p>en el bar que no conoce este mundo</p>
          <p>afuera</p>
          <p>El útero oscuro de donde los fetos</p>
          <p>salen a gatas al baño</p>
          <p>del fundo</p>
          <p>Donde los gritos de nacimientos son</p>
          <p>Erupciones de vómito</p>

          <p>He sentido las lágrimas batidas de mujeres embarazadas,</p>
          <p>que,</p>
          <p>en un golpe demente de vergüenza,</p>
          <p>Han</p>
          <p>agarrado la botella de tequila</p>
          <p>ya</p>
          <p>vacía — para quitarse el malo</p>
          <p>de dentro del estómago</p>
          <p>–– Un gusano en el mezcal.</p>

          <p>¡Esta cantina del alma! — ¿quién es el dueño?</p>
          <p>¡Esta mente no se calma! — ¿quién es el dueño?</p>

          <p>Y yo, para contestar a tu pregunta, yo</p>
          <p>Estoy esperando aquí a mi espíritu</p>
          <p>Llamando, llamando</p>
          <p>Pero el barman dice que no es posible</p>
          <p>Pidiendo, pidiendo</p>
          <p>Digo: “¡darme más de las aguas espirituales,</p>
          <p>por favor!”</p>
          <p>Pero el señor no quiere,</p>
          <p>no quiere</p>
          <p>Me dice que</p>
          <p>no hay espíritu después de las dos.</p>

          <p>¡Esta cantina del alma! — ¿quién es el dueño?</p>
          <p>¡Esta mente no se calma! — ¿quién es el dueño?</p>

          <p>Y hay una muchacha allí atrás,</p>
          <p>sentada en la esquina extrema</p>
          <p>Que come su café con el dedo</p>
          <p>Que tiene una cabeza como un sueño</p>
          <p>Y en el techo, está su sombra que imita un caimán amarillo</p>
          <p>Que habla maya con los ojos míos</p>
          <p>Me susurra abajo de los juncos de las lámparas</p>
          <p>Le ofrecí una palabra a la muchacha,</p>
          <p>una mesa aquí, no menos, no más</p>
          <p>Pero sólo me ha burlado con sus fantasmas</p>
          <p>Y así, se esfumó en el humo oscuro de sus alas</p>

          <p>¡Esta cantina del alma! — ¿quién es el dueño?</p>
          <p>¡Esta mente no se calma! — ¿quién es el dueño?</p>

          <p>Mi boca es una almeja nerviosa</p>
          <p>Se abre y cierra su palpo verde en la barra grasosa</p>
          <p>Quisiera irme tal vez muy pronto, muy lejos</p>
          <p>Pero los dioses dicen que mi contrato no acepta renuncia</p>
          <p>Quisiera irme tal vez muy pronto al país del más allá</p>
          <p>pero los cuidadores del cielo deportan</p>
          <p>a los que no les traen espíritus…</p>

          <p>pinches espíritus…</p>

          <p>¡Esta cantina del alma! — ¿quién es el dueño?</p>
          <p>¡Esta mente no se calma! — ¿quién está al dentro?</p>

          <p>Todos estos líquidos gritan mucho sueño, mucho sueño...</p>

          <p>Yo soy el indio coyotazo ladrando debajo de la mesa</p>
          <p>Con la falta de whiskey y la pata espástica</p>
          <p>Comiendo el suelo profundo,</p>
          <p>comiendo, comiendo</p>
          <p>la sopa de linóleo, fetos, cascos y sangre</p>
          <p>de la cantina cuyo útero gotea</p>
          <p>a través de las ventanas que se han manchado</p>
          <p>con el filo de la alborada</p>
          <p>Muy sagrado, muy sangrado…</p>

          <p>Pero</p>
          <p>ya</p>
          <p>está tarde amigo</p>
          <p>el Señor dice que</p>
          <p>tengo que levantarme,</p>
          <p>dice que</p>
          <p>ya es la hora</p>
          <p>tengo que volver a mi</p>
          <p>casita</p>

          <p>si</p>
          <p>tuviera.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
