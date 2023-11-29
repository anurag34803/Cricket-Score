let url = "https://api.cricapi.com/v1/match_scorecard?apikey=c001618f-cade-4110-b0de-df212a4a765b&id=28004108-5cdd-43f7-82f3-f530bf8b2ce9";

let main = document.querySelector(".main");

fetch(url)
.then((response) => {
  response.json().then((data) => {
      console.log(data.data);
      setmatchinfo(data.data);
  });
})
.catch((error) => {
  console.error('Error:', error);
});

function setmatchinfo(response) 
{
    console.log(response.name);
   let matchinfo = document.querySelector('.teams-info');
   matchinfo.innerText = response.name;

   let venueinfo = document.querySelector(".othinfo .venue span");
   let time = document.querySelector(".othinfo .time span");
   venueinfo.innerText = response.venue;
   time.innerText = response.date;

   let result = document.querySelector(".result");
   result.innerText = response.status;

   let team1score = document.querySelectorAll(".t1scorecard .total span");
   team1score[0].innerText = response.teamInfo[0].shortname;
   team1score[1].innerText = `${response.score[0].r}-${response.score[0].w} ( ${response.score[0].o} )`;
   
   // Create team1 batsman scorecard
   let t1batsmanarrang = document.querySelector(".team1batsman");
   let t1batscore = response.scorecard[0].batting;
   console.log(t1batscore);
   for(let playerinfo of t1batscore)
   {
      let createrow = document.createElement('tr');

      let batsmanname = document.createElement('td');
      batsmanname.classList.add('.blue-txt');
      batsmanname.classList.add('.text-left');
      batsmanname.innerText = playerinfo.batsman.name;

      let dismissaltext = document.createElement('td');
      dismissaltext.classList.add('.text-left');
      dismissaltext.innerText = playerinfo["dismissal-text"];

      let run = document.createElement('td');
      run.classList.add('.text-right');
      run.innerText = playerinfo.r;

      let ball = document.createElement('td');
      ball.classList.add('.text-right');
      ball.innerText = playerinfo.b;

      let fours = document.createElement('td');
      fours.classList.add('.text-right');
      fours.innerText = playerinfo["4s"];

      let sixes = document.createElement('td');
      sixes.classList.add('.text-right');
      sixes.innerText = playerinfo["6s"];

      let strate = document.createElement('td');
      strate.classList.add('.text-center');
      strate.innerText = playerinfo.sr;

      createrow.append(batsmanname);
      createrow.append(dismissaltext);
      createrow.append(run);
      createrow.append(ball);
      createrow.append(fours);
      createrow.append(sixes);
      createrow.append(strate);

      t1batsmanarrang.append(createrow);
   }

   // Create scorecard of team2 
   let t2bowlarrang = document.querySelector(".team2bowler");
   let t2bowler = response.scorecard[0].bowling;

   for(let playerinfo of t2bowler)
   {
      let createrow = document.createElement('tr');

      let bowlname = document.createElement('td');
      bowlname.classList.add('.blue-txt');
      bowlname.innerText = playerinfo.bowler.name;

      let over = document.createElement('td');
      over.classList.add('.text-right');
      over.innerText = playerinfo.o;

      let maiden = document.createElement('td');
      over.classList.add('.text-right');
      maiden.innerText = playerinfo.m;

      let run = document.createElement('td');
      run.classList.add('.text-right');
      run.innerText = playerinfo.r;

      let wicket = document.createElement('td');
      wicket.classList.add('.text-right');
      wicket.innerText = playerinfo.w;

      let noball = document.createElement('td');
      noball.classList.add('.text-right');
      noball.innerText = playerinfo.nb;

      let wide = document.createElement('td');
      wide.classList.add('.text-right');
      wide.innerText = playerinfo.wd;

      let economy = document.createElement('td');
      economy.classList.add('.text-center');
      economy.innerText = playerinfo.eco;

      createrow.append(bowlname);
      createrow.append(over);
      createrow.append(maiden);
      createrow.append(run);
      createrow.append(wicket);
      createrow.append(noball);
      createrow.append(wide);
      createrow.append(economy);

      t2bowlarrang.append(createrow);
   }

   let team2score = document.querySelectorAll(".t2scorecard .total span");
   team2score[0].innerText = response.teamInfo[1].shortname;
   team2score[1].innerText = `${response.score[1].r}-${response.score[1].w} ( ${response.score[1].o} )`;

   // Create team2 batsman scorecard
   let t2batsmanarrang = document.querySelector(".team2batsman");
   let t2batscore = response.scorecard[1].batting;
   console.log(t2batscore);
   for(let playerinfo of t2batscore)
   {
      let createrow = document.createElement('tr');

      let batsmanname = document.createElement('td');
      batsmanname.classList.add('.blue-txt');
      batsmanname.classList.add('.text-left');
      batsmanname.innerText = playerinfo.batsman.name;

      let dismissaltext = document.createElement('td');
      dismissaltext.classList.add('.text-left');
      dismissaltext.innerText = playerinfo["dismissal-text"];

      let run = document.createElement('td');
      run.classList.add('.text-right');
      run.innerText = playerinfo.r;

      let ball = document.createElement('td');
      ball.classList.add('.text-right');
      ball.innerText = playerinfo.b;

      let fours = document.createElement('td');
      fours.classList.add('.text-right');
      fours.innerText = playerinfo["4s"];

      let sixes = document.createElement('td');
      sixes.classList.add('.text-right');
      sixes.innerText = playerinfo["6s"];

      let strate = document.createElement('td');
      strate.classList.add('.text-center');
      strate.innerText = playerinfo.sr;

      createrow.append(batsmanname);
      createrow.append(dismissaltext);
      createrow.append(run);
      createrow.append(ball);
      createrow.append(fours);
      createrow.append(sixes);
      createrow.append(strate);

      t2batsmanarrang.append(createrow);
   }

   // Create scorecard of team1
   let t1bowlarrang = document.querySelector(".team1bowler");
   let t1bowler = response.scorecard[1].bowling;

   for(let playerinfo of t1bowler)
   {
      let createrow = document.createElement('tr');

      let bowlname = document.createElement('td');
      bowlname.classList.add('.blue-txt');
      bowlname.innerText = playerinfo.bowler.name;

      let over = document.createElement('td');
      over.classList.add('.text-right');
      over.innerText = playerinfo.o;

      let maiden = document.createElement('td');
      over.classList.add('.text-right');
      maiden.innerText = playerinfo.m;

      let run = document.createElement('td');
      run.classList.add('.text-right');
      run.innerText = playerinfo.r;

      let wicket = document.createElement('td');
      wicket.classList.add('.text-right');
      wicket.innerText = playerinfo.w;

      let noball = document.createElement('td');
      noball.classList.add('.text-right');
      noball.innerText = playerinfo.nb;

      let wide = document.createElement('td');
      wide.classList.add('.text-right');
      wide.innerText = playerinfo.wd;

      let economy = document.createElement('td');
      economy.classList.add('.text-center');
      economy.innerText = playerinfo.eco;

      createrow.append(bowlname);
      createrow.append(over);
      createrow.append(maiden);
      createrow.append(run);
      createrow.append(wicket);
      createrow.append(noball);
      createrow.append(wide);
      createrow.append(economy);

      t1bowlarrang.append(createrow);
   }
}
