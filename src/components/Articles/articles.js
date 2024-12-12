class Articles extends HTMLElement {
  connectedCallback() {
    this.articles = [
      {
        title: 'Protocolo de Minecraft',
        image: './src/assets/article-1.jpg',
        keys: ['minecraft', 'protocol'],
        description: 'Descubre cómo funciona el protocolo de Minecraft.',
      },
      {
        title: 'Construye tu propia CPU',
        image: './src/assets/article-2.jpg',
        keys: ['cpu', 'hardware'],
        description: 'Guía para construir tu propia CPU desde cero.',
      },
      {
        title: 'Hacking de Memoria con Rust',
        image: './src/assets/article-3.jpg',
        keys: ['rust', 'memory', 'hacking'],
        description: 'Explora el hacking de memoria utilizando Rust.',
      },
      {
        title: 'Cómo hacer Pentesting',
        image: './src/assets/article-4.jpg',
        keys: ['pentest', 'security'],
        description: 'Aprende cómo realizar pruebas de penetración.',
      },
    ]

    this.innerHTML = `
      <div class="searchBarContainer">
        <link rel="stylesheet" href="./src/components/Articles/styles.css" />
        <input type="text" id="searchArticle" class="searchBar" placeholder="Buscar por título...">
        <i class='bx bx-search icon'></i>
      </div>
      <div class="articles"></div>
    `

    this.renderArticles(this.articles)
    this.setupSearch()
  }

  setupSearch() {
    const input = this.querySelector('#searchArticle')
    if (input) {
      input.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase()
        const filteredArticles = this.articles.filter(
          (article) =>
            article.title.toLowerCase().includes(searchValue) ||
            article.keys.some((key) => key.toLowerCase().includes(searchValue))
        )
        this.renderArticles(filteredArticles)
      })
    }
  }

  renderArticles(articles) {
    const articlesContainer = this.querySelector('.articles')
    articlesContainer.innerHTML = articles
      .map(
        (item) => `
      <article class="articleCard">
        <img src="${item.image}" alt="${item.title}" class="articleCardImg" />
        <div class="articleCardContent">
          <div class="articleCardBody">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="articleCardFooter">
          ${item.keys.map((itemTwo) => `<span class="articleCardKey">${itemTwo}</span>`).join('')}
          </div>
        </div>
      </article>
    `
      )
      .join('')
  }
}

customElements.define('articles-component', Articles)
