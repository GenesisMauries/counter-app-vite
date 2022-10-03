// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    const apiKey = 'dCUj0zANniXUXF0JxtuxomLPEzqIiV4m';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img);
    return url;
  } catch (error) {
    // manejo del error

    return 'No se encontro la imagen';
  }
};

getImagen();
