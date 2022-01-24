$(document).ready(function(){
  let total= 0;
  $("#form").submit(function(event){
    const name =$("#name").val();
    event.preventDefault();
    $(".page").hide();
    $(".page1").show();
    $(".insertName").text(name);
  });
  
  $("#form1").submit(function(event){
    const page1 = $("input:radio[name=page1]:checked").val();
    event.preventDefault();
    $(".page1").hide();
    if (page1 === "1") {
      total ++;
      $(".page2-1").show(); 
    } else if (page1 === "2"){
      total += 2;
      $(".page2-2").show();
    } else {
      $('#error').show();
    };
  });

  $("#form2-1").submit(function(event){
    const twoOne = $("input:radio[name=page2-1]:checked").val();
    event.preventDefault();
    $(".page2-1").hide();
    if (twoOne === "1") {
      total ++;
      $(".page3-1").show();
    } else if (twoOne === "2") {
      total += 2;
      $(".page3-2").show();
    } else {
      $('#error').show();
    };
  });

  $("#form2-2").submit(function(event){
    const twoTwo = $("input:radio[name=page2-2]:checked").val();
    event.preventDefault();
    $(".page2-2").hide();
    if (twoTwo === "1") {
      total ++;
      $(".page3-3").show();
    } else if (twoTwo === "2") {
      total += 2;
      $(".page3-4").show();
    } else {
      $('#error').show();
    };
  });

  $("#form3-1").submit(function(event){
    const threeOne = $("input:radio[name=page3-1]:checked").val();
    event.preventDefault();
    $(".page3-1").hide();
    if (threeOne === "1") {
      total ++;
      $(".page4-1").show();
    } else if (threeOne === "2") {
      total += 2;
      $(".page4-1").show();
    } else {
      $('#error').show();
    };
  });

  $("#form3-2").submit(function(event){
    const threeTwo = $("input:radio[name=page3-2]:checked").val();
    event.preventDefault();
    $(".page3-2").hide();
    if (threeTwo === "1") {
      total ++;
      $(".page4-2").show();
    } else if (threeTwo === "2") {
      total += 2;
      $(".page4-2").show();
    } else {
      $('#error').show();
    };
  });

  $("#form3-3").submit(function(event){
    const threeThree = $("input:radio[name=page3-3]:checked").val();
    event.preventDefault();
    $(".page3-3").hide();
    if (threeThree === "1") {
      total ++;
      $(".page4-3").show();
    } else if (threeThree === "2") {
      total += 2;
      $(".page4-3").show();
    } else {
      $('#error').show();
    };
  });

  $("#form3-4").submit(function(event){
    const threeFour = $("input:radio[name=page3-4]:checked").val();
    event.preventDefault();
    $(".page3-4").hide();
    if (threeFour === "1") {
      total ++;
      $(".page4-4").show();
    } else if (threeFour === "2") {
      total += 2;
      $(".page4-4").show();
    } else {
      $('#error').show();
    };
  });

  $("#form4-1").submit(function(event){
    const fourOne = $("input:radio[name=page4-1]:checked").val();
    event.preventDefault();
    $(".page4-1").hide();
    if (fourOne === "1") {
      total ++;
      $(".page5-1").show();
    } else if (fourOne === "2") {
      total ++;
      $(".page5-1").show();
    } else {
      $('#error').show();
    };
  });

  $("#form4-2").submit(function(event){
    const fourTwo = $("input:radio[name=page4-2]:checked").val();
    event.preventDefault();
    $(".page4-2").hide();
    if (fourTwo === "1") {
      total += 50;
      $(".page5-2").show();
    } else if (fourTwo === "2") {
      total += 50;
      $(".page5-2").show();
    } else {
      $('#error').show();
    };
  });

  $("#form4-3").submit(function(event){
    const fourThree = $("input:radio[name=page4-3]:checked").val();
    event.preventDefault();
    $(".page4-3").hide();
    if (fourThree === "1") {
      total += 150;
      $(".page5-3").show();
    } else if (fourThree === "2") {
      total += 150;
      $(".page5-3").show();
    } else {
      $('#error').show();
    };
  });

  $("#form4-4").submit(function(event){
    const fourFour = $("input:radio[name=page4-4]:checked").val();
    event.preventDefault();
    $(".page4-4").hide();
    if (fourFour === "1") {
      total += 300;
      $(".page5-4").show();
    } else if (fourFour === "2") {
      total += 300;
      $(".page5-4").show();
    } else {
      $('#error').show();
    };
  });


  $("#form5-1").submit(function(event){
    const fiveOne = $("input:radio[name=page5-1]:checked").val();
    event.preventDefault();
    $(".page5-1").hide();
    if (fiveOne === "1") {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else if (total >= 170) {
        return $("#output3").show();
      } else {
        return $("#output4").show();
      };
    } else {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else {
        return $("#output4").show();
      };
    };
  });

  $("#form5-2").submit(function(event){
    const fiveTwo = $("input:radio[name=page5-2]:checked").val();
    event.preventDefault();
    $(".page5-2").hide();
    if (fiveTwo === "1") {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else if (total >= 150) {
        return $("#output3").show();
      } else {
        return $("#output4").show();
      };
    } else {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else {
        return $("#output4").show();
      };
    };
  });

  $("#form5-3").submit(function(event){
    const fiveThree = $("input:radio[name=page5-3]:checked").val();
    event.preventDefault();
    $(".page5-3").hide();
    if (fiveThree === "1") {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else {
        return $("#output4").show();
      };
    } else {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else {
        return $("#output4").show();
      };
    };
  });

  $("#form5-4").submit(function(event){
    const fiveFour = $("input:radio[name=page5-4]:checked").val();
    event.preventDefault();
    $(".page5-4").hide();
    if (fiveFour === "1") {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else {
        return $("#output4").show();
      };
    } else {
      if (total <= 20) {
        return $("#output1").show();
      } else if (total >= 70) {
        return $("#output2").show();
      } else {
        return $("#output4").show();
      };
    };
  });
  $(".restart").submit(function(){

  });

});