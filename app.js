// 建立Vue instance，能用原因是因為上面有載入Vue framework
// data可以放資料去配合template{{}} syntax去動態變化
// 這data內容可以 dynamic data storing
new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        name: 'Dante',
        url: 'https://www.youtube.com/?gl=TW&tab=m1',
        // data裡面允許是array/list，仍可配合template syntax or v-bind
        classes: ['one', 'two']
    },
    // methods則可以放大量的func給template syntax呼叫
    methods:{
        greet(time){
            // 不用寫成this.data.title，VUE自動將data內容拉到最高層級的properties屬性
            // 透過以下這方法就可以將，data內容引入到不同的method之下去做operation操作
            // this.title

            // 若希望將字串輸出variable需要配合dollar sign配{}
            // 這是ES6 JS的functionality功能
            // method scope中的var不用this(包含parameters)，叫做Template Literals
            // template literals字串必須是grace accent重音符號而非single quotes'（一般字串)
            return `Hello and good ${time}, ${this.name}!`;
        }
    }
})

