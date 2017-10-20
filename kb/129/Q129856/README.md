---
layout: page
title: "Q129856: Use DAO GetRows Method to Fill Variant Arrays"
permalink: /kb/129/Q129856/
---

## Q129856: Use DAO GetRows Method to Fill Variant Arrays

{% raw %}

	Article: Q129856
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbcode kbDatabase
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article summarizes how to use the GetRows method in Visual Basic version
	4.0.
	
	The GetRows method was added to the RecordSet object to facilitate testing from
	Visual Basic of a lower-level C/C++ GetRows method that will be used by Visual
	C++ developers. It was later found to be generally useful in many places. This
	function is not documented in the Visual Basic Help file or the manuals, but can
	be found by using the Object Browser under the RecordSet object. It is described
	in the ReadMe file included with Visual Basic version 4.0.
	
	MORE INFORMATION
	================
	
	The GetRows method retrieves multiple rows of a recordset into an array. Here is
	the syntax:
	
	     variant = recordset.GetRows (numrows)
	
	- variant is the name of a variant to hold the returned data.
	
	- numrows is the number of rows to retrieve.
	
	GetRows returns the specified number of rows and all the fields (columns) into a
	variant containing an array. Subsequent rows contain the data.
	
	After a call to GetRows, the current record is positioned at the next unread row.
	In other words, GetRows has the same positioning effect as Move numrows.
	
	If more rows are requested than are available, only the number available are
	returned. Use Ubound to determine how many rows were actually fetched. The array
	is sized to fit the number of rows returned.
	
	For example, if you returned the results into a variant called a, you could use
	the following code to determine how many rows were actually returned:
	
	     numreturned = Ubound(a,2) + 1
	
	The "+ 1" is used because the first data returned is in the zero (0) element of
	the array.
	
	The number of rows that can be fetched is constrained by available memory and
	should be chosen to suit your application. Don't expect to use GetRows to bring
	your whole table into an array.
	
	Because all fields of the recordset are returned in the array, including long
	memo and binary fields, you may want to use a query that restricts the columns
	returned.
	
	Code Sample
	-----------
	
	  ' This example uses the GetRows method to bring two fields
	  ' from the Orders table into memory.
	
	  Dim db as Database
	  Dim rs as Recordset
	  Dim data as Variant
	
	  Set db = OpenDatabase("sales.mdb")
	  Set rs = db.OpenRecordset("Select OrderId, CustId from Orders")
	
	  While Not rs.eof
	     data = rs.GetRows(10)
	     ' .... do something with the data
	  Wend
	
	  rs.Close
	  db.Close
	
	Additional query words: 4.00 Excel vb4win vb4all
	
	======================================================================
	Keywords          : kbcode kbDatabase 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
