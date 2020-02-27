function loadJuJuCard(url, funct) {
  const scriptURL = url && String(url).trim() ? String(url).trim() : null;
  const scriptCallback =
    funct && typeof funct === "function" ? funct : () => {};

  if (scriptURL) {
    const script = document.createElement("script");
    script.src = scriptURL;
    script.id = scriptURL;
    document.body.appendChild(script);

    script.onload = scriptCallback;
  }
}

export default loadJuJuCard;
