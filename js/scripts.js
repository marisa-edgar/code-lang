$(document).ready(function(){
  let total= 0;
  $("#form").submit(function(event){
    const name =$("name").val();
    event.preventDefault();
    $(".page").hide();
    $(".page1").show();
    $(".insertName").text(name);
  });
  
  $("#form1").submit(function(event){
    const name =$("name").val();
    const page1 = $("input:radio[name=page1]").val();
    event.prventDefault();
    $(".page1").hide();
    $(".page2").show();
    $(".insertName").text(name);
  });

  $("#form2").submit(function(event){
    const name =$("name").val();
    const page2 = $("input:radio[name=page2]").val();
    event.preventDefault();
    $(".page2").hide();
    $(".page3").show();
    $(".insertName").text(name);
  });

  $("#form3").submit(function(event){
    const name =$("name").val();
    const page3 = $("input:radio[name=page3]").val();
    event.preventDefault();
    $(".page3").hide();
    $(".page4").show();
    $(".insertName").text(name);
  });

  $("#form4").submit(function(event){
    const name =$("name").val();
    const page4 = $("input:radio[name=page4]").val();
    event.preventDefault();
    $(".page4").hide();
    $(".page5").show();
    $(".insertName").text(name);
  });

  $("#form5").submit(function(event){
    const name =$("name").val();
    const page5 = $("input:radio[name=page5]").val();
    event.preventDefault();
    $(".page5").hide();
    $(".page6").show();
    $(".insertName").text(name);
  });
});