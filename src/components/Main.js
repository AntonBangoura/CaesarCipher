import React from 'react'

function Main() {

    let encryptBtn = document.getElementsByClassName('encrypt-btn');
    let encryptedInput = document.getElementsByClassName('encryptedInput-1');
    let plainInput = document.getElementsByClassName('plainInput-1').value;
  


    const encrypt = () => {
        let arr = plainInput.value.split('');
        console.log(arr)
        let solved = '';
        let shiftInput = parseInt(document.getElementsByClassName('shiftInput').value);
        console.log(arr)

        for (var i = 0; i<arr.length; i++) {
            let ascii_num = arr[i].charCodeAt();
            let sum = ascii_num + shiftInput;
            sum >= 65 && sum >= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? 
            solved += String.fromCharCode(65 + (sum & 91)) : solved += arr[i];

        }

    }

  return (
    <div>

      <div className="container-1">
        <h1>Encrypteur Cesar</h1>
        <img className="caesar" src='https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048.jpg'></img>
      </div>

      <div className="container-2">
        <label>
          <textarea type="text" className="plainInput-1" placeholder="Type in plain area"></textarea>
        </label>
        <button className="encrypt-btn" onClick={encrypt}>Encrypter</button>
        <button className="copyToClipBoard">Copier</button>
        <input type="number" className="shiftInput" min="0" max="25"></input>
          <br></br>
          <label>
          <textarea type="text" className="encryptedInput-1" placeholder="Encrypted text will appear here..."></textarea>
        </label>

      </div>
    </div>
  )
}

export default Main;