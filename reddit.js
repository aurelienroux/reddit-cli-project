var request = require('request');
var requestPromise = require("request-promise");
var inquirer = require('inquirer');
var colors = require("colors");

/*This function should "return" the default homepage posts as an array of objects*/
function getHomepage() {
  return requestPromise('https://reddit.com/.json');
}

/*This function should "return" the default homepage posts as an array of objects.
In contrast to the `getHomepage` function, this one accepts a `sortingMethod` parameter.*/
function getSortedHomepage(sortingMethod) {
  return requestPromise('https://reddit.com/' + sortingMethod + '.json');
}

/*This function should "return" the posts on the front page of a subreddit as an array of objects.*/
function getSubreddit(subreddit) {
  return requestPromise('https://reddit.com/r/' + subreddit + '.json');
}

/*This function should "return" the posts on the front page of a subreddit as an array of objects.
In contrast to the `getSubreddit` function, this one accepts a `sortingMethod` parameter.*/
function getSortedSubreddit(subreddit, sortingMethod) {
  return requestPromise('https://reddit.com/r/' + subreddit + "/" + sortingMethod +'.json');
}

/*This function should "return" all the popular subreddits*/
function getSubreddits() {
  return requestPromise('https://reddit.com/subreddits.json');
}

// Export the API
module.exports = {
  getHomepage: getHomepage,
  getSortedHomepage: getSortedHomepage,
  getSubreddit: getSubreddit,
  getSortedSubreddit: getSortedSubreddit,
  getSubreddits: getSubreddits
};

//INQUIRER APP ****************************************************
var menuChoices = [
  {name: 'Show homepage', value: 'HOMEPAGE'},
  {name: 'Show subreddit', value: 'SUBREDDIT'},
  {name: 'List subreddits', value: 'SUBREDDITS'}
];

inquirer.prompt({
  type: 'list',
  name: 'menu',
  message: 'What do you want to do?',
  choices: menuChoices
}).then(
  function(answers) {
    if( answers.menu == "HOMEPAGE"){
      var data = getHomepage();
      var pdata = JSON.parse(data);
      console.log(pdata);
    }
  }
);