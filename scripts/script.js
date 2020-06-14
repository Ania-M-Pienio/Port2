const app = {};

app.isDropped = true;
app.isDroppedM = false;

// cached jQuery for the Message Form
app.form = {};
app.form.$name = $("#name");
app.form.$email = $("#replyTo");
app.form.$message = $("#theMessage");
app.form.$reply = $("#expectReply");

// cached jQuery for the Menu
app.$menuButtonD = $(".menu button.desk");
app.$menuButtonM = $(".menu button.mobile");
app.$menuLinks = $("nav a");

// carousel
app.amount = 3;
app.menuAmount = 5;
app.half = 2;
app.stage = [];
app.mobileMenu = ["nutrinav", "bridem8", "clickfly", "roboguild", "mintynews"];
app.que = [
  {
    id: "roboguild",
    title: "Robo Guild",
    liveLink: "https://robo-g-serve.herokuapp.com/home",
    codeLink: "https://github.com/RoboGuild",
    asset: "../assets/portfolio/5.png",
    description: `An organization management suite where users can view and
                  edit information about its membership (Angular) as well as
                  handle team and project assignments (Vue). The back end
                  storage is facilitated through a custom-built API which
                  serves, stores and updates the information via its various
                  RESTed end-points.`,
    skills: [
      "vue",
      "angular",
      "bootstrap",
      "typescript",
      "nodejs",
      "express",
      "mongodb",
    ],
  },
  {
    id: "clickfly",
    title: "Click Fly",
    liveLink: "https://ania-m-pienio.github.io/ClickFly/",
    codeLink: "https://github.com/Ania-M-Pienio/ClickFly",
    asset: "../assets/portfolio/2.png",
    description: `A tool that allows developers to style a button using the UI
                  and then copy the CSS code for that style onto their
                  clipboard. Users can choose the overall style of the button
                  and then customize its text, colours, outline and fill.`,
    skills: ["javascript", "sass", "jquery", "html5", "css3"],
  },
  {
    id: "bridem8",
    title: "Bride M8",
    liveLink: "https://ania-m-pienio.github.io/BrideM8/",
    codeLink: "https://github.com/Ania-M-Pienio/BrideM8",
    asset: "../assets/portfolio/3.png",
    description: `  A wedding colour-picker application where users can select
                    their season and time of event in order to receive
                    appropriate colour suggestions. Once user picks one colour
                    choice, they can see what it would actually look like at
                    their event.`,
    skills: ["react", "javascript", "firebase", "sass", "html5", "css3"],
  },
  {
    id: "nutrinav",
    title: "Nutri Nav",
    liveLink: "https://nutrition-navigator.github.io/nutriNav/",
    codeLink: "https://github.com/nutrition-navigator/nutriNav",
    asset: "../assets/portfolio/1.png",
    description: `  A food nutrition tracker that allows users to search for
                    common and brand foods in order to view and compare their
                    essential nutrients. Uses an API as a source of the
                    nutritional information and Firebase to save favourite foods
                    as well as past comparisons.`,
    skills: ["react", "javascript", "firebase", "html5", "css3"],
  },
  {
    id: "mintynews",
    title: "Minty News",
    liveLink: "https://t4minty.herokuapp.com/",
    codeLink: "https://github.com/mintbean-group",
    asset: "../assets/portfolio/4.png",
    description: `A fullstack news-sharing application where authenticated
                  users can view, post and comment on articles. The front end
                  is rendered using React and makes calls via Axios. Identity
                  federation is brokered via Auth0. Server-side routing is written
                  in Express/Node.js and persistence is hooked up to MongoDB
                  via Mongoose.`,
    skills: [
      "react",
      "javascript",
      "sass",
      "auth0",
      "nodejs",
      "express",
      "mongodb",
    ],
  },
];

