<template>
  <div id="delivery_box">
          <div class="delivery">
              <div class="delivery_text"><span>store selection</span></div>
              <div class="can">
                  <div class="can_item1" style="background-color: #c39a6b;"> 

                    <p>
                     <i class="el-icon-success"></i>
                      Can Valley</p>
                    <p>489 Nicholson Rod, canning Valley,Washington,1b 6155</p>
                    <p>Tel: 08 6113 6617</p>
                    </div>
                  <div class="can_item2">
                    <p>
                       <i class="y"></i>
                      Can ton</p>
                    <p>Unitil 1355 Aibany Hwy, Cannington, WA 6107</p>
                    <p>Tel: 08 6161 6086</p>
                    
                  </div>
                  <div class="can_item3">
                    <p>
                      <i class="y y2"></i>
                      North Bridge</p>
                    <p>369 William Street, North Bridge,Wisconsin 600</p>
                    <p>Tel: 08 6161 6086</p>
                    </div>
              </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'delivery',
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
#delivery_box {
  color: #091d44;
  /* background-color: #000; */
  width: 100%;
  height: auto;
}

a {
  color: #091d44;

}
.delivery{
  width: 1000px;
  height: 150px;
  margin: 50px 0 0 40px;
  display: flex;
   justify-content: space-between;

}
.delivery_text{
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  width:auto;
}

.can{
  width: 870px;
  height: 100%;
  display:flex;
   justify-content: space-between;
}
.can div{
  width:230px;
  height:120px;
  border:1px solid #000;
  font-size:14px;
  font-weight: 500;
  line-height: 45px;
  word-break: break-all;
  letter-spacing: 1px;
  padding: 0 10px;
  position: relative;
}

.can div p:nth-child(1){
  text-align: center;
}
.can div p:nth-child(2){
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.el-icon-success{
  font-size: 24px;
  position: absolute;
  top: 10px;
  left: 50px;
}
.y{
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px #000 solid;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 55px;

}
.y2{
  left: 35px;

}
</style>