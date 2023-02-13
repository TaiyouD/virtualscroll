<template>
    <div class="item">
      <span>{{ index }} - {{ source.name }}</span>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      index: { // Index of current items 
        type: Number,
        default: 0
      },
      source: {  //Contains object with a unique key and text attached to them
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
  </script>
  
