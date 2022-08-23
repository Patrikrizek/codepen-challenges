var magicBallEl = document.querySelector('.magic-8-ball');

        const answerFuture = () => {

            const wrapperEl = document.querySelector('.wrapper');
            const oracleEl = document.querySelector('.oracle');
            const diceEl = document.querySelector('.no-dice');

            const options = [
                'It is certain',
                'It is decidedly<br> so',
                'Without a doubt',
                'Yes definitely',
                'You may rely<br> on it',
                'As I see<br> it, yes',
                'Most likely',
                'Outlook good',
                'Yes',
                'Signs point<br> to yes',
                'Reply hazy,<br> try again',
                'Ask again<br> later',
                'Better not tell<br> you now',
                'Cannot predict<br> now',
                'Concentrate and<br> ask again',
                'Do not count<br> on it',
                'My reply<br> is no',
                'My sources<br> say no',
                'Outlook not<br> so good',
                'Very doubtful'
            ];
            const random = Math.floor(Math.random() * 20);
            const answer = options[random];


            magicBallEl.classList.toggle('animation-shake');

            wrapperEl.classList.toggle('lens');
            diceEl.classList.toggle('animation-dice');
            oracleEl.classList.toggle('animation-dice');
            oracleEl.classList.toggle('answer');
            diceEl.classList.toggle('dice');
            oracleEl.innerHTML = answer;

            if (!oracleEl.classList.contains('answer')) {
                oracleEl.innerHTML = 8;
            }

        };

        magicBallEl.addEventListener('click', answerFuture);