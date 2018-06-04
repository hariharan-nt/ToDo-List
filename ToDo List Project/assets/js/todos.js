
//Checking off ToDo List
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		if($("input").val() === ""){
			alert("Enter a task to add");
		}else{
			var newTodo =  $("input").val();
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "
				+newTodo+"</li>");
			$(this).val("");
		}
	}
});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
});

