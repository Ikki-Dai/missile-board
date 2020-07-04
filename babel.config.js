module.exports = {
  "presets": [
    // "@vue/cli-plugin-babel/preset",
    "@vue/app"
  ],
  "plugins": [
    // [
    //   "component",
    //   {
    //     "libraryName": "element-ui",
    //     "styleLibraryName": "theme-chalk"
    //   }
    // ],
    [
      "import", 
      {
        "libraryName": "ant-design-vue", 
        // "libraryDirectory": "es", 
        "style": "css" 
      }
    ]
  ]
}