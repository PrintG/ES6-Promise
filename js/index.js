/*==============================*/
//     * author -> Print        //
//     * QQ -> 2662256509       //
/*=============================*/
var body = document.body,
    ls = asynLoadImage("img/loading.gif"),
    leStyle = "position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;border-radius:50%;";
ls.then( v => {
    v.style.cssText = leStyle;
    body.appendChild(v);
    let load = [];
    for(var i = 1; i <= 6; i++){
        load.push(asynLoadImage(`img/${i}.jpg`));
    };
    let Bwidth = document.documentElement.clientWidth || document.body.clientWidth;
    load.forEach( (v,i) => {
        load[i].then( v => {
            v.width = Bwidth;
            document.body.appendChild(v);
        });
    });
    var load_over = Promise.all(load);
    load_over.then( r => v.style.display = "none" );
})

function asynLoadImage(url){
    return new Promise((reslove, reject) => {
        var oImg = new Image();
        oImg.src = url;

        oImg.onload = () => reslove(oImg);
        oImg.onerror = () => reject(new Error("出错啦！！！"+url));
    });
}
