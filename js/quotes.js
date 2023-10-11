const quotes = [
{
  quote: "Ho Young",
  author: "Maple Story",
},
{
  quote: "Dual Blade",
  author: "Maple Story",
},
{
  quote: "Cannon Shooter",
  author: "Maple Story",
},
{
  quote: "Pathfinder",
  author: "Maple Story",
},
{
  quote: "Zero",
  author: "Maple Story",
},
{
  quote: "Khali",
  author: "Maple Story",
},
{
  quote: "Ark",
  author: "Maple Story",
},
{
  quote: "Adele",
  author: "Maple Story",
},
{
  quote: "Xenon",
  author: "Maple Story",
},
{
  quote: "Kinesis",
  author: "Maple Story",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText =  todaysQuote.author;