app.skills = {
  vue: {
    title: "Vue",
    asset: "../assets/icons/colour/11.png",
  },
  react: {
    title: "React",
    asset: "../assets/icons/colour/10.png",
  },
  angular: {
    title: "Angular",
    asset: "../assets/icons/colour/9.png",
  },
  jquery: {
    title: "jQuery",
    asset: "../assets/icons/colour/4.png",
  },
  html5: {
    title: "HTML5",
    asset: "../assets/icons/colour/12.png",
  },
  css3: {
    title: "CSS3",
    asset: "../assets/icons/colour/13.png",
  },
  sass: {
    title: "SCSS",
    asset: "../assets/icons/colour/14.png",
  },
  bootstrap: {
    title: "Bootstrap",
    asset: "../assets/icons/colour/5.png",
  },
  javascript: {
    title: "JaveScript",
    asset: "../assets/icons/colour/8.png",
  },
  typescript: {
    title: "TypeScript",
    asset: "../assets/icons/colour/6.png",
  },
  nodejs: {
    title: "Node.js",
    asset: "../assets/icons/colour/16.png",
  },
  express: {
    title: "Express.js",
    asset: "../assets/icons/colour/18.png",
  },
  mongodb: {
    title: "MongoDB",
    asset: "../assets/icons/colour/1.png",
  },
  postgresql: {
    title: "PostgreSQL",
    asset: "../assets/icons/colour/2.png",
  },
  firebase: {
    title: "Firebase",
    asset: "../assets/icons/colour/15.png",
  },
  git: {
    title: "Git",
    asset: "../assets/icons/colour/3.png",
  },
  github: {
    title: "GitHub",
    asset: "../assets/icons/colour/21.png",
  },
  heroku: {
    title: "Heroku",
    asset: "../assets/icons/colour/7.png",
  },
  auth0: {
    title: "Auth0",
    asset: "../assets/icons/colour/17.png",
  },
  bash: {
    title: "Bash",
    asset: "../assets/icons/colour/20.png",
  },
  sql: {
    title: "SQL",
    asset: "../assets/icons/colour/19.png",
  },
};

// skills

/****************************************************************/
/*****************          ANIMATORS         *******************/
/****************************************************************/

app.animateDropD = function () {
  $("nav").toggleClass("collapse");
};

app.animateDropM = function () {
  $("nav").toggleClass("show");
};

app.animateLogo = function (location) {
  // logo antlers expand
  $(`#${location} .logo2`).addClass("expand");
  setTimeout(() => {
    $(`#${location} .logo3`).addClass("expand");
  }, 1000);
  setTimeout(() => {
    $(`#${location} .logo1`).addClass("expand");
  }, 1500);
};

// starts animation that simulates rotation forward
app.animateRotation = function () {
  $(".board.center").addClass("centerANIM");
  $(".board.left").addClass("leftANIM");
  setTimeout(() => {
    $(".board.right").addClass("rightANIM");
  }, 100);
};

// starts animation that simulates rotation backward
app.animateRotationRev = function () {
  $(".board.center").addClass("centerANIMrev");
  $(".board.left").addClass("leftANIMrev");
  setTimeout(() => {
    $(".board.right").addClass("rightANIMrev");
  });
};

app.animateIntro = async function () {
  $(".swoopDown").addClass("downANIM");
  $(".swoopUp").addClass("upANIM");
  await app.pause(1000);
  $(".fadeIn").addClass("fadeInANIM");
};

/****************************************************************/
/*****************          HANDLERS          *******************/
/****************************************************************/

app.listeners = function () {
  app.handleMenu();
  app.handleBlurs();
  app.handleCarousel();
  app.handleForm();
};

