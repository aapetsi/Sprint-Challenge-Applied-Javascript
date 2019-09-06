// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const Tab = title => {
  // select parent element for topic tab
  const parentElement = document.querySelector(".topics");
  // create div element for topic
  const topic = document.createElement("div");
  topic.classList.add("tab");
  topic.textContent = title;

  parentElement.appendChild(topic);
  return topic;
};

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    console.log(res.data);
    let topics = res.data.topics;
    // render tab component
    topics.forEach(topic => Tab(topic));
  })
  .catch(err => {
    console.log(err);
  });
