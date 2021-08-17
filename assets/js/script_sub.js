$(function () {

	$('.tombolSub').on('click', function () {

		$('#newSubMenuModalLabel').html("Add New Submenu");
		$('.modal-footer button[type=submit]').html('Add');
		$('.modal-body form')[0].reset();
		// $('#title').val('');
		// $('#menu_id').val('');
		// $('#url').val('');
		// $('#icon').val('');
		//$('#is_active').val('');
	});

	$('.tampilModalSub').on('click', function () {

		$('#newSubMenuModalLabel').html("Edit Submenu");
		$('.modal-footer button[type=submit]').html('Edit');
		$('.modal-body form').attr('action', 'http://localhost/tcs-login/menu/ubahSub');

		const id = $(this).data('id');

		$.ajax({
			url: 'http://localhost/tcs-login/menu/getUbahSub',
			data: {
				id: id
			},
			method: 'post',
			dataType: 'json',
			success: function (data) {
				$('#title').val(data.title);
				$('#menu_id').val(data.menu_id);
				$('#url').val(data.url);
				$('#icon').val(data.icon);
				$('#id').val(data.id);
			}
		});

	});



});
