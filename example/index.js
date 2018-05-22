console.log(huoui);

document.addEventListener('DOMContentLoaded', function () {
    var toast = document.getElementById('toast');
    toast.addEventListener('click', function (evt) {
        huoui.toast('我就试试不干嘛！');
    });

    var confirm = document.getElementById('confirm');
    confirm.addEventListener('click', function (evt) {
        huoui.confirm({
            title: '点击我干嘛',
            yes: {
                cb: function () {
                    console.log('哈哈哈哈哈')
                }
            }
        });
    });
})