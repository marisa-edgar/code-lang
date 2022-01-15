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
    const page1 = $("input:radio[name=page1]:checked").val();
    event.preventDefault();
    $(".page1").hide();
    if (page1 === "1") {
      total ++;
      $(".page2-1").show(); 
    } else if (page1 === "2"){
      total += 2;
      $(".page2-2").show();
    };
  });

  $("#form2.1").submit(function(event){
    const twoOne = $("input:radio[name=page2.1]:checked").val();
    event.preventDefault();
    $(".page2-1").hide();
    if (twoOne === "1") {
      total ++;
      $(".page3-1").show();
    } else if (twoOne === "2") {
      total += 2;
      $(".page3-2").show();
    };
  });

  $("#form2.2").submit(function(event){
    const twoTwo = $("input:radio[name=page2.2]:checked").val();
    event.preventDefault();
    $(".page2-2").hide();
    if (twoTwo === "1") {
      total ++;
      $(".page3-3").show();
    } else if (twoTwo === "2") {
      total += 2;
      $(".page3-4").show();
    };
  });

  $("form3.1").submit(function(event){
    const threeOne = $("input:radio[name=page3.1]:checked").val();
    event.preventDefault();
    $(".page3-1").hide();
    $("page4-1").show();
  });

  // $("#form3.1").submit(function(event){
  //   const threeOne = $("input:radio[name=page3.1]:checked").val();
  //   event.preventDefault();
  //   $(".page3-1").hide();
  //   if (threeOne === "1") {
  //     total ++;
  //     $(".page4-1").show();
  //   } else if (threeOne === "2") {
  //     total += 2;
  //     $(".page4-2").show();
  //   };
  // });

  // $("#form3.2").submit(function(event){
  //   const threeTwo = $("input:radio[name=page3.2]:checked").val();
  //   event.preventDefault();
  //   $(".page3-1").hide();
  //   if (threeTwo === "1") {
  //     total ++;
  //     $(".page4-3").show();
  //   } else if (threeTwo === "2") {
  //     total += 2;
  //     $(".page4-4").show();
  //   };
  // });

});