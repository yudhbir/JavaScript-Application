<html>
<head>
	<title>JS Application</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="bootstrap/css/bootstrap.css" rel="stylesheet" media="screen">
		<link href="font-awesome/css/font-awesome.css" rel="stylesheet">
		<link href="app.css" rel="stylesheet" media="screen">
		<script src="jquery-1.12.4.min.js"></script>
		<script src="bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
 <div class="container">
	<div class="row">
		<div class="span6">
			<div class="author_info"><i class="fa fa-user-secret" aria-hidden="true" title="Author"></i><div id="author_detail"></div></div>
		</div>
		<div class="span6">
			<div class="btn-group action_btn">
				<button name="load_result" id="load_result" onclick="author.load_record()" class="btn"><i class="fa fa-home" aria-hidden="true"></i>Load Books</button>
				<button name="add_book" id="add_book" onclick="author.add_record()" class="btn">Add Books</button>
			</div>
		</div>
	</div>
	<div class="row">
		
	</div>
<div class="row">
	<div class="span12">
		<table id="book_record" border="1" width="50%" class="table table-bordered">
			<tr><td>ISBN</td><td>TITLE</td><td>YEAR</td><td colspan="2" class="text-center">ACTIONS</td></tr>
			<tr id="no_record"><td colspan="3">No Record Found......</td></tr>
		</table>
	</div>
</div>
<div class="row">
	<div class="span12">
		<div id="add_book_sec">
			<h4>Add Book</h4>
			<form name="book_frm" id="book_frm" method="post">
				<table id="book_record" border="1" width="50%" class="table table-bordered">
					<tr><td>ISBN: </td><td><input type="text" name="isbn" value=""></td></tr>
					<tr><td>TITLE: </td><td><input type="text" name="title" value=""></td></tr>
					<tr><td>YEAR: </td><td><input type="text" name="year" value=""></td></tr>
					<tr><td colspan="2"><input type="button" name="save" value="Save Book" onclick="author.insert_record();"class="btn saction_btn"></td></tr>
					
				</table>
			</form>
		</div>
	</div>
</div>
<div class="row">
	<div class="span12">
		<div id="edit_book_sec">
			<h4>Edit Book</h4>
			<form name="Edbook_frm" id="Edbook_frm" method="post">
				<table id="EDbook_record" border="1" width="50%" class="table table-bordered">
					<tr><td>ISBN: </td><td><input type="text" name="Ed_isbn" value=""></td></tr>
					<tr><td>TITLE: </td><td><input type="text" name="Ed_title" value=""></td></tr>
					<tr><td>YEAR: </td><td><input type="text" name="Ed_year" value=""></td></tr>
					<tr><td colspan="2"><input type="button" name="Ed_save" value="Update Book" onclick="author.update_book();" class="btn saction_btn"></td></tr>
					
				</table>
				<input type="hidden" name="book_id" value="">
			</form>
		</div>
	</div>
</div>
</div>
<script src="app-min.js"></script>
</body>
</html>

