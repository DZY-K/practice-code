window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })

    const choose_color = document.querySelector('.choose_color')
    choose_color.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            this.querySelector('.current').classList.remove('current')
            e.target.classList.add('current')
        }
    })
    const choose_version = document.querySelector('.choose_version')
    choose_version.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            this.querySelector('.current').classList.remove('current')
            e.target.classList.add('current')
        }
    })
    const choose_type = document.querySelector('.choose_type')
    choose_type.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            this.querySelector('.current').classList.remove('current')
            e.target.classList.add('current')
        }
    })
    const choose_btns =document.querySelector('.choose_btns')
    choose_btns.addEventListener('click',function(e){
        // console.log(e.target.className);
        if(e.target.tagName==='A'){
            if(e.target.className=='add'){
                this.querySelector('input').value++
            }
            if(e.target.className=='reduce'){
                if(this.querySelector('input').value>1){
                    this.querySelector('input').value--
                }else{
                    e.target.style.cursor='not-allowed'
                }
            }
        }

    })
    const detail_tab_list =document.querySelector('.detail_tab_list')
    detail_tab_list.addEventListener('click',function(e){
        // console.log(e.target.tagName);
        if(e.target.tagName==='LI'){
            this.querySelector('.current').classList.remove('current')
            e.target.classList.add('current')
            // console.log(e.target.dataset.id);
            let id =+e.target.dataset.id
            document.querySelector('.detail_tab_con .active').classList.remove('active')
            document.querySelector(`.detail_tab_con ul:nth-child(${id+1})`).classList.add('active')
        }
    })
})