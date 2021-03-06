const articleContainer = document.getElementById('articles-wrapper');


let request = new XMLHttpRequest();

request.open('GET', 'https://s3-us-west-2.amazonaws.com/stcom-public-resources/result.json', true);

request.onload = function() {
  let data = JSON.parse(this.response);
  let articles = data.articles;

  if (request.status >= 200 && request.status < 400) {
    articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.setAttribute('class', 'article-card');

      const articleLink = document.createElement('a');
      articleLink.setAttribute('class', 'article-link');
      articleLink.href = article.articleURL;
      articleLink.innerText = article.title;

      const articleImage = document.createElement('img');
      articleImage.setAttribute('class', 'article-image');
      articleImage.src = article.thumbnailURL;

      articleContainer.appendChild(articleCard);
      articleCard.appendChild(articleImage);
      articleCard.appendChild(articleLink);
      
    });
  } else {
    console.log('error');
  }
}

request.send();

