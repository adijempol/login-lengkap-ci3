$(function () {

	$('.tombolAddRole').on('click', function () {

		$('#newRoleModalLabel').html("Add New Role");
		$('.modal-footer button[type=submit]').html('Add');
		$('#role').val('');
		// $('#nim').val('');
		// $('#email').val('');
		// $('#jurusan').val('');
		// $('#id').val('');
	});

	$('.tampilRoleUbah').on('click', function () {

		$('#newRoleModalLabel').html("Edit Role");
		$('.modal-footer button[type=submit]').html('Edit');
		$('.modal-body form').attr('action', 'http://localhost/tcs-login/admin/ubahRole');

		const id = $(this).data('id');

		$.ajax({
			url: 'http://localhost/tcs-login/admin/getRoleUbah',
			data: {
				id: id
			},
			method: 'post',
			dataType: 'json',
			success: function (data) {
				$('#role').val(data.role);
				$('#id').val(data.id);
				//console.log(data);
			}
		});

	});

});
