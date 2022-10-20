const quotes = [
    "'You must be the change you wish to see in the world.' - Mahatma Gandhi",
    "'The end doesn't justify the means.' - Sergey Nechayev",
    "'The greatest glory in living lies not in never falling, but in rising every time we fall.' - Nelson Mandela",
    "'The whole secret of a successful life is to find out what is one's destiny to do, and then do it.' - Henry Ford",
    "'The way to get started is to quit talking and begin doing.' - Walt Disney",
    "'The journey of a thousand miles begins with one step.' - Lao Tzu",
    "'Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.' - Barack Obama",
    "'It does not matter how slowly you go as long as you do not stop.' - Confucius",
    "'I have no special talent. I am only passionately curious.' - Albert Einstein",
    "'That which does not kill us makes us stronger.' - Friedrich Nietzsche",
    "'If you judge people, you have no time to love them.' - Mother Teresa",
];

function displayQuote() {
    window.alert(quotes[parseInt(Math.random() * 11)]);
}
