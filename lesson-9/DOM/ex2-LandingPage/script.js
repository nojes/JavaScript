/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */

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