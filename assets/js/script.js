if (document.title.toLowerCase() === "sign in") {
  console.log("hello")
  const alertLogin = document.querySelector(".alert");
  const formData = document.querySelector(".form");
  formData.addEventListener("submit", (event) => {
    if (event.target.email.value === "fajri@gmail.com" && event.target.password.value === "13579") {
      alertLogin.innerText = "Login Berhasil";
      alertLogin.style.backgroundColor = "lightgreen";
      alertLogin.style.display = "inline-block";
      alertLogin.style.padding = "10px 50px 10px 15px";
      alertLogin.style.borderRadius = "16px";
      alertLogin.style.marginBottom = "10px";

      setInterval(() => {
        window.location = "/homepage.html";
      }, 5000);
    } else {
      alertLogin.innerText = "Login Gagal";
      alertLogin.style.backgroundColor = "rgb(255, 70, 70)";
      alertLogin.style.display = "inline-block";
      alertLogin.style.padding = "10px 50px 10px 15px";
      alertLogin.style.borderRadius = "16px";
      alertLogin.style.marginBottom = "10px";
    }
    event.preventDefault();
  });

  const password = document.querySelector("#password");
  const eyePass = document.querySelector(".eye-password");

  eyePass.addEventListener("click", () => {
    if (password.type === "password") {
      password.setAttribute("type", "text");
      eyePass.innerHTML = feather.icons['eye'].toSvg();
      eyePass.dataset.clicked = true
    } else {
      password.setAttribute("type", "password");
      eyePass.innerHTML = feather.icons['eye-off'].toSvg();
      eyePass.dataset.clicked = false
    }
  });
}

if (document.title.toLowerCase() === "sign up") {
  const password = document.querySelector("#password");
  const eyePass = document.querySelector(".eye-password");

  eyePass.addEventListener("click", () => {
    if (password.type === "password") {
      password.setAttribute("type", "text");
      eyePass.innerHTML = feather.icons['eye'].toSvg();
      eyePass.dataset.clicked = true
    } else {
      password.setAttribute("type", "password");
      eyePass.innerHTML = feather.icons['eye-off'].toSvg();
      eyePass.dataset.clicked = false
    }
  });
}

if (document.title.toLowerCase() === "update password") {
  const password1 = document.querySelector("#password1");
  const password2 = document.querySelector("#password2");
  const eyePass = document.querySelectorAll(".eye-password");

  eyePass[0].addEventListener("click", () => {
    if (password1.type === "password") {
      password1.setAttribute("type", "text");
      eyePass.innerHTML = feather.icons['eye'].toSvg();
      eyePass.dataset.clicked = true
    } else {
      password1.setAttribute("type", "password");
      eyePass.innerHTML = feather.icons['eye-off'].toSvg();
      eyePass.dataset.clicked = false
    }
  });
  eyePass[1].addEventListener("click", () => {
    if (password2.type === "password") {
      password2.setAttribute("type", "text");
      eyePass.innerHTML = feather.icons['eye'].toSvg();
      eyePass.dataset.clicked = true
    } else {
      password2.setAttribute("type", "password");
      eyePass.innerHTML = feather.icons['eye-off'].toSvg();
      eyePass.dataset.clicked = false
    }
  });
}

if(window.location.pathname === "/" ||window.location.pathname === "/index.html"){const movies = [
  {
    picture: "./assets/img/movie-4.svg",
    title: "Black WIdow",
    genre: "Action, Adventure, Sci-Fi",
    link: "view-all.html",
  },
  {
    picture: "./assets/img/movie-5.svg",
    title: "The Withces",
    genre: "Adventure, Comedy, Family",
    link: "view-all.html",
  },
  {
    picture: "./assets/img/movie-3.svg",
    title: "John Wick 3",
    genre: "Action, Sci-Fi",
    link: "view-all.html",
  },
  {
    picture: "./assets/img/movie-4.svg",
    title: "Black WIdow",
    genre: "Action, Adventure, Sci-Fi",
    link: "view-all.html",
  },
  {
    picture: "./assets/img/movie-5.svg",
    title: "The Withces",
    genre: "Adventure, Comedy, Family",
    link: "view-all.html",
  },
  {
    picture: "./assets/img/movie-3.svg",
    title: "John Wick 3",
    genre: "Action, Sci-Fi",
    link: "view-all.html",
  },
];

const upcomingMovies = document.querySelector(".upcoming-movies .list-movie");

let listMovies = "";

movies.forEach((movie) => {
  listMovies = listMovies +
    `<div>
      <img src="${movie.picture}" alt="image" />

      <h4>${movie.title}</h4>
      <p>${movie.genre}</p>
      <button><a href="${movie.link}">Details</a></button>
    </div>`;
});

upcomingMovies.innerHTML = listMovies;
}

if(window.location.pathname === '/homepage.html'){
  const movies = [
    {
      picture: "./assets/img/movie-4.svg",
      title: "Black WIdow",
      genre: "Action, Adventure, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-5.svg",
      title: "The Withces",
      genre: "Adventure, Comedy, Family",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-3.svg",
      title: "John Wick 3",
      genre: "Action, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-4.svg",
      title: "Black WIdow",
      genre: "Action, Adventure, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-5.svg",
      title: "The Withces",
      genre: "Adventure, Comedy, Family",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-3.svg",
      title: "John Wick 3",
      genre: "Action, Sci-Fi",
      link: "view-all.html",
    },
  ];

  const movies2 = [
    {
      picture: "./assets/img/movie-1.svg",
      title: "Spider-Man: Homecoming",
      genre: "Action, Adventure, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-2.svg",
      title: "The Lion King",
      genre: "Adventure, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-3.svg",
      title: "John Wick 3",
      genre: "Action, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-1.svg",
      title: "Spider-Man: Homecoming",
      genre: "Action, Adventure, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-2.svg",
      title: "The Lion King",
      genre: "Adventure, Sci-Fi",
      link: "view-all.html",
    },
    {
      picture: "./assets/img/movie-3.svg",
      title: "John Wick 3",
      genre: "Action, Sci-Fi",
      link: "view-all.html",
    },
  ]

  const upcomingMovies = document.querySelector(".upcoming-movies .list-movie");
  const nowShowingMovies = document.querySelector(".now-showing .list-movie.two")

  let listMovies1 = "";
  let listMovies2 = "";

  movies.forEach((movie) => {
    listMovies1 = listMovies1 +
      `<div>
        <img src="${movie.picture}" alt="image" />

        <h4>${movie.title}</h4>
        <p>${movie.genre}</p>
        <button><a href="${movie.link}">Details</a></button>
      </div>`;
  });


  movies2.forEach(movie => {
    listMovies2 = listMovies2 +
    `<div>
      <img src=${movie.picture} alt="" />
      <div>
        <h4>${movie.title}</h4>
        <p>${movie.genre}</p>
        <button><a href=${movie.link}>Details</a></button>
      </div>
    </div>`
  })

  upcomingMovies.innerHTML = listMovies1;
  nowShowingMovies.innerHTML = listMovies2
}

else{
  const drawerButtonElement = document.querySelector(".drawer");
const navDropElement = document.querySelector(".nav-drop");

const mainElement = document.querySelector("body");

drawerButtonElement.addEventListener("click", (event) => {
  navDropElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  navDropElement.classList.remove("open");
  event.stopPropagation();
});
}
