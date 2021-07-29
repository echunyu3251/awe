<template>
  <div id="myfooter">
    <div class="footer_nav">
      <div class="nav_box" v-for="(navitem,index) in nav" :key="index">
        <span class="xhx_box">
          {{navitem.title}}
          <span class="xhx"></span>
        </span>
        <p>{{navitem.content1}}</p>
        <p>{{navitem.content2}}</p>
        <p>{{navitem.content3}}</p>
        <p>{{navitem.content4}}</p>
        <p>{{navitem.content5}}</p>
        <p>{{navitem.content6}}</p>
        <p>{{navitem.content7}}</p>
        <p>{{navitem.content8}}</p>
        <p>{{navitem.content9}}</p>
        <p>{{navitem.content10}}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "myfooter",
  data() {
    return {
      nav: [
        {
          id: 1,
          title: "Whole",
          content1: "Milk",
          content2: "Shose",
          content3: "Mother&Baby",
          content4: "Health",
          content5: "Make Up",
          content6: "Daily",
          content7: "Jewelry",
          content8: "AUS",
          content9: "JPN&Kr",
          content10: "CHN",
        },
        {
          id: 2,
          title: "Milk",
          content1: "One Paragraph",
          content2: "Two Paragraph",
          content3: "Three Paragraph",
          content4: "Four Paragraph",
          content5: "Adult",
          content6: "Teenagers",
          content7: "Special Formula",
        },
        {
          id: 3,
          title: "Shoes",
          content: "Melissa",
          content2: "D&K",
          content3: "Ever",
          content4: "OZLANA",
          content5: "EDGII",
        },
        {
          id: 4,
          title: "Mother&Baby",
          content: "Baby Medicine",
          content2: "Baby Food",
          content3: "Baby Products",
          content4: "Baby Care",
          content5: "Baby Toys",
          content6: "Mother Care",
        },

        {
          id: 5,
          title: "Health",
          content: "Honey Syrup",
          content2: "Beauty And Brightening",
          content3: "Baby Nutrition",
          content4: "Mommy Nutrition",
          content5: "Nutrition Supplement",
          content6: "Body Shaping",
          content7: "Care For The Elderly",
        },

        {
          id: 6,
          title: "Make Up",
          content: "Cleansing And Makeup Removal",
          content2: "Facial Essence",
          content3: "Skin Car",
          content4: "Eye Care",
          content5: "Skin Care Suit",
          content6: "Mask Care",
          content7: "Body Care",
          content8: "Make Up",
          content9: "Sunscreen Repair",
          content10: "Essential Oil Aromatherapy",
        },

        {
          id: 7,
          title: "Daily",
          content: "Portable Water Cup",
          content2: "Bedding Article ",
          content3: "Wash And Care Daily Use",
          content4: "Oral Care",
          content5: "Women's Care",
          content6: "Home Cleaning",
          content7: "Drugs",
          content8: "Electrical Miscellaneous",
          content9: "Daily Groceries",
        },

        {
          id: 8,
          title: "Jewelry",
          content: "Shoes",
          content2: "Clothing",
          content3: "Scarf",
          content4: "Hat Jewelrye",
        },
        {
          id: 9,
          title: "AUS",
          content: "Domestic Dry Goods",
          content2: "Australian Cuisine",
          content3: "Australian Wine",
          content4: "Fresh Food",
        },
        {
          id: 10,
          title: "JPN&Kr",
          content: "Health Care And Skin Care",
          content2: "Japanese And Korean Groceries",
        },
        {
          id: 11,
          title: "CHN",
          content: "Snack",
          content2: "Wine and drink mixing",
          content3: "Meat and egg ingredients",
          content4: "instant food",
          content5: "Frozen food",
          content6: "Refrigerated food",
          content7: "Grain and oil seasoning",
          content8: "Suprise groceries",
        },
      ],
    };
  },
};
</script>
  
<style scoped>
#myfooter {
  width: 100%;
  height:auto;
  margin-top: 3.75rem;
  /* background-color: #f4f5f5; */
  padding-bottom: 50px;
}
.footer_nav {
  width: 91.6%;
  height: 23.75rem;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.nav_box {
  width: 8.125rem;
  height: 23.75rem;
  color: #000;
}
.xhx_box {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  padding-bottom: .625rem;
  text-align: center;
  display: inline-block;
  position: relative;
}
.xhx {
  width: .9375rem;
  height: 0;
  border-bottom-width: .25rem;
  border-bottom-style: solid;
  border-bottom-color: #f7931d;
  border-radius: .125rem;
  position: absolute;
  left: 50%;
  margin-left: -0.46875rem;
  bottom: 0;
}
.nav_box p {
  font-size: 14px;
  font-weight: 400;
  margin-top: 1.25rem;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
  