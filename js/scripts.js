$(document).ready(function(){
  let total= 0;
  $("#form").submit(function(event){
    const name =$("name").val();
    console.log("It Worked!")
    event.preventDefault();
    $(".page").hide();
    $(".page1").show();
    $(".insertName").text(name);
  });
  
  $("#form1").submit(function(event){
    const page1 = $("input:radio[name=page1]:checked").val();
    console.log("It Worked!")
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

  $("#form2-1").submit(function(event){
    const twoOne = $("input:radio[name=page2-1]:checked").val();
    console.log("It Worked!")
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
    };
  });

  $("#form3-2").submit(function(event){
    const threeTwo = $("input:radio[name=page3-2]:checked").val();
    console.log("It Worked!")
    event.preventDefault();
    $(".page3-2").hide();
    if (threeTwo === "1") {
      total ++;
      $(".page4-3").show();
    } else if (threeTwo === "2") {
      total += 2;
      $(".page4-4").show();
      console.log("It Worked!")
    };
  });

  $("#form3-3").submit(function(event){
    const threeThree = $("input:radio[name=page3-3]:checked").val();
    event.preventDefault();
    $(".page3-3").hide();
    if (threeThree === "1") {
      total ++;
      $(".page4-5").show();
    } else if (threeThree === "2") {
      total += 2;
      $(".page4-6").show();
    };
  });

  $("#form3-4").submit(function(event){
    const threeFour = $("input:radio[name=page3-4]:checked").val();
    event.preventDefault();
    $(".page3-4").hide();
    if (threeFour === "1") {
      total ++;
      $(".page4-7").show();
    } else if (threeFour === "2") {
      total += 2;
      $(".page4-8").show();
    };
  });

  $("#form4.1").submit(function(event){
    const fourOne = $("input:radio[name=page4.1]:checked").val();
    event.preventDefault();
    $(".page4-1").hide();
    if (fourOne === "1") {
      total ++;
      $(".page5-1").show();
    } else if (fourOne === "2") {
      total += 2;
      $(".page5-2").show();
    };
  });

  $("#form4.2").submit(function(event){
    const fourTwo = $("input:radio[name=page4.2]:checked").val();
    event.preventDefault();
    $(".page4-2").hide();
    if (fourTwo === "1") {
      total ++;
      $(".page5-3").show();
    } else if (fourTwo === "2") {
      total += 2;
      $(".page5-4").show();
    };
  });

  // $("#form4.3").submit(function(event){
  //   const threeThree = $("input:radio[name=page3.3]:checked").val();
  //   event.preventDefault();
  //   $(".page3-3").hide();
  //   if (threeThree === "1") {
  //     total ++;
  //     $(".page5-5").show();
  //   } else if (threeThree === "2") {
  //     total += 2;
  //     $(".page5-6").show();
  //   };
  // });

  // $("#form4.4").submit(function(event){
  //   const threeFour = $("input:radio[name=page3.4]:checked").val();
  //   event.preventDefault();
  //   $(".page3-4").hide();
  //   if (threeFour === "1") {
  //     total ++;
  //     $(".page5-7").show();
  //   } else if (threeFour === "2") {
  //     total += 2;
  //     $(".page5-8").show();
  //   };
  // });

  // $("#form4.5").submit(function(event){
  //   const threeOne = $("input:radio[name=page3.1]:checked").val();
  //   event.preventDefault();
  //   $(".page3-1").hide();
  //   if (threeOne === "1") {
  //     total ++;
  //     $(".page4-1").show();
  //   } else {
  //     total += 2;
  //     $(".page4-2").show();
  //   };
  // });

  // $("#form4.6").submit(function(event){
  //   const threeTwo = $("input:radio[name=page3.2]:checked").val();
  //   event.preventDefault();
  //   $(".page3-2").hide();
  //   if (threeTwo === "1") {
  //     total ++;
  //     $(".page4-3").show();
  //   } else if (threeTwo === "2") {
  //     total += 2;
  //     $(".page4-4").show();
  //   };
  // });

  // $("#form4.7").submit(function(event){
  //   const threeThree = $("input:radio[name=page3.3]:checked").val();
  //   event.preventDefault();
  //   $(".page3-3").hide();
  //   if (threeThree === "1") {
  //     total ++;
  //     $(".page4-5").show();
  //   } else if (threeThree === "2") {
  //     total += 2;
  //     $(".page4-6").show();
  //   };
  // });

  // $("#form4.8").submit(function(event){
  //   const threeFour = $("input:radio[name=page3.4]:checked").val();
  //   event.preventDefault();
  //   $(".page3-4").hide();
  //   if (threeFour === "1") {
  //     total ++;
  //     $(".page4-7").show();
  //   } else if (threeFour === "2") {
  //     total += 2;
  //     $(".page4-8").show();
  //   };
  // });

});