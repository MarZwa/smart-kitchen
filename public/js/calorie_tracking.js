const navigation_icon = document.getElementsByClassName("navigation-icon")[0];
const navigation = document.getElementsByClassName("navigation__menu")[0];
const dashboard_navigation = document.getElementsByClassName("dashboard-navigation__profile")[0];
const html = document.getElementsByTagName('html')[0];

function changeIcon() {
    navigation_icon.classList.toggle("change");
    navigation.classList.toggle("visible");
    html.classList.toggle('no-scroll');
}

function changeIconDashboard() {
    navigation_icon.classList.toggle("change");
    dashboard_navigation.classList.toggle("visible");
    html.classList.toggle('no-scroll');
}

// Custom HTMLElement for Circular progression bar
class CircularProgressionBar extends HTMLElement {
constructor() {
    super();
    const stroke = this.getAttribute('stroke');
    const radius = this.getAttribute('radius');
    const color = this.getAttribute('color');
    const normalizedRadius = radius - stroke * 2;
    this._circumference = normalizedRadius * 2 * Math.PI;

    this._root = this.attachShadow({mode: 'open'});
    this._root.innerHTML = 
    `<svg
        height="${radius * 2}"
        width="${radius * 2}"
        >
        <circle
            stroke="${color}"
            stroke-dasharray="${this._circumference} ${this._circumference}"
            style="stroke-dashoffset:${this._circumference}"
            stroke-width="${stroke}"
            fill="transparent"
            r="${normalizedRadius}"
            cx="${radius}"
            cy="${radius}"
        />
    </svg>

    <style>
        circle {
        transition: stroke-dashoffset 0.35s;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        }
    </style>`;


    let curVal = this.getAttribute('curVal');
    let maxVal = this.getAttribute('maxVal');
    const circle = this._root.querySelector('circle');
    
    if(100 < ((curVal / maxVal) * 100)){
        circle.style.stroke = "#F05454";
        curVal = maxVal;
    }

    const offset = this._circumference - (curVal / maxVal * this._circumference);
    circle.style.strokeDashoffset = offset;
}
}

window.customElements.define('circular-progression-bar', CircularProgressionBar);

if (window.location.href.indexOf('/products') != -1){
    const select = document.getElementsByClassName('products__filter-section__select')[0];
    let product_wrapper = document.getElementsByClassName("product-wrapper")[0];
    let list_of_products = product_wrapper.getElementsByTagName('li');
    let select_value;
    for(let i = 0; i < list_of_products.length; i++){
        list_of_products[i].style.display = '';
    }

    select.addEventListener('change', function(){
        select_value = select.value;
        if(select_value == 'All'){
            for(let i = 0; i < list_of_products.length; i++){
                    list_of_products[i].style.display = '';       
                }  
            }
        else {
            for(let i = 0; i < list_of_products.length; i++){
                    if (list_of_products[i].dataset.productCategory == select_value){
                        list_of_products[i].style.display = '';
                    }     
                    else {
                        list_of_products[i].style.display = 'none'; 
                    } 
                }  
            }
    });
}