// for get all match list
//let url = "https://api.cricapi.com/v1/matches?apikey=c001618f-cade-4110-b0de-df212a4a765b&offset=0";
let url = "https://api.cricapi.com/v1/cricScore?apikey=8f668344-ae5d-4918-af0e-7eedce4c213f";

let mainarrangement = document.querySelector('#mainarrange');

       fetch(url)
       .then((response) => {
         response.json().then((data) => {
           for (result of data.data) {
             console.log(result);
             createcardview(result);
           }
         });
       })
       .catch((error) => {
         console.error('Error:', error);
       });

function nomatch() {
  let element = document.getElementsByClassName("no-match");
  element[0].style.display = "none";
}

function createcardview(result) {
    if(result.ms == "live" && result.matchType != "test" 
        && !result.status.includes("Match not started") 
          && !result.status.includes("No result"))
    {
      nomatch();
      let matchcard = document.createElement('div');
      matchcard.classList.add('matchcard');
      matchcard.id = result.id;

      let matchinfo = document.createElement('div');
      matchinfo.id = 'matchinfo';

      let team = document.createElement('div');
      matchcard.classList.add('teams');

      let teamspan = document.createElement('span');
      teamspan.innerText = `${result.t1.replace(/\[.*?\]/g, '').trim()} vs ${result.t2.replace(/\[.*?\]/g, '').trim()}`; 
      team.append(teamspan);

      let timing = document.createElement('div');
      timing.id = 'timing';

      let timingspan = document.createElement('span');
      timingspan.innerText = result.matchType.toUpperCase() + ", " + result.dateTimeGMT.split('T')[0];
      timing.append(timingspan);

      let line = document.createElement('div');
      line.classList.add('line');


      let team1scoreinfo = document.createElement('div');
      team1scoreinfo.classList.add('score_info');
        
      let t1namespan = document.createElement('span');
      t1namespan.id = 't1name';
      t1namespan.innerText = result.t1.match(/\[([^\]]+)\]/)[1];

      let t1scorespan = document.createElement('span');
      t1scorespan.id = 't1score';

      let team2scoreinfo = document.createElement('div');
      team2scoreinfo.classList.add('score_info');
        
      let t2namespan = document.createElement('span');
      t2namespan.id = 't2name';
      t2namespan.innerText = result.t2.match(/\[([^\]]+)\]/)[1];;

      let t2scorespan = document.createElement('span');
      t2scorespan.id = 't2score';
      
      t1scorespan.innerText = result.t1s;
      t2scorespan.innerText = result.t2s; 

      team1scoreinfo.append(t1namespan);
      team1scoreinfo.append(t1scorespan);
      team2scoreinfo.append(t2namespan);
      team2scoreinfo.append(t2scorespan);

      let matchresult = document.createElement('div');
      matchresult.id = 'result';
      matchresult.innerText = result.status;


      matchinfo.append(team);
      matchinfo.append(timing);
      matchinfo.append(line);
      matchinfo.append(team1scoreinfo);
      matchinfo.append(team2scoreinfo);
      matchinfo.append(matchresult);

      let status = document.createElement('div');
      status.classList.add('status');
      status.classList.add('live');

      matchcard.append(matchinfo);
      matchcard.append(status);
      mainarrangement.append(matchcard);

      matchcard.addEventListener('click', function() {
        window.location.href = `HTML/scorecard.html?Id=${matchcard.id}`;
      });   
    }    
}   
