$(function() {

	$('.cards').on('click', '.card', function(event) {
		$(this).toggleClass('card--open')
	});

	$('.cards').on('click', '.card__like', function(event) {
		event.preventDefault()
		event.stopPropagation()
		$(this).toggleClass('card__like--red')
	});

	$('.cards').on('click', '.card__follow-btn', function(event) {
		event.stopPropagation()
		$(this).toggleClass('card__follow-btn--following');
	});

	$('#image').on('change', function(event) {
		var value = $(this).val()
		$('.create__image .create__img').attr('src', 'assets/images/squared/' + value)
	});

	$('#author').on('change', function(event) {
		var value = $(this).val()
		$('.create__profile .create__img').attr('src', `assets/images/profiles/${ value }`)
	});

	$('.create__form').on('submit', function(event) {
		event.preventDefault();
		
		var title 		= $('.create__input').val()
		var image 		= $('#image').val()
		var author 		= $('#author').val()
		var followers 	= $('#followers').val()
		var likes 		= $('#likes').val()
		var following 	= $('#following').val()
		var name 		= $('#author').children(':selected').text()

		var html 		= `<li class="card">
						      <div class="card__highlight">
						        <img class="card__img" src="./assets/images/squared/${ image }" alt="">
						      </div>
						      <div class="card__content">
						        <div class="card__profile-container">
						          <img class="card__profile" src="./assets/images/profiles/${ author }" alt="">
						        </div>
						        <div class="card__title">
						          <h2>${ title }</h2>
						        </div>
						        <div class="card__author">
						          <h3 class="card__author-name">${ name }</h3>
						        </div>
						        <a class="card__like" href="#">
						          <i class="fas fa-heart"></i>
						        </a>
						        <div class="card__hidden">
						          <ul class="social">
						            <li class="social__element">
						              <div class="social__number">${ followers }</div>
						              <div class="social__text">Followers</div>
						            </li>
						            <li class="social__element">
						              <div class="social__number">${ likes }</div>
						              <div class="social__text">Likes</div>
						            </li>
						            <li class="social__element">
						              <div class="social__number">${ following }</div>
						              <div class="social__text">Following</div>
						            </li>
						          </ul>
						          <div class="card__follow">
						            <button class="card__follow-btn">Seguir</button>
						          </div>
						        </div>
						      </div>
						    </li>`
		
		$('.cards').append(html)

		$('.create__input').val('')
		$('#image').val('uk.png')
		$('#author').val('uk.png')
		$('#followers').val('')
		$('#likes').val('')
		$('#following').val('')
		$('.create__image .create__img').attr('src', 'assets/images/squared/uk.png')
		$('.create__profile .create__img').attr('src', 'assets/images/profiles/uk.png')
	})
})