app.handleForm = function () {
  $("form").validate({
    // validation rules
    rules: {
      name: {
        required: true,
      },
      _replyto: {
        email: true,
        required: true,
      },
      message: {
        required: true,
      },
    },
    // messages to appear when invalid
    messages: {
      name: {
        required: "Name Required",
      },
      _replyto: {
        email: "Valid Email Required",
        required: "Email Required",
      },
      message: {
        required: "Message Required",
      },
    },
    // submits once all validation clears
    submitHandler: function () {
      app.sendMessage();
    },
  });

  // reset message form
  $("#resetMssg").on("click", function () {
    app.resetForm();
  });

  // process the request to copy email
  $(".email").on("click", function () {
    app.copyEmail();
    Swal.fire({
      title: "COPIED TO YOUR CLIPBOARD",
      imageUrl: "",
      imageWidth: 550,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  });
};

app.handleBlurs = function () {
  $("a, button").on("click", function () {
    $(this).blur();
  });
};

app.handleMenu = function () {
  // show/hide menu
  app.$menuButtonD.on("click", function () {
    $("nav").removeClass("show");
    if (app.isDropped) {
      app.animateDropD();
      setTimeout(() => {
        app.$menuLinks.css("display", "none");
      }, 500);
    } else {
      app.$menuLinks.css("display", "block");
      setTimeout(() => {
        app.animateDropD();
      }, 500);
    }
    app.isDropped = !app.isDropped;
  });

  app.$menuButtonM.on("click", function () {
    $("nav").removeClass("collapse");
    if (app.isDroppedM) {
      app.animateDropM();
      setTimeout(() => {
        app.$menuLinks.css("display", "none");
      }, 500);
    } else {
      app.$menuLinks.css("display", "block");
      setTimeout(() => {
        app.animateDropM();
      }, 500);
    }
    app.isDroppedM = !app.isDroppedM;
  });
};

app.handleCarousel = function () {
  // rotate forward
  $("#forwards").on("click", () => {
    app.cycleForward();
    app.cycleMobileForward();
  });

  // rotate back
  $("#backwards").on("click", (e) => {
    app.cycleBackward();
    app.cycleMobileBackward();
  });

  $(".projects ul").on("click", ".project", function () {
    let selectedId = $(this).attr("id");
    app.updateMenu(selectedId);
    app.multiCycleBy(app.getCyclesQty(selectedId));
    app.multiMenuCycleBy(app.getCyclesMobileQty(selectedId));
    app.loadMobileProjects();
    try {
      app.loadProjectInfo(app.stage[1]);
    } catch (err) {}
  });
};

/****************************************************************/
/*****************           HELPERS         ********************/
/****************************************************************/

app.pause = function (miliseconds) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, miliseconds);
  });
};

/*****************      CONTACTS     ********************/

