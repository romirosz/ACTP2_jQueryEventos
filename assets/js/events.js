$(function(){
	$('.cards').on("click",'.card', function(){
		$(this).toggleClass('card--open')
	})

	$('.card__like').on("click",function(){
		event.stopPropagation();
		$(this).toggleClass('card__like--red');
	});

	$('.card__follow-btn').on("click",function(){
		event.stopPropagation
		$(this).toggleClass('card__follow-btn--following')
	});

	$('#image').on('change',function(){
		var src= 'assets/images/squared/' + $(this).val()
		$('.create__image .create__img').attr('src',src)
	});

	$('#author').on('change',function(){
		var src = 'assets/images/profiles/' + $(this).val()
		$('.create__profile .create__img').attr('src',src)
	});


	$('.create__form').on('submit', function(event){
		event.preventDefault();

	



	})

});