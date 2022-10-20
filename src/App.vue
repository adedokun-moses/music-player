<template>
  <router-view />
</template>

<style>
  @-moz-document url-prefix() { /* Disable scrollbar Firefox */
            html{
              scrollbar-width: none;
            }
          }
body {
  background: #1d2123;
  font-family: "Quicksand";
  margin: 0px;
  padding: 0px;
  color: white;
  scrollbar-width: none;
  box-sizing: border-box;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */

   text-decoration: none;

}

body::-webkit-scrollbar {
  display: none;
}
* {
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
}

</style>
