new Vue({
  el: '#exercise',
  data() {
    return {
      value: 'Alicia Cisneros',
      awesome: true,
      val: ['https://www.okchicas.com/wp-content/uploads/2015/02/perritos-m%C3%A1s-adorables-11.jpg',
              'https://dam.vanidades.com/wp-content/uploads/2020/04/%C2%A1Como-si-necesit%C3%A1ramos-m%C3%A1s-razones-para-amar-a-los-perritos-Seg%C3%BAn-investigadores-el-mejor-amigo-del-hombre-podr%C3%ADa-ayudar-a-detectar-el-coronavirus.-770x513.jpg', 
              'https://assets.nacionrex.com/__export/1582590075513/sites/debate/img/2020/02/24/69ec52ac01bd9e7c316b91bd4c3aa2ed_crop1582590058186.jpg_1577178466.jpg',
              'https://1.bp.blogspot.com/--Becx7wVqXI/XQ6ldZJwGDI/AAAAAAAAPwo/hYZtvjfdNzYt54yF-st2CJ0E9tVDGv1VQCLcBGAs/s1600/perrito.png',
              'https://image.winudf.com/v2/image/Y29tLlB1cHBpZXNMaXZlV2FsbHBhcGVyX3NjcmVlbl81XzE1Mzc5NjA4NDdfMDAz/screen-5.jpg?fakeurl=1&type=.jpg'],
      notImage: true,
      image: 'https://www.okchicas.com/wp-content/uploads/2015/02/perritos-m%C3%A1s-adorables-11.jpg',
      aceptas: 'aceptas adoptar al perrito más buena onda'
      
    }
  },
  methods: {
      changeTitle: function(){
        this.image = this.val[Math.floor(Math.random() * this.val.length)];
      }
  }
});