$(document).ready(function () {
	//alert("in js");
	$("#frm_contact_us").validate({
		errorElement: 'div', // label 
		rules: {
			txtname: { required: true },
			txtphone: { required: true, minlength: 10, maxlength: 50},
			txtemail: { required: true },
			ta_msg: { required: true },
		},
		messages: {
			txtname: { required: "Please give your name" },
			txtphone: { required: "Please give your contact number", minlength: "Please correct your contact number", maxlength: "Contact number exceding the limit" },
			txtemail: { required: "Please give your email ID" },
			ta_msg: { required: "Please write your message" },
		},
		errorPlacement: function (error, element) {
			error.appendTo(element.parent());
		},

		submitHandler: function (form) {
			var SITEROOT = "send_msg.php";
			//alert (SITEROOT);
			var cname = $("#txtname").val();
			var cemail = $("#txtemail").val();
			var cphone = $("#txtphone").val();
			var cmsg = $("#ta_msg").val();
			$.ajax({
				type: "POST", // GET
				url: SITEROOT, // the current page
				data: "name=" + cname + "&email=" + cemail + "&phone=" + cphone + "&msg=" + cmsg,
				dataType: 'html',
				// show send_msg.php
				success: function (data) {
					//alert(data);
					$("#succmsg").html(data);
					$("#succmsg").addClass("alert alert-success");
					$("#succmsg").show();
				}
			});
		},
	});
});