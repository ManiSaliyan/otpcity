const NetNum = () => {
    async function ak (){
        let p_ = document.querySelector('#p-10');
        let response = await fetch('./data/netherland.json')
        let res = await response.json();
        let view = res.netherland.map((a) => {
            return (`<div class="secret-box">
        <div class="secret">
          <div class="phone">Number: +${a.phone_number}</div>
          <div class="phone">Secret ID: ${a.id}</div>
      </div>
      </div>`)}).join('');
      p_.innerHTML = view;
    }
    ak();
    

    const button = document.getElementById('button');
    const button_r = document.getElementById('button-r');
    const input = document.getElementById('mani-num');
    const tb = document.getElementById('tbod');
    console.log(tb);
    async function getinfo(){
      if(!input.value === ''){ return }
      let url = await 'https://otpcity.xyz/id/'+input.value;
      let fetchId = await fetch(url)
      let response = await fetchId.json();
      let hu = await response.data; 
      let by = await hu[1];
      let jusr = await by.phone_number;
      const pd = document.getElementById('p-data');
      const copyText = jusr;
      const cbut = await document.getElementById('copy');
      async function mandu(){
        
          navigator.clipboard.writeText(copyText);
          cbut.insertAdjacentElement('afterbegin', '<i class="fas fa-check"></i>');
            setTimeout(() => {
              document.getSelection().removeAllRanges();
              cbut.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000)
        }
      let just = `<div class="copy-king"><div class="copy-bot">
          <a class="y-num">Your Number :- +${jusr}</a>
          <a class="y-con">Your Country :- Netherland</a>
          </div>
          <div class="copy-end">
          <button id="copy" onclick="${mandu()}"><i class="fas fa-copy"></i></button></div></div>`;
      pd.innerHTML = just;
      let otps = response.data.map((s) => { return (
                               ` <tr>
          <td>${s.from}</td>
          <td>${s.message}</td>
          <td>${s.created_at}</td>
        </tr>`
    )}).join('');
    tb.innerHTML = otps;

      
      
      }
      button.addEventListener('click', getinfo);
      button_r.addEventListener('click', getinfo);
}
NetNum();