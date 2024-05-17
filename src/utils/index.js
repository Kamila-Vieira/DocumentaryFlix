const UUID_BASE = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    R: result ? parseInt(result[1], 16) : 255,
    G: result ? parseInt(result[2], 16) : 255,
    B: result ? parseInt(result[3], 16) : 255,
    O: 1,
    HEX: hex,
  };
}

function generateUUID() {
  let dateTime = new Date().getTime();
  return UUID_BASE.replace(/[xy]/g, function (string) {
    let randomNumber = Math.random() * 16;
    randomNumber = (dateTime + randomNumber) % 16 | 0;
    dateTime = Math.floor(dateTime / 16);
    return (string === "x" ? randomNumber : (randomNumber & 0x3) | 0x8).toString(16);
  });
}

export default {
  hexToRgb,
  generateUUID,
};
