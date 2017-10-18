---
layout: page
title: "Q101742: How to Open dBASE Table with Nonstandard File Extension"
permalink: kb/101/Q101742/
---

## Q101742: How to Open dBASE Table with Nonstandard File Extension

	Article: Q101742
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To open a dBASE table file that has a non-standard file extension, specify the
	table name as <filename>#<extension>.
	
	MORE INFORMATION
	================
	
	The standard file extension used by dBASE for tables is .DBF. In Visual Basic
	version 3.0 using the dBASE installable ISAMs, you can open a table by
	specifying the file name without this extension because the dBASE installable
	ISAM assumes the extension to be .DBF by default. If you specify the extension
	<filename>.<extension>, the dBASE installable ISAM will not
	recognize it and will give you the following error message:
	
	  <filename>.<extension> isn't a valid name.
	
	To open a dBASE table file that has a non-standard file extension, specify the
	table name as <filename>#<extension>. The dBASE installable ISAM
	interprets the pound sign (#) in the table name as a period and opens the dBASE
	table.
	
	Example
	-------
	
	The following code example demonstrates how to open a dBASE table file that has a
	non-standard file extension (AUTHORS.OLD) and print the first field of all
	records in the table to the form. The following example assumes that you have a
	dBASE III table with a file name of AUTHORS.OLD located in the
	C:\DBASEIII\OLDBOOKS directory. You may need to modify the example and create a
	dBASE III database with a table called AUTHORS.OLD in order for it to work
	correctly.
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Add a Command Button (Command1) to Form1.
	
	3. Add the following code to the Click event of Command1:
	
	     Sub Command1_Click()
	        Dim db As Database
	        Dim OldAuthors As Table
	
	        Connect$ = "dBASE III"          ' Specify database type
	        dbName$ = "C:\DBASEIII\OLDBOOKS"      ' Specify database directory
	
	        Set db = OpenDatabase(dbName$, False, False, Connect$)
	        Set OldAuthors = db.OpenTable("Authors#Old") ' Open table
	        While Not OldAuthors.EOF
	           Print OldAuthors(0)           ' Print field(0) to the form
	           OldAuthors.MoveNext           ' for all records.
	        Wend
	
	        OldAuthors.Close
	        db.Close
	     End Sub
	
	4. Run the example.
	
	5. Click the Command1 button.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
