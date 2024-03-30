const projects = [
  {
    img: "public/nft-showcase.webp",
    heading: "NFT Marketplace Showcase",
    description: `A landing page for the NFT Marketplace Application.
              The page is hosted on IPFS, a completely decentralized
              peer-to-peer protocol.`,
    link: "https://nftmarketplaceshowcase.on.fleek.co/",
    github: "https://github.com/MwauratheAlex/NFTMarketplaceShowcase.git",
  },
  {
    img: "public/nft-marketplace.webp",
    heading: "NFT Marketplace App",
    description: `A modern cross-platform React Native Application 
            with a Sleek and Modern UI. Users can see and search 
            through listed NFTs and scroll through them.`,
    link: "https://nftmarketplaceshowcase.on.fleek.co/",
    github: "https://github.com/MwauratheAlex/NFTMarketplace.git",
  },
  {
    img: "public/landing-page.webp",
    heading: "Startup Landing Page",
    description: `A fully functional, mobile responsive, beautiful, 
          single page website built using Next Js. Using this landing page 
          will surely drive more traffic to your startup.`,
    link: "https://business-landing-page-mwaura.netlify.app/",
    github: "https://github.com/MwauratheAlex/nextjs_landing_page.git",
  },
  {
    img: "public/movie-land.webp",
    heading: "Movieland",
    description: `A fully mobile-responsive React JS Application that displays 
            movies and allows users to search for any movie on the internet.`,
    link: "https://movie-land-mwaura.netlify.app/",
    github: "https://github.com/MwauratheAlex/movieLand-react.git",
  },
  {
    img: "public/gpt-3.webp",
    heading: "GPT-3",
    description: `A fully responsive GPT-3 website/landing page with 
          modern UI/UX following a Figma design built with React.`,
    link: "https://gpt-3-mwaura.netlify.app/",
    github: "https://github.com/MwauratheAlex/gpt3.git",
  },
  {
    img: "public/justgymit.webp",
    heading: "Just Gym It",
    description: `A modern React 18 Fitness Exercises App with the 
        functionality to choose exercise categories and specific muscle 
        groups. Browse 1000+ exercises with practical examples.
        `,
    link: "https://justgymit.netlify.app/",
    github: "https://github.com/MwauratheAlex/gym_exercises.git",
  },
]

function renderProjects() {
  const worklistEl = document.getElementById("project-list")
  const workHtml = projects.map(project => `
        <div class="work">
          <img src=${project.img} loading="lazy" alt=${project.heading}>
          <div class="layer">
            <h3>${project.heading}</h3>
            <p>${project.description}</p>
            <div class="layer-icons">
              <a href=${project.link}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              <a href=${project.github}><i class="fa-brands fa-github"></i></i></a>
            </div>
          </div>
        </div>
  `).join(' ')
  worklistEl.innerHTML = workHtml
}

renderProjects()