// copy email to user's cliboard
app.copyEmail = function () {
  const copyEmail = document.getElementById("email");
  copyEmail.select();
  copyEmail.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

// runs when form is submitted
app.sendMessage = function () {
  $.ajax({
    url: "https://formspree.io/xqkdpjpb",
    method: "POST",
    data: {
      name: app.form.$name.val(),
      _replyto: app.form.$email.val(),
      message: app.form.$message.val(),
    },
    dataType: "json",
  }).then((res) => {
    app.resetForm();
    Swal.fire({
      title: "YOUR MESSAGE WAS SENT  THANK YOU!",
      imageUrl: "",
      imageWidth: 280,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  });
};

// clears the message form
app.resetForm = function () {
  // clears error messages
  $("label.error").remove();
  $("label#replyTo-error").remove();
  // empties out the inputs
  app.form.$email.val("");
  app.form.$name.val("");
  app.form.$message.val("");
};

/*****************      PORTFOLIO     ********************/

/******** MENU **********/

// update the side menu for the selected project
app.updateMenu = function (id) {
  $("button.project").removeClass("selected");
  $("button.project").attr("disabled", false);
  $(`button#${id}`).addClass("selected");
  $(`button#${id}`).attr("disabled", true);
};

// gets the number of cycle forwards needed to center the selected project
app.getCyclesMobileQty = function (projectId) {
  const indx = app.mobileMenu.indexOf(projectId);
  const diff = 2 - indx;
  return diff < 0
    ? app.half + 1 + (app.mobileMenu.length - 1 - indx)
    : app.half - indx;
};

// cycles the arrays forward and reloads DOM by as many cycles as specified by qty
app.multiMenuCycleBy = function (qty) {
  for (let i = 0; i < qty; i++) {
    app.rotateMenuForwards();
  }
};

// adjust the project menu array and then load into the DOM
app.cycleMobileForward = function () {
  app.rotateMenuForwards();
  app.loadMobileProjects();
};

// adjust the project menu array and then load into the DOM
app.cycleMobileBackward = function () {
  app.rotateMenuBackwards();
  app.loadMobileProjects();
};

// shifts array to move forward
app.rotateMenuForwards = function () {
  const reverse = app.mobileMenu.pop();
  app.mobileMenu.unshift(reverse);
};

// shifts array to move backward
app.rotateMenuBackwards = function () {
  const next = app.mobileMenu.shift();
  app.mobileMenu.push(next);
};

// loads from menu array into the DOM
app.loadMobileProjects = async function () {
  $(".projects.mobile ul").empty();
  for (let i = 0; i < app.menuAmount; i++) {
    const isSelected = i === 2;
    const currentProject = app.que.find(
      (project) => app.mobileMenu[i] == project.id
    );
    $(".projects.mobile ul").append(
      app.freshProject(currentProject, isSelected)
    );
  }
};

/******** BOARDS **********/

// adjust the project menu array and then load into the DOM
app.multiCycleBy = function (qty) {
  for (let i = 0; i < qty; i++) {
    app.rotateBoardsFwd();
  }
};

// gets the number of cycle forwards needed to place selected project into the center board
app.getCyclesQty = function (projectId) {
  let indx;
  app.que.forEach((project, index) => {
    project.id === projectId ? (indx = index) : "";
  });
  return indx + 2;
};

// goes through one complete cycle of PROJECTS forward
app.cycleForward = function () {
  app.animateRotation();
  setTimeout(() => {
    app.refreshDOM("forwards");
  }, 500);
};

// goes through one complete cycle of PROJECTS backward
app.cycleBackward = function () {
  app.animateRotationRev();
  setTimeout(() => {
    app.refreshDOM("backwards");
  }, 500);
};

// clear out the old html boards and load fresh html for the boards
// rotate arrays
// load rotated boards into the DOM from revised arrays
app.refreshDOM = function (direction) {
  $(".rotationContainer").html(app.freshBoards());
  if (direction === "forwards") {
    app.rotateBoardsFwd();
  } else {
    app.rotateBoardsBack();
  }
  this.loadBoards();
  try {
    app.rotateProjectInfo(app.stage[1]);
  } catch (err) {}
  app.updateMenu(app.stage[1].id);
};

// removes next item from front of que, stages it, and then recycles it for later
// also stage is trimmed down to 3 (if necessary)
app.rotateBoardsFwd = function () {
  const next = app.que.shift();
  app.stage.unshift(next);
  app.stage.length > app.amount ? app.stage.pop() : "";
  app.que.push(next);
};

// takes the first item out of the stage (and out of the back of the que) and places it at the front of que
// the new third from last is retrieved and placed on the stage instead
app.rotateBoardsBack = function () {
  const first = app.que.pop();
  app.que.unshift(first);
  app.stage.shift();
  const reversed = app.que[app.que.length - app.amount];
  app.stage.push(reversed);
};

// does the inital loading of the boards by rotating boards until stage is filled
// then loads the boards into the DOM
app.initialBoardLoad = function () {
  let $boards = $(".board").toArray();
  $boards.forEach((board, index) => {
    app.rotateBoardsFwd();
  });
  app.loadBoards();
  try {
    app.rotateProjectInfo(app.stage[1]);
  } catch (err) {}
};

// loads rotated boards into the DOM
app.loadBoards = function () {
  const $boards = $(".board").toArray();
  $boards.forEach((board, index) => {
    $(`#${board.id}`).css({
      "background-image": `url(${app.stage[index].asset})`,
    });
  });
};

/******** PROJECTS **********/

// loads project info into DOM when menu clicked
app.loadProjectInfo = async function (project) {
  $(".board").css({
    "background-image": "none",
  });
  $(".projectInfo").fadeTo("fast", 0);
  $(".projectInfo .title").text("");
  $(".projectInfo .description").text("");
  $(".projectInfo .live").css("opacity", 0);
  $(".projectInfo .code").css("opacity", 0);
  await app.pause(500);
  $(".projectInfo").fadeTo("fast", 1, () => {
    $(".projectInfo .live").css("opacity", 1);
    $(".projectInfo .code").css("opacity", 1);
    $(".projectInfo .title").text(project.title);
    $(".projectInfo .description").text(`${project.description}`);
    $(".projectInfo .live").attr("href", project.liveLink);
    $(".projectInfo .code").attr("href", project.codeLink);
    $("a#main").attr("href", project.liveLink);
    app.loadSkills(project.skills);
    app.loadBoards();
  });
};

// loads project info into DOM when rotation control is clicked
app.rotateProjectInfo = function (project) {
  $(".projectInfo .title").text(project.title);
  $(".projectInfo .description").text(`${project.description}`);
  $(".projectInfo .live").attr("href", project.liveLink);
  $(".projectInfo .code").attr("href", project.codeLink);
  $("a#main").attr("href", project.liveLink);
  app.loadSkills(project.skills);
};

// loads skills into the dom
app.loadSkills = function (skills) {
  let completedSkills = app.completeSkills(skills);
  $(".projectInfo .skills").empty();
  completedSkills.forEach((skill) => {
    $(".projectInfo .skills").append(app.freshSkill(skill));
  });
};

// completes skills
app.completeSkills = function (skills) {
  let completed = skills.map((skill) => {
    return app.skills[skill];
  });
  return completed;
};

/****************************************************************/
/*****************          COMPONENTS       ********************/
/****************************************************************/

// constructs html of the three boards as they were in their original state
app.freshBoards = function () {
  return `      
        <div id="left"   class="board side left"></div>
        <a
          id="main"
          href="https://ania-m-pienio.github.io/ClickFly/"
          target="_blank"
          >
          <div id="center" class="board center"></div
        ></a>
        <div id="right"  class="board side right"></div>`;
};

// constructs html of a skill using the information passed
app.freshSkill = function (skill) {
  return ` 
    <li>
        <div class="icon imageType">
            <img src="${skill.asset}" alt="${skill.title} icon" />
            <h4>${skill.title}</h4>
        </div>
    </li>`;
};

app.freshProject = function (project, isSelected) {
  const selectedClass = isSelected ? "selected" : "";
  return `
    <li aria-role="button">
        <div
          aria-role="button"
          id="${project.id}" 
          class="project ${selectedClass}"
            >
          <h3>
            <span>| &nbsp;</span>${project.title}<span> &nbsp;|</span>
          </h3>
        </div>
    </li>
  `;
};

// unsleeps heroku dynos
app.unsleep = function () {
  // $.ajax({
  //   url: "https://robo-g-serve.herokuapp.com/awake",
  //   method: "GET",
  //   contentType: "json",
  // }).then((data) => {});
  // $.ajax({
  //   url: "https://teams-new-api.herokuapp.com/employees",
  //   method: "GET",
  //   contentType: "json",
  // }).then((data) => {});
  // $.ajax({
  //   url: "https://team-g-serve.herokuapp.com/awake",
  //   method: "GET",
  //   contentType: "json",
  // }).then((data) => {
  // });
  // $.ajax({
  //   url: "https://t4minty.herokuapp.com/",
  //   method: "GET",
  //   contentType: "json",
  // }).then((data) => {
  // });
};

/****************************************************************/
/*****************           SETUP           ********************/
/****************************************************************/

app.init = function () {
  app.unsleep();
  app.listeners();
  app.animateLogo("home");
  app.animateIntro();
  app.initialBoardLoad();
  app.loadMobileProjects();
};

$(() => {
  app.init();
});