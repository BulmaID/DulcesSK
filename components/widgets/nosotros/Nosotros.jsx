import React from "react";

const Nosotros = () => {
  return (
    <div id="nosotros" className="flex flex-col lg:flex-row">
      <div className="flex flex-col  w-{size} lg:w-1/2 justify-center">
        <h2 className="text-center text-5xl uppercase tracking-[10px] text-indigo-800">
          Sobre Nosotros
        </h2>
        
        <p className="text-center w-1/4 text-2xl text-zinc-600 pt-6 ml-3">
          Hola! Soy Sabri, creadora del emprendimiento "Dulces SK" que tiene como
          objetivo hacer más dulce la vida de las personas.<br/> Las tardes de mates,
          los momentos con amigos y familia, las celebraciones, son parte de la
          inspiración de éste hermoso proyecto.<br/> Por eso mi objetivo es que
          disfruten de comer los mejores productos dulces artesanales hechos con
          mucho amor.<br/> A la hora de cocinar, elijo la mejor calidad en cada
          ingrediente, viendo cada detalle. Cada bocado será una explosión de
          sabor, una sinfonía de texturas y un recordatorio de los momentos más
          dulces de la vida.<br/> <br/> Te invito a descubrir todos los sabores en mi
          tienda online...</p>
      
        
        
      </div>
      <div className="w-full lg:w-1/2 h-full overflow-hidden">
        <img src="/imgs/nosotros2.png" alt="Sabrina" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default Nosotros;
