<template>
  <div id="app">
  <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  name:'app',
  components:{
    Nav 
  }
}
</script>
<style>
*{
  padding:0;
  margin:0;
}
ul li{
  list-style:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content:center;
  align-items:center;
}
#nav {
  position:fixed;
  width:100%;
  bottom:0;
  display:flex;
  border-top:
}

#nav a {
  flex:1;
  font-weight: bold;
  color: #2c3e50;
  display:flex;
  flex-direction:column;
  text-decoration:none;
}

i{
  font-size:18px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.contaniner{
  width: 100%;
  position:fixed;
  top:56px;
  bottom:61px;
  overflow-y: scroll;
}
</style>
