function generateQuote() {
    let quotes = {
        "― Jules Renard, The Journal of Jules Renard" : '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        "― Pierce Brown, Red Rising" : '“Man cannot be freed by the same injustice that enslaved it.”',
        "― Deepak Chopra" : '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() *
        authors.length)];

    let quote = quotes[author];

    console.log(author);
    console.log(quote);

    document.querySelector('.quotes__quote').innerHTML = quote;
    document.querySelector('.quotes__author').innerHTML = author;
}

generateQuote();