console.log(huoui);

document.addEventListener('DOMContentLoaded', function () {
    var toast = document.getElementById('toast');
    toast.addEventListener('click',function(evt){
        huoui.toast('我就试试不干嘛！');
    })
})