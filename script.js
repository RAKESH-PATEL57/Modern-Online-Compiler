var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
    mode: "text/x-c++src",
    theme: "dracula",
    lineNumbers:true,
    autoCloseBrackets:true,
})
var width = window.innerWidth
editor.setSize(0.7*width,"500")