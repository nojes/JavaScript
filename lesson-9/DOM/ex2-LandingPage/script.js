/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */

function CreateDiv(attribute, value) {
    var element = document.createElement('div');
    element.setAttribute(attribute, value);
    return element;
}

function CreateInput(type, name, placeholder) {
    var element = document.createElement('input');
    element.setAttribute('type', type);
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    return element;
}

var body = document.getElementsByTagName('body')[0];
console.log(body);

/** body */
var wrapper = CreateDiv('id', 'wrapper');
body.appendChild(wrapper);

/** content */
var content = CreateDiv('class' ,'content');
wrapper.appendChild(content);

/** block photo */
var block_photo = CreateDiv('class', 'block');
block_photo.setAttribute('id', 'photo');
content.appendChild(block_photo);

var img = CreateDiv('class', 'img');
img.setAttribute('style', 'background-image: url(img/user.png)');
block_photo.appendChild(img);
/** block photo end */

/** block about */
var block_about = CreateDiv('class', 'block');
block_about.setAttribute('id', 'about');
content.appendChild(block_about);

var about_h1 = document.createElement('h1');
about_h1.innerHTML = 'About';
p = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit eum porro,accusantium explicabo nihil excepturi tempore repellendus commodi, eius consectetur magnam in necessitatibus, nesciunt corporis, quos alias sequi earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur maxime perspiciatis debitis, illo earum illum commodi placeat qui eum velit quas ullam voluptas alias ratione, veritatis neque nobis ad! Itaque ab beatae aliquid voluptate dignissimos. Qui,provident eius vel sed eos magni veritatis officia nam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem esse consequuntur tempore obcaecati deserunt nam unde voluptates quidem, ipsa ad a provident fugiat at voluptatem porro architecto neque possimus?");

block_about.appendChild(about_h1);
block_about.appendChild(p);
/** block photo end */

/** block form */
var form_h1 = document.createElement('h1');
form_h1.innerHTML = 'Contact';

var block_form = CreateDiv('class', 'block');
block_form.setAttribute('id', 'form');

var form = document.createElement('form');
form.setAttribute('method', 'get');
content.appendChild(block_form);

var input_name = CreateInput('text', 'name', 'Name');
var input_email = CreateInput('email', 'email', 'Email');

var textarea = document.createElement('textarea');
textarea.setAttribute('name', 'massage');
textarea.setAttribute('placeholder', 'Message');

var button = document.createElement('button');
button.setAttribute('class', 'btn');
button.setAttribute('id', 'submit-contact');
button.innerHTML = "Send";

block_form.appendChild(form_h1);
block_form.appendChild(input_name);
block_form.appendChild(input_email);
block_form.appendChild(textarea);
block_form.appendChild(button);
/** block form end */

/** block images */
var block_images = CreateDiv('class', 'block');
block_images.setAttribute('id', 'images');
content.appendChild(block_images);

var images_img = CreateDiv('class', 'img');
images_img.setAttribute('id', 'slider');
images_img.setAttribute('style', 'background-image: url(img/1.jpg)');

block_images.appendChild(images_img);
/** block images end */

/** content end */





/**
 * @returns {String[]}
 */
function GetImages() {
    return [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg"
    ]
}

/** @type {Slider} */
var slider = new Slider("img/", GetImages(), "slider", 3000);
slider.Run();
//slider.Log();
//slider.Stop();
