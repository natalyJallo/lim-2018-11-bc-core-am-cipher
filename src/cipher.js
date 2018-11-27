window.cipher = {
  encode : (offset,textElement) => {
      let cipherText = "";
      let resultEncode = "";
        for (let i = 0; i < textElement.length; i++) {
          let ubicacion = textElement.charCodeAt(i);
          if (ubicacion === 32) {
            cipherText = " ";
          }
          else if (ubicacion >= 65 && ubicacion <=90) {
            cipherText = String.fromCharCode((ubicacion - 65 + offset) % 26 + 65);
          }
          else if (ubicacion >= 97 && ubicacion <= 122){
             cipherText = String.fromCharCode((ubicacion - 97 + offset) % 26 + 97);
          }
            resultEncode += cipherText;
        }
      return resultEncode;
  },

  decode : (offsetSecond,textElementSecond) => {
      let decipher = "";
      let resultDecode = "";
        for (let j = 0; j < textElementSecond.length; j++) {
          let ubicacionDes = textElementSecond.charCodeAt(j);
          let offsetSecondNew = offsetSecond%26;
          if (ubicacionDes === 32) {
            decipher = " ";
          }
          else if (ubicacionDes >= 65 && ubicacionDes <=90) {
            decipher = String.fromCharCode((ubicacionDes + 65 - offsetSecondNew) % 26 + 65);
          }
          else if (ubicacionDes >= 97 && ubicacionDes <= 122) {
            decipher = String.fromCharCode((ubicacionDes + 97 - offsetSecondNew) % 26 + 97);
          }
          resultDecode += decipher;
        }
      return resultDecode;
    }
};
