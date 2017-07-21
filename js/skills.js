var list = document.getElementsByClassName('skill-list')[0];
var skills = ["Digital Sculpting",
               "Organic Modeling",
               "Organic Texturing",
               "Hard Surface Modeling",
               "Hard Surface Texturing",
               "Html, Css, Sass",
               "Javascript, Jquery",
               "Node.Js",
               "Angular.js",
               "C, C# and Java",
               "Database programming (SQL), Php",
               "Responsive Web design",
               "Texturing (PBR)",
               "Level design and beauty pass"];

var degreeLevels = ["2",
              "2",
              "2",
              "1",
              "1",
              "2",
              "2",
              "1",
              "2",
              "1",
              "1",
              "2",
              "2",
              "0"];

for(var i = 0; i < skills.length; i++){
  var listElement = document.createElement('li');
  var text = document.createTextNode(skills[i]);
  var degree = document.createElement('div');
  var degreeAlt0 = document.createElement('div');
  var degreeAlt1 = document.createElement('div');
  var degreeAlt2 = document.createElement('div');
  var degreeAlt3 = document.createElement('div');
  degree.classList.add("degree");
  switch (degreeLevels[i]) {
    case "0":
      degreeAlt3.classList.add("active");
      break;
    case "1":
      degreeAlt2.classList.add("active");
      degreeAlt3.classList.add("active");
      break;
    case "2":
      degreeAlt3.classList.add("active");
      degreeAlt2.classList.add("active");
      degreeAlt1.classList.add("active");
      break;
    case "3":
      degreeAlt3.classList.add("active");
      degreeAlt2.classList.add("active");
      degreeAlt1.classList.add("active");
      degreeAlt0.classList.add("active");
      break;
    default:
      degreeAlt3.classList.add("active");
  }
  degree.appendChild(degreeAlt0);
  degree.appendChild(degreeAlt1);
  degree.appendChild(degreeAlt2);
  degree.appendChild(degreeAlt3);
  listElement.appendChild(text);
  listElement.appendChild(degree);
  list.appendChild(listElement);
}
