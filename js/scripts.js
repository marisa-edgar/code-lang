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
    const page1 = $("input:radio[name=page1]").val();
    event.prventDefault();
    $(".page1").hide();
    $(".page2").show();

    if (page1 === "1") {
      total  ++;
    } else if (page1 === "2"){
      total += 2;
    };

  });

  $("#form2.1").submit(function(event){
    const pageTwo = $("input:radio[name=page2.1]").val();
    event.preventDefault();
    $(".pageTwo").hide();
    $(".page3").show();

    if (pageTwo === "1") {
      total  ++;
    } else if (pageTwo === "2") {
      total += 2;
    };
  });

  $("#form3").submit(function(event){
    const pageThree = $("input:radio[name=page3]").val();
    event.preventDefault();
    $(".page3").hide();
    $(".page4").show();

    if (pageThree === "1") {
      total  ++;
    } else if (pageThree === "2") {
      total += 2;
    };
  });

  $("#form4").submit(function(event){
    const pageFour = $("input:radio[name=page4]").val();
    event.preventDefault();
    $(".page4").hide();
    $(".page5").show();

    if (pageFour === "1") {
      total  ++;
    } else if (pageFour === "2") {
      total += 2;
    };
  });

  $("#form5").submit(function(event){
    const pageFive = $("input:radio[name=page5]").val();
    event.preventDefault();
    $(".page5").hide();
    $(".page6").show();

    if (pageFive === "1") {
      total  ++;
    } else if (pageFive === "2") {
      total += 2;
    };
  });

//   $("#form2").submit(function(event){
//     const page2 = $("input:radio[name=page2]").val();
//     event.preventDefault();
//     $(".page2").hide();
//     $(".page3").show();

//     if (page2 === "1") {
//       total  ++;
//     } else if (page2 === "2") {
//       total += 2;
//     };
//   });

//   $("#form3").submit(function(event){
//     const page3 = $("input:radio[name=page3]").val();
//     event.preventDefault();
//     $(".page3").hide();
//     $(".page4").show();

//     if (page3 === "1") {
//       total  ++;
//     } else if (page3 === "2") {
//       total += 2;
//     };
//   });

//   $("#form4").submit(function(event){
//     const page4 = $("input:radio[name=page4]").val();
//     event.preventDefault();
//     $(".page4").hide();
//     $(".page5").show();

//     if (page4 === "1") {
//       total  ++;
//     } else if (page4 === "2") {
//       total += 2;
//     };
//   });

//   $("#form5").submit(function(event){
//     const page5 = $("input:radio[name=page5]").val();
//     event.preventDefault();
//     $(".page5").hide();
//     $(".page6").show();

//     if (page5 === "1") {
//       total  ++;
//     } else if (page5 === "2") {
//       total += 2;
//     };
  // });
});