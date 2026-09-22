const paintings = [
  {
    slug: 'respect-is-a-scam',
    title: 'Respect Is a Scam',
    year: '2025',
    medium: 'Gouache on paper',
    dimensions: '21 × 30 cm',
    image: 'image-02-4fda0a03d9.jpg',
    alt: 'The words Respect Is a Scam over a cityscape with a UFO and an Enjoy Existence sign',
    statement: [
      'Respect works like a pyramid scheme. Perform it long enough and eventually you are allowed to stop earning it.',
      'My first painting that I really committed to finishing. I will leave the rest unsaid.'
    ]
  },
  {
    slug: 'have-you-been-real-before',
    title: 'Have You Been Real Before',
    year: '2025',
    medium: 'Gouache on paper',
    dimensions: '21 × 30 cm',
    image: 'image-03-131d26c84e.jpg',
    alt: 'Purple hexagonal sunglasses reflecting a green landscape beneath the words Have You Been Real Before',
    statement: ['Painted from the view off my balcony last summer, in a purple shade of my favorite sunglasses. The title borrows a line from Rosa Anschütz. I do not need anyone to perform for me. I already see who they are.']
  },
  {
    slug: 'stop-pretending',
    title: 'Stop Pretending',
    year: '2025',
    medium: 'Gouache on paper',
    dimensions: '21 × 30 cm',
    image: 'image-04-4c2f16c0c1.jpg',
    alt: 'A gray stop sign over a red sunset and blue sea with the word Pretending along the bottom',
    statement: ['For the people I met who had started talking like their favorite influencers instead of themselves. I would rather know someone messy and real than another copy of something viral.']
  },
  {
    slug: 'ignore-warped-reality',
    title: 'Ignore Warped Reality',
    year: '2025',
    medium: 'Gouache on paper',
    dimensions: '21 × 30 cm',
    image: 'image-05-5c382f8efb.jpg',
    alt: 'A yellow and purple room with a window and a framed sign reading Ignore Warped Reality',
    statement: ['A reminder that nothing is quite as important as it feels. A little hedonism, and a little fear of letting go completely.']
  },
  {
    slug: 'yirmi-dokuz',
    title: 'Yirmi Dokuz',
    year: '2025',
    medium: 'Gouache on paper',
    dimensions: '21 × 30 cm',
    image: 'image-06-82ff4e70cd.jpg',
    alt: 'A colorful bird-like form with the words Turbulent Reality circling the number 29',
    statement: ['Painted in the middle of the hardest year I have had. Waiting on a process that kept moving its own goalposts, working every day, and eventually walking away from a job I loved because staying still had become its own kind of cost. Not a success story. Just a trade I was willing to make.']
  },
  {
    slug: 'waiting-to-live',
    title: 'Waiting to Live',
    year: '2026',
    medium: 'Gouache on paper',
    dimensions: '21 × 30 cm',
    image: 'image-07-d8cc68e5de.jpg',
    alt: 'A blue sky over red and purple ground with the words Waiting to Live',
    statement: ['For every conversation about a plan that starts once some approval finally comes through. Life does not wait for the paperwork. Nothing rationalizes postponing what you actually want to do.']
  },
  {
    slug: 'quatre-sur-cinq',
    title: 'Quatre sur cinq',
    year: '2026',
    medium: 'Acrylic on paper',
    dimensions: '21 × 30 cm',
    image: 'image-08-ea962642da.jpg',
    alt: 'An abstract black, red, and blue composition with yellow brushstrokes',
    statement: ['Four out of five. That is all I will say about this one.']
  },
  {
    slug: 'mental-maze',
    title: 'Mental Maze',
    year: '2026',
    medium: 'Acrylic on paper',
    dimensions: '21 × 30 cm',
    image: 'image-09-4804fcf0ef.jpg',
    alt: 'A diagonal blue composition with a small framed face wearing headphones',
    statement: ['A place I visit often lately. Headphones on, mind circling the same questions, nodding along to the rhythm without needing the questions to resolve. Some loops you do not escape. You just learn to move inside them.']
  },
  {
    slug: 'conscious-fish',
    title: 'Conscious Fish',
    year: '2026',
    medium: 'Acrylic on paper',
    dimensions: '21 × 30 cm',
    image: 'image-10-3a5dbb1465.jpg',
    alt: 'An abstract orange, black, and blue fish form with white brushstrokes',
    statement: ['An abstract fish, painted from leftover paint. She is missing a fin and does not move much, but the current still carries her where she needs to go. She is aware, and she has let go.']
  },
  {
    slug: 'reality-switcher',
    title: 'Reality Switcher',
    year: '2026',
    medium: 'Acrylic on paper',
    dimensions: '21 × 30 cm',
    image: 'image-11-8fc7ed2132.jpg',
    alt: 'A colorful hand reaching down over a purple, orange, blue, and green background',
    statement: ['One snap of the fingers, and the way I see something changes completely. Perspective is the whole trick.']
  }
];

const slug = document.body.dataset.painting;
const index = paintings.findIndex((painting) => painting.slug === slug);
const painting = paintings[index];

if (!painting) {
  document.querySelector('#painting-root').innerHTML = '<p>Painting not found.</p>';
} else {
  const number = String(index + 1).padStart(2, '0');
  const previous = paintings[(index - 1 + paintings.length) % paintings.length];
  const next = paintings[(index + 1) % paintings.length];
  document.title = `${painting.title} | Bora Guzel`;
  document.querySelector('[data-work-number]').textContent = `Paintings · ${number}`;
  document.querySelector('#painting-root').innerHTML = `
    <figure class="artwork">
      <img src="../../assets/images/${painting.image}" alt="${painting.alt}">
    </figure>
    <article class="details">
      <p class="eyebrow">Painting ${number}</p>
      <h1>${painting.title}</h1>
      <p class="metadata"><span>${painting.year}</span><span>${painting.medium}</span><span>${painting.dimensions}</span></p>
      <div class="statement">${painting.statement.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
      <p class="principle">Making is how I understand things. Paint, words, geometry, and engineering are my tools.</p>
    </article>`;
  document.querySelector('#work-navigation').innerHTML = `
    <a href="../${previous.slug}/">← ${previous.title}</a>
    <a href="../${next.slug}/">${next.title} →</a>`;
}

