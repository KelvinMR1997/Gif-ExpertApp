// getGifs is an aync function that recieves an argument  (category ) that argument will be inside of our url
// inside on an encodeURI function  then the  const "resp" do a fetch of our url api, we'll be able to get the data from resp. then const "gifs" wil do a map of img (data.img) reurning id, title, and url at the same time the function getGifs return gis who has the data.
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6J1y4L6gJtdEtdtJVFPCEVlivVda9uIM&q=${encodeURI(
    category
  )}&limit=10`;

  const resp = await fetch(url);

  const { data } = await resp.json({
    //   ok: true,
    //   resp,
  });

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
    //   El signo de interrogación es para preguntar si existe la imagen.
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
