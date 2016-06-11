/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */

/**
 * Создает экземпляр Slider.
 *
 * @constructor
 * @this {Slider}
 *
 * @param {String} img_path - Путь к картинкам
 * @param {String[]} images - Массив картинок
 * @param {String, Number} id - ID элемента
 * @param {Number} ms - Интервал(мс) смены картинок
 * @property {Number} index - Индекс картинки
 * @property {Element} img - Элемент, фон которого будет меняться
 * @property {Number} interval - ID интервала
 */
function Slider(img_path, images, id, ms) {
    this.img_path = img_path || "img/";
    this.images = images;
    this.img = document.getElementById(id);
    this.ms = ms || 3000;
    this.index = 1;
    this.interval = 0;
}

/**
 * Меняет картинку.
 * @this {Slider}
 */
Slider.prototype.ChangeImage = function () {
    if (this.index == this.images.length) {
        this.index = 0;
    }
    //this.Log();
    this.img.setAttribute("style", "background-image: url(" + this.img_path + this.images[this.index++] + ")");
};

/**
 * Запускает Слайдер.
 * @this {Slider}
 */
Slider.prototype.Run = function () {
    this.interval = setInterval(this.ChangeImage.bind(this), this.ms);
};

/**
 * Останавливает Слайдер.
 * @this {Slider}
 */
Slider.prototype.Stop = function () {
    clearInterval(this.interval);
};

/**
 * Выводит содержимое переменных экземпляра.
 * @this {Slider}
 */
Slider.prototype.Log = function () {
    console.log("img_path: " + this.img_path);
    console.log("images: " + this.images);
    console.log("img: " + this.img);
    console.log("ms: " + this.ms);
    console.log("intervalID:" + this.interval);
    console.log("index: " + this.index);
    console.log("current_image: " + this.images[this.index]);
};