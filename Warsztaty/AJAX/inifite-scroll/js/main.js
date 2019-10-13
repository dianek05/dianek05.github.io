let koniecLicznik = 0 ;

window.onscroll = function () {

    let d = document.documentElement;

    // wysokosc wewnetrzna okna przegladarki
    let innerHeigh = window.innerHeight;

    // długość całej strony od góry do dołu
    let offsetHeigh = d.offsetHeight;

    // wysokosc na jaką przeskorolowaliśmy
    let scrollingTop = d.scrollTop;

    let sumScrollTopInnerHeight = Math.ceil(scrollTop + innerHeigh);

    // console log
    console.log('offset: ${offsetHeight}')

    console.log("scrollTop + innerHeight: " + sumScrollTopInnerHeight);

    if (sumScrollTopInnerHeight >= offsetHeight) {
        koniecLicznik += 1;

        console.log("Dojdziono do końca razy: " + koniecLicznika);
    }
};