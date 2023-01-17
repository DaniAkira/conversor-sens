function convert() {
    const select = window.document.querySelector('#gameFrom');
    const gameFrom = select.options[select.selectedIndex].text;
    const select2 = window.document.querySelector('#gameTo');
    const gameTo = select2.options[select2.selectedIndex].text;
    const senstxt = window.document.querySelector('#sens');
    const sensNum = Number(senstxt.value);
    const result = document.getElementById("sensFinal");

    if(sensNum > 0) {
        switch (gameFrom){
            case 'CS:GO':
                if(gameTo == 'Valorant') {
                    let sensVava = (sensNum / 3.1818)
                    result.innerHTML = (+sensVava).toFixed(4);
                }
                else if(gameTo == 'Apex Legends') {
                    result.innerHTML = +sensNum;
                }
                else if(gameTo == 'Fortnite') {
                    let sensFort = (sensNum * 3.9605)
                    result.innerHTML = (+sensFort).toFixed(4);
                }
                else if(gameTo == 'Overwatch 2') {
                    let sensOver = (sensNum * 3.3333)
                    result.innerHTML = (+sensOver).toFixed(4);
                }
                else if(gameTo == 'Rainbow Six Siege') {
                    let sensRain = (sensNum * 3.8387)
                    result.innerHTML = (+sensRain).toFixed(4);
                }
                else if(gameTo == 'Team Fortress 2') {
                    let sensTeam = (sensNum / 3.1818)
                    result.innerHTML = (+sensTeam).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;

            case 'Valorant':
                if(gameTo == 'CS:GO') {
                    let sensCsgo = (sensNum * 3.1818)
                    result.innerHTML = (+sensCsgo).toFixed(4);
                }
                else if(gameTo == 'Apex Legends') {
                    let sensApex = (sensNum * 3.182)
                    result.innerHTML = (+sensApex).toFixed(4);
                }
                else if(gameTo == 'Fortnite') {
                    let sensFort = (sensNum * 12.6015)
                    result.innerHTML = (+sensFort).toFixed(4);
                }
                else if(gameTo == 'Overwatch 2') {
                    let sensOver = (sensNum * 10.5820)
                    result.innerHTML = (+sensOver).toFixed(4);
                }
                else if(gameTo == 'Rainbow Six Siege') {
                    let sensRain = (sensNum * 12.2175).
                    result.innerHTML = (+sensRain).toFixed(4);
                }
                else if(gameTo == 'Team Fortress 2') {
                    let sensTeam = (sensNum * 3.1818)
                    result.innerHTML = (+sensTeam).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;

            case 'Apex Legends':
                if(gameTo == 'CS:GO') {
                    result.innerHTML = +sensNum;
                }
                else if(gameTo == 'Valorant') {
                    let sensVava = (sensNum / 3.182)
                    result.innerHTML = (+sensVava).toFixed(4);
                }
                else if(gameTo == 'Fortnite') {
                    let sensFort = (sensNum * 3.9605)
                    result.innerHTML = (+sensFort).toFixed(4);
                }
                else if(gameTo == 'Overwatch 2') {
                    let sensOver = (sensNum * 3.3333)
                    result.innerHTML = (+sensOver).toFixed(4);
                }
                else if(gameTo == 'Rainbow Six Siege') {
                    let sensRain = (sensNum * 3.8387)
                    result.innerHTML = (+sensRain).toFixed(4);
                }
                else if(gameTo == 'Team Fortress 2') {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;

            case 'Fortnite':
                if(gameTo == 'CS:GO') {
                    let sensCsgo = (sensNum / 3.9695)
                    result.innerHTML = (+sensCsgo).toFixed(4);
                }
                else if(gameTo == 'Valorant') {
                    let sensVava = (sensNum / 12.6015)
                    result.innerHTML = (+sensVava).toFixed(4);
                }
                else if(gameTo == 'Apex Legends') {
                    let sensApex = (sensNum / 3.9605)
                    result.innerHTML = (+sensApe).toFixed(4);
                }
                else if(gameTo == 'Overwatch 2') {
                    let sensOver = (sensNum / 1.188)
                    result.innerHTML = (+sensOver).toFixed(4);
                }
                else if(gameTo == 'Rainbow Six Siege') {
                    let sensRain = (sensNum / 1.0315)
                    result.innerHTML = (+sensRain).toFixed(4);
                }
                else if(gameTo == 'Team Fortress 2') {
                    let sensTeam = (sensNum / 3.9605)
                    result.innerHTML = (+sensTeam).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;

            case 'Overwatch 2':
                if(gameTo == 'CS:GO') {
                    let sensCsgo = (sensNum / 3.3333)
                    result.innerHTML = (+sensCsgo).toFixed(4);
                }
                else if(gameTo == 'Valorant') {
                    let sensVava = (sensNum / 10.5820)
                    result.innerHTML = (+sensVava).toFixed(4);
                }
                else if(gameTo == 'Apex Legends') {
                    let sensApex = (sensNum / 3.3333)
                    result.innerHTML = (+sensApex).toFixed(4);
                }
                else if(gameTo == 'Fortnite') {
                    let sensFort = (sensNum * 1.188)
                    result.innerHTML = (+sensFort).toFixed(4);
                }
                else if(gameTo == 'Rainbow Six Siege') {
                    let sensRain = (sensNum * 1.1520)
                    result.innerHTML = (+sensRain).toFixed(4);
                }
                else if(gameTo == 'Team Fortress 2') {
                    let sensTeam = (sensNum * 3.3333)
                    result.innerHTML = (+sensTeam).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;

            case 'Rainbow Six Siege':
                if(gameTo == 'CS:GO') {
                    let sensCsgo = (sensNum / 3.8387)
                    result.innerHTML = (+sensCsgo).toFixed(4);
                }
                else if(gameTo == 'Valorant') {
                    let sensVava = (sensNum / 12.2175)
                    result.innerHTML = (+sensVava).toFixed(4);
                }
                else if(gameTo == 'Apex Legends') {
                    let sensApex = (sensNum / 3.8387)
                    result.innerHTML = (+sensApex).toFixed(4);
                }
                else if(gameTo == 'Fortnite') {
                    let sensFort = (sensNum * 1.0315)
                    result.innerHTML = (+sensFort).toFixed(4);
                } 
                else if(gameTo == 'Overwatch 2') {
                    let sensOver = (sensNum / 1.1520)
                    result.innerHTML = (+sensOver).toFixed(4);
                }
                else if(gameTo == 'Team Fortress 2') {
                    let sensTeam = (sensNum / 3.8387)
                    result.innerHTML = (+sensTeam).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;

            case 'Team Fortress 2':
                if(gameTo == 'CS:GO') {
                    let sensCsgo = (sensNum / 1)
                    result.innerHTML = (+sensCsgo).toFixed(4);
                }
                else if(gameTo == 'Valorant') {
                    let sensVava = (sensNum / 12.2175)
                    result.innerHTML = (+sensVava).toFixed(4);
                }
                else if(gameTo == 'Apex Legends') {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                else if(gameTo == 'Fortnite') {
                    let sensFort = (sensNum * 3.9605)
                    result.innerHTML = (+sensFort).toFixed(4);
                }
                else if(gameTo == 'Overwatch 2') {
                    let sensOver = (sensNum * 3.3333)
                    result.innerHTML = (+sensOver).toFixed(4);
                }
                else if(gameTo == 'Rainbow Six Siege') {
                    let sensRain = (sensNum * 3.8387)
                    result.innerHTML = (+sensRain).toFixed(4);
                }
                else {
                    result.innerHTML = (+sensNum).toFixed(4);
                }
                break;
        }
    }
    else {
        document.getElementById("sensFinal").innerHTML = "Sua sens tem que ser maior que 0 noia"
    }
}