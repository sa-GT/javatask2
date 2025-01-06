// document.getElementById("forms").addEventListener("click",displayy)

// document.getElementById("forms").addEventListener("click",function(){
// debugger
//     document.getElementById("demo").innerHTML = "Hello World";
// })


document.getElementById("forms").addEventListener("submit", function () {
    debugger
    document.getElementById("demo").innerHTML = "Hello World";
    event.preventDefault();

    // Fetching form values
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let birth_date = document.getElementById("birth_date").value
    let image = document.getElementById("image").value;
    let desc = document.getElementById("description").value;
    let major = document.getElementById("major").value;
    let university = document.getElementById("university").value;
    let siblings = document.getElementById("siblings").value;
    let sibling_description = document.getElementById("sibling_description").value

    // Handling checkbox values
    let html = document.getElementById("html").checked ? "HTML" : "";
    let css = document.getElementById("css").checked ? "CSS" : "";
    let javascript = document.getElementById("javascript").checked ? "JavaScript" : "";

    // Storing data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("birth_date", birth_date);
    localStorage.setItem("image", image);
    localStorage.setItem("description", desc);
    localStorage.setItem("major", major);
    localStorage.setItem("university", university);
    localStorage.setItem("siblings", siblings);
    localStorage.setItem("sibling_description", sibling_description);

    // Store selected programming languages as a comma-separated string
    let languages = [html, css, javascript].filter(Boolean).join(", ");
    localStorage.setItem("languages", languages);

    document.getElementById("name_result").innerHTML=name
    let imageurl= localStorage.getItem("image")
    document.getElementById("image_result").src = imageurl
    let i1 = localStorage.getItem("age")
    document.getElementById("age_result").innerHTML = i1
    let i2 = localStorage.getItem("gender")
    document.getElementById("gender_result").innerHTML=i2
    let i3 = localStorage.getItem("birth_date")
    document.getElementById("birth_date_result").innerHTML=i3
    let i4 = localStorage.getItem("description")
    document.getElementById("description_result").innerHTML=i4
    let i5 = localStorage.getItem("major")
    document.getElementById("major_result").innerHTML=i5
    let i6 = localStorage.getItem("university")
    document.getElementById("university_result").innerHTML=i6
    let i7 = localStorage.getItem("siblings")
    document.getElementById("siblings_result").innerHTML=i7
    let i8 = localStorage.getItem("sibling_description")
    document.getElementById("sibling_description_result").innerHTML=i8
    let i9= localStorage.getItem("languages")
    document.getElementById("languages_result").innerHTML = i9

  });
// function displayy(event){
//         event.preventDefault();
//         let name = document.getElementById("name").value
//         let age = document.getElementById("age").value
//         let gender = document.getElementById("gender").value;
//         let birth_date = document.getElementById("birth_date").value
//         let image = document.getElementById("image").value
//         let desc = document.getElementById("description").value
//         let major = document.getElementById("major").value
//         let university = document.getElementById("university").value
//         let html = document.getElementById("html").checked ? "html":"";
//         let Css = document.getElementById("css").checked ? "css" : "";
//         let javascript = document.getElementById("javascript").checked ? "javascript" : " ";
//         let siblings= document.getElementById("siblings").value
//         let sibling_description = document.getElementById("sibling_description").value
//         localStorage.setItem("name", name);
//         localStorage.setItem("age", age);
//         localStorage.setItem("gender", gender);
//         localStorage.setItem("birth_date", birth_date);
//         localStorage.setItem("image", image);
//         localStorage.setItem("description", desc);
//         localStorage.setItem("major", major);
//         localStorage.setItem("university", university);
//         localStorage.setItem("siblings", siblings);
//         localStorage.setItem("sibling_description", sibling_description);
//         let languages = [html, css, javascript].filter(Boolean).join(", ");
//         localStorage.setItem("languages", languages);
// }
// //Wrong

// function displayy(event) {
//     event.preventDefault();

//     // Fetching form values
//     let name = document.getElementById("name").value
//     let age = document.getElementById("age").value
//     let gender = document.getElementById("gender").value
//     let birth_date = document.getElementById("birth_date").value
//     let image = document.getElementById("image").value;
//     let desc = document.getElementById("description").value;
//     let major = document.getElementById("major").value;
//     let university = document.getElementById("university").value;
//     let siblings = document.getElementById("siblings").value;
//     let sibling_description = document.getElementById("sibling_description").value

//     // Handling checkbox values
//     let html = document.getElementById("html").checked ? "HTML" : "";
//     let css = document.getElementById("css").checked ? "CSS" : "";
//     let javascript = document.getElementById("javascript").checked ? "JavaScript" : "";

//     // Storing data in localStorage
//     localStorage.setItem("name", name);
//     localStorage.setItem("age", age);
//     localStorage.setItem("gender", gender);
//     localStorage.setItem("birth_date", birth_date);
//     localStorage.setItem("image", image);
//     localStorage.setItem("description", desc);
//     localStorage.setItem("major", major);
//     localStorage.setItem("university", university);
//     localStorage.setItem("siblings", siblings);
//     localStorage.setItem("sibling_description", sibling_description);

//     // Store selected programming languages as a comma-separated string
//     let languages = [html, css, javascript].filter(Boolean).join(", ");
//     localStorage.setItem("languages", languages);

//     document.getElementById("name_result").innerHTML=name
//     let imageurl= localStorage.getItem("image")
//     document.getElementById("image_result").src = imageurl
//     let i1 = localStorage.getItem("age")
//     document.getElementById("age_result").innerHTML = i1
//     let i2 = localStorage.getItem("gender")
//     document.getElementById("gender_result").innerHTML=i2
//     let i3 = localStorage.getItem("birth_date")
//     document.getElementById("birth_date_result").innerHTML=i3
//     let i4 = localStorage.getItem("description")
//     document.getElementById("description_result").innerHTML=i4
//     let i5 = localStorage.getItem("major")
//     document.getElementById("major_result").innerHTML=i5
//     let i6 = localStorage.getItem("university")
//     document.getElementById("university_result").innerHTML=i6
//     let i7 = localStorage.getItem("siblings")
//     document.getElementById("siblings_result").innerHTML=i7
//     let i8 = localStorage.getItem("sibling_description")
//     document.getElementById("sibling_description_result").innerHTML=i8
//     let i9= localStorage.getItem("languages")
//     document.getElementById("languages_result").innerHTML = i9
// }
