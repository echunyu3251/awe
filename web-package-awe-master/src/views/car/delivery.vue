<template>
    <div id="delivery_box">
            <div class="delivery">
                <div class="delivery_text"><span>Arriver by</span></div>
                <div class="del_today">
                    <div class="thubox">
                      <div class="d_yuan">
                        <div class="x_yuan"></div>
                      </div>
                      <div class="thu">
                        <span> THu,Sep 17</span>
                      </div>
                    </div>
                   
                    <table>
                      <tr class="tr1">
                      <td>Today</td>
                      <td>11</td>
                      <td>00</td>
                      <td>AM</td>
                      </tr>
                      <tr>
                        <td>Sat Sep 19</td>
                        <td>12</td>
                        <td>05</td>
                        <td>PM</td>
                      </tr>
                      <tr>
                        <td>Sat Sep 19</td>
                        <td>12</td>
                        <td>05</td>
                        <td>PM</td>
                      </tr>
                      <tr>
                        <td>Sat Sep 19</td>
                        <td>12</td>
                        <td>05</td>
                        <td>PM</td>
                      </tr>
                      </table>


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
    width: 620px;
    height: 150px;
    background-color: #fff;
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
  .del_today{
    width: 500px;
    height: 145px;
    border: 1px solid #000;

  }
  .thubox{
    width:100%;
    height:35px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    

  }
  .d_yuan{
    width:18px;
    height: 18px;
    border-radius: 50%;
    border: 2px #c39a6b solid;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 15px;
  }
  .x_yuan{
    display: block;
    width:10px;
    height: 10px;
    border-radius: 50%;
   background-color: #c39a6b;
  
  }
  .thu{
    font-size: 18px;
    font-weight: 600;
    margin-left: 15px;
    letter-spacing: 1px;
  }


  table{
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color:#b8b8b8 ;
  }
  .tr1{
    border-bottom: 1.5px #b8b8b8 solid;
    color: #091d44;
    font-size: 18px;
    font-weight: 600;
  }
  tr{
    height:28px;
    border:none;
    font-size: 15px;
    font-weight: 500;
  }
  tr td:first-child{
    width:200px;

  }
</style>