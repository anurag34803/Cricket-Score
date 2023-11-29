// for get all match list
let url = "https://api.cricapi.com/v1/matches?apikey=c001618f-cade-4110-b0de-df212a4a765b&offset=0";

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

   function createcardview(result) {
      // console.log(data.id);
      let matchcard = document.createElement('div');
      matchcard.classList.add('matchcard');
      matchcard.id = result.id;

      let matchinfo = document.createElement('div');
      matchinfo.id = 'matchinfo';

      let team = document.createElement('div');
      matchcard.classList.add('teams');

      let teamspan = document.createElement('span');
      teamspan.innerText = result.name.split(',')[0].trim();
      
      team.append(teamspan);

      let timing = document.createElement('div');
      timing.classList.add('venue');
      timing.id = 'timing';

      let timingspan = document.createElement('span');
      timingspan.innerText = result.name.split(',')[1].trim() + " " + result.date;

      timing.append(timingspan);
      
      let ground = document.createElement('div');
      ground.classList.add('venue');
      ground.id = 'ground';

      let groundspan = document.createElement('span');
      groundspan.innerText = result.venue;

      ground.append(groundspan);

      let line = document.createElement('div');
      line.classList.add('line');


      let team1scoreinfo = document.createElement('div');
      team1scoreinfo.classList.add('score_info');
        
      let t1namespan = document.createElement('span');
      t1namespan.id = 't1name';
      t1namespan.innerText = result.teams[0];

      let t1scorespan = document.createElement('span');
      t1scorespan.id = 't1score';

      let team2scoreinfo = document.createElement('div');
      team2scoreinfo.classList.add('score_info');
        
      let t2namespan = document.createElement('span');
      t2namespan.id = 't2name';
      t2namespan.innerText = result.teams[1];

      let t2scorespan = document.createElement('span');
      t2scorespan.id = 't2score';
      
      try {
        t1scorespan.innerText = `${result.score[0].r}- ${result.score[0].w} ( ${result.score[0].o})`;
        t2scorespan.innerText = `${result.score[1].r}- ${result.score[1].w} ( ${result.score[1].o})`;
      }
      
      catch {
        t1scorespan.innerText = "";
        t2scorespan.innerText = "";
      }

      team1scoreinfo.append(t1namespan);
      team1scoreinfo.append(t1scorespan);
      team2scoreinfo.append(t2namespan);
      team2scoreinfo.append(t2scorespan);

      let matchresult = document.createElement('div');
      matchresult.id = 'result';
      matchresult.innerText = result.status;


      matchinfo.append(team);
      matchinfo.append(timing);
      matchinfo.append(ground);
      matchinfo.append(line);
      matchinfo.append(team1scoreinfo);
      matchinfo.append(team2scoreinfo);
      matchinfo.append(matchresult);

      let status = document.createElement('div');
      status.classList.add('status');

      matchcard.append(matchinfo);
      matchcard.append(status);
      mainarrangement.append(matchcard);
}   
