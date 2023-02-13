
<template>
  <div id="testStyle">
    <div class="wrapper">
      <virtual-list
        class="list"
        style="height: 300px; overflow-y: auto"
        data-key="unique_key"
        :keeps="7"  
        :data-sources="computedItems"
        :data-component="Item" 
      />
    </div>
  </div>
</template>

<script>
import Item from './ItemList'
export default {
  name: 'App',
  data() {
    return {
      Item,
      items: [  //Add more data to test out the virtual list 
      { number: '1', name: 'Test' },
        { number: '45', name: 'Test1' },
        { number: '5', name: 'Test2' },
        { number: '77', name: 'Test3' },
        { number: '13', name: 'Test4' },
        { number: '532', name: 'Test5' },
        { number: '11', name: 'Test6' },
        { number: '2', name: 'Test7' },
        { number: '3', name: 'Test8' },
      ]
    }
  },
  computed: {
    computedItems() {
      return this.items.map((item, index) => {
        item.unique_key = `item_${index}`
        return item
      })
    }
  }
}
</script>

<style>
#testStyle {
  font-family: 'Avenir';
  text-align: center;
  margin-top: 10em;
  color: #2c3e50;
  margin-top: 1em;
  padding: 1em;
}
.item {
  padding: 10;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid blue;
  padding: 1em;
}
.list {
  border: 2px solid black;
  border-radius: 3px;
}

</style>
