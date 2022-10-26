const loader = (loaderSeletor) => {
    let load = document.querySelector(loaderSeletor);
    load.style.opacity = 0;

    document.querySelector("body").style.overflowY = "auto";

    setTimeout(() => {
        load.style.display = "none";
    }, 100);
};

export default loader;
