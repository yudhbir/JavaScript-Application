var author = {  
  firstName: "Yudhbir",
  lastName: "Singh",
  full_name: function() { return "Author :: "+author.firstName+" "+author.lastName; },
  load_record: function()
	{ 
		var retrievedObject = sessionStorage.getItem('bookObject');
		
		if(retrievedObject===null)
		{
			author.book_listing();
			var retrievedObject = sessionStorage.getItem('bookObject');
		}
		var json_obj=JSON.parse(retrievedObject);
		var json_ob=json_obj.books;
		//console.log(JSON.stringify(json_ob));
		var html='';
		for (var i=0; i<json_ob.length; i++)
		{
			json_ob[i].edit='<a href="javascript:void(0);" onclick="author.edit_book('+i+');" style="float:right;"><i class="fa fa-pencil-square-o" aria-hidden="true" title="Edit"></i></a>';
			json_ob[i].deleted='<a href="javascript:void(0);" onclick="author.delete_book('+i+')"><i class="fa fa-trash-o" aria-hidden="true" title="Delete"></i></a>';
			html+="<tr><td>"+json_ob[i].isbn+"</td>"+"<td>"+json_ob[i].title+"</td>"+"<td>"+json_ob[i].year+"</td>"+"<td>"+json_ob[i].edit+"</td>"+"<td>"+json_ob[i].deleted+"</td></tr>";
			
		}		
		// console.log(html);
		if(document.getElementById("no_record")!=null)
		document.getElementById("no_record").remove();//jquery remove();			
		document.getElementById('book_record').insertAdjacentHTML('beforeend', html);	//jquery append();		
	},
	book_listing:function()
	{
		var result={"books":[{ "isbn":"006251587X", "title":"Weaving the Web", "year":2000 },{"isbn":"0465026567", "title":"Gödel, Escher, Bach", "year":1999 },{"isbn":"0465030793", "title":"I Am A Strange Loop", "year":2008 }]};		
		sessionStorage.setItem('bookObject', JSON.stringify(result));
		return result;
	},
	add_record:function()
	{
		document.getElementById('edit_book_sec').style.display = 'none'; 
		document.getElementById('add_book_sec').style.display = 'block'; 
	},
	insert_record:function()
	{
		var data=$('#book_frm').serializeArray(); 				
		var book_itm=author.generate_json(data);
		
		var data = JSON.parse(sessionStorage.getItem('bookObject'));
		data.books.push(book_itm);
		//console.log(JSON.stringify(data.books));
		sessionStorage.setItem('bookObject', JSON.stringify(data));
		document.getElementById('add_book_sec').style.display = 'none';
		
		author.dynamic_content();
		document.getElementById("load_result").click();
	},
	edit_book:function(i){
		
		document.getElementById('add_book_sec').style.display = 'none'; 
		var retrievedObject = sessionStorage.getItem('bookObject');
		var Object=JSON.parse(retrievedObject);
		
		document.getElementsByName('Ed_isbn')[0].value=Object.books[i].isbn;
		document.getElementsByName('Ed_title')[0].value=Object.books[i].title;
		document.getElementsByName('Ed_year')[0].value=Object.books[i].year;
		document.getElementsByName('book_id')[0].value=i;
		
		document.getElementById('edit_book_sec').style.display = 'block'; 
	},
	update_book:function(){
		
		var data=$('#Edbook_frm').serializeArray(); 				
		var book_itm=author.generate_json(data);
		var id=book_itm.book_id;
				
		delete book_itm.book_id;		//console.log(book_itm);
		
		var data = JSON.parse(sessionStorage.getItem('bookObject'));
		data.books[id].isbn=book_itm.Ed_isbn;
		data.books[id].title=book_itm.Ed_title;
		data.books[id].year=book_itm.Ed_year;
		
		sessionStorage.setItem('bookObject', JSON.stringify(data));
		document.getElementById('edit_book_sec').style.display = 'none';
		
		author.dynamic_content();
		document.getElementById("load_result").click();
	},
	delete_book:function(i){
		 var retVal = confirm("Do you want to continue ?");
		   if( retVal == true ){
				var data = JSON.parse(sessionStorage.getItem('bookObject'));
				data.books.splice(i, 1);
				
				sessionStorage.setItem('bookObject', JSON.stringify(data));
				author.dynamic_content();
				document.getElementById("load_result").click();
		   }
		   else{
			  
			  return false;
		   }
		
	},
	generate_json:function(data){
		
		var loginFormObject = {};
		$.each(data,function(i, v) {loginFormObject[v.name] = v.value;});
		return loginFormObject;
	},
	dynamic_content:function () {
		
		var items = document.getElementById('book_record');
		while (items.children.length > 1) {
			items.removeChild(items.lastChild);
		}
	},
	ajax_request:function()
	{
		$.ajax({
			'type':'post',
			'data':'url=run',
			success:function(data){
				console.log('data is running successfully');
			},
			error:function(){
				console.log('error is running in the code');
			}
		});  
	}
};
document.getElementById('author_detail').innerHTML=author.full_name();
document.getElementById('add_book_sec').style.display = 'none'; 
document.getElementById('edit_book_sec').style.display = 'none';
