

window.addEventListener("load",checkinternetconnection)

function checkinternetconnection(){
    const statusText = document.getElementById('statusText')
    const Ipaddresstext = document.getElementById('ipaddresstext')
    const networkstrengthtext = document.getElementById('networkstrengthtext')
    statusText.textContent = 'checking......'

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response) =>response.json())
        .then((data)=>{
            Ipaddresstext.textContent = data.ip;
            statusText.textContent = 'connected'

            const connection = navigator.connection;
            const networkstrength = connection ? connection.downlink + 'Mbps':'unknown';
            networkstrengthtext.textContent = networkstrength;



        })
        .catch(()=>{
            statusText.textContent = 'Disconnected';
            Ipaddresstext.textContent = '-'
            networkstrengthtext.textContent ='-'
        })


    }else{
        statusText.textContent = 'Disconnected';
        statusTipaddresstextext.textContent = '-'
        statusnetworkstrengthtextText.textContent ='-'
    }


}