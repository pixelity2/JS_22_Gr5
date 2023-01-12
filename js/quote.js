function generateQuote(){
    let randomNumber = Math.floor((Math.random() * 15) + 1);
    let quote;
    switch(randomNumber){
        case 1:
        quote = "When you have a dream, you've got to grab it and never let go. <br> - Carol Burnett";
        break;
        case 2:
        quote = "Nothing is impossible. The word itself says 'I'm possible!' <br> - Audrey Hepburn";
        break;
        case 3:
        quote = "There is nothing impossible to they who will try. <br> - Alexander the Great"
        break;
        case 4:
        quote = "The bad news is time flies. The good news is you're the pilot. <br> - Michael Altshuler";
        break;
        case 5:
        quote = "Life has got all those twists and turns. You've got to hold on tight and off you go. <br> - Nicole Kidman";
        break;
        case 6:
        quote = "Keep your face always toward the sunshine, and shadows will fall behind you. <br> -Walt Whitman";
        break;
        case 7:
        quote = "You make a choice: continue living your life feeling muddled in this abyss of selfmisunderstanding, or you find your identity independent of it. You draw your own box. <br> - Duchess Meghan";
        break;
        case 8:
        quote = "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please. <br> - Taylor Swift";
        break;
        case 9:
        quote = "Success is not final, failure is not fatal: it is the courage to continue that counts. <br> - Winston Churchill";
        break;
        case 10:
        quote = "You define your own life. Don't let other people write your script. <br> - Oprah Winfrey";
        break;
        case 11:
        quote =  "You are never too old to set another goal or to dream a new dream. <br> - Malala Yousafzai";
        break;
        case 12:
        quote = "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it. <br> - Dr. Phil";
        break;
        case 13:
        quote = "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end. <br> - Michelle Obama";
        break;
        case 14:
        quote = "Spread love everywhere you go. <br> - Mother Teresa";
        break;
        case 15:
        quote = "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on. <br> - Lady Gaga";
        break;
    }
    document.getElementById("quote").innerHTML = quote;
}