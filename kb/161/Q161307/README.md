---
layout: page
title: "Q161307: HOWTO: Use Visual FoxPro Tables in Visual Basic"
permalink: /kb/161/Q161307/
---

## Q161307: HOWTO: Use Visual FoxPro Tables in Visual Basic

{% raw %}

	Article: Q161307
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The structure of FoxPro tables has changed with the release of Visual FoxPro
	3.0. Visual FoxPro 3.0 now has a database container file with the extension .DBC
	that contains references to tables, but does not contain the tables themselves.
	Like previous versions of FoxPro, the tables still reside in their own .DBF
	files.
	
	The structure of a Visual FoxPro table depends upon whether that table is
	included in a database container. A table not included in a database container
	is called a "free table" and its structure differs from a "database table."
	Visual Basic must know which type of table it is trying to access in order to
	know how to read the structure of the table.
	
	With Visual FoxPro "free tables," Visual Basic recognizes these files much like
	it recognizes older FoxPro tables. Visual Basic's database object corresponds to
	the directory in which the "free tables" reside. However, with "database
	tables," the Visual Basic database object corresponds to the Visual FoxPro .DBC
	file, which contains reference to the "database tables."
	
	MORE INFORMATION
	================
	
	Free Tables
	-----------
	
	Here is some sample code to open the Foxuser.DBF table:
	
	     Private Sub Form_Load()
	         Dim FoxFreeDB As Database
	         Dim FoxFreeRS As Recordset
	         Set FoxFreeDB = Workspaces(0).OpenDatabase("C:\VFP", False, _
	                         False, "FoxPro 3.0;")
	         Set FoxFreeRS = FoxFreeDB.OpenRecordset("Foxuser")
	         Set Data1.Recordset = FoxFreeRS
	     End Sub
	
	Database Tables
	---------------
	
	Here is some sample code to open the Employee.DBF table that resides in the
	Tastrade.DBC database container:
	
	     Private Sub Form_Load()
	         Dim FoxDataDB As Database
	         Dim FoxDataRS As Recordset
	         Set FoxDataDB = Workspaces(0).OpenDatabase( _
	                         "C:\VFP\Samples\Mainsamp\Data\Tastrade.DBC", _
	                         False, False, "FoxPro DBC;")
	         Set FoxDataRS = FoxDataDB.OpenRecordset("Employee")
	         Set Data1.Recordset = FoxDataRS
	     End Sub
	
	When Visual Basic accesses a Visual FoxPro "database table," it uses the .DBC
	file to list and locate .DBF files. Visual Basic does not use the .DBC file to
	determine the structure of the .DBF files; that information is obtained by
	examining the .DBF file itself. This means that long field names, which Visual
	FoxPro stores in the .DBC file, will not be accessible in Visual Basic. For
	example, the above sample that reads the Employee table will have an Employee ID
	field "Employee_I" instead of "Employee_ID" because the .DBF file does not store
	the long field name.
	
	Another ramification of reading the linked tables directly is that Jet marks
	these tables as read-only because all the Referential Integrity rules for a
	table are stored in the database container file. Visual FoxPro free tables are
	also read only.
	
	NOTE: The 16-bit edition of Visual Basic version 4.0 cannot read files in the
	Visual FoxPro version 3.0 format without a third-party ODBC driver.
	
	REFERENCES
	==========
	
	For more information explaining why the Visual Basic Data Control does not list
	all possible Visual FoxPro connect properties, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q140770 : PRB: Accessing Visual FoxPro 3.0 Files from Visual Basic 4.0
	
	Additional query words: fox foxpro dbc open dbf xbase kbVBp600 kbVBp400 kbdse kbDSupport kbVBp kbVFP300
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB400Search kbVB400
	Version           : :4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
