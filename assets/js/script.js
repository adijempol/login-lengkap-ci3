$(function () {

	$('.tombolAddMenu').on('click', function () {

		$('#newMenuModalLabel').html("Add New Menu");
		$('.modal-footer button[type=submit]').html('Add');
		$('#menu').val('');

	});

	$('.tampilModalUbah').on('click', function () {

		$('#newMenuModalLabel').html("Edit Menu");
		$('.modal-footer button[type=submit]').html('Edit');
		$('.modal-body form').attr('action', 'http://localhost/tcs-login/menu/ubah');

		const id = $(this).data('id');

		$.ajax({
			url: 'http://localhost/tcs-login/menu/getUbah',
			data: {
				id: id
			},
			method: 'post',
			dataType: 'json',
			success: function (data) {
				$('#menu').val(data.menu);
				$('#id').val(data.id);
				//console.log(data);
			}
		});

	});

});
