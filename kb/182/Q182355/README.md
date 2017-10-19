---
layout: page
title: "Q182355: PRB: Jet Text IISAM Truncates Trailing Spaces"
permalink: /kb/182/Q182355/
---

## Q182355: PRB: Jet Text IISAM Truncates Trailing Spaces

	Article: Q182355
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic for Applications version 5.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When importing delimited data from a text file into a Jet database, trailing
	spaces are dropped from fields.
	
	CAUSE
	=====
	
	The Text IISAM driver truncates trailing spaces regardless of whether the field
	is surrounded by quotes.
	
	RESOLUTION
	==========
	
	- Write a custom import routine using low-level file I/O and DAO, and parse the
	  line into fields using BASIC.
	
	-or-
	
	- When creating the text file, use a substitute character for trailing spaces
	  you do not want truncated and then use a SQL statement to "fix" the imported
	  data.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	WARNING: Your use or modification of the CODE provided in this article is at
	your own risk. Microsoft provides this CODE "as is" without warranty of any
	kind, either expressed or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose. Microsoft
	does not support modifications of the CODE to suit specific customer
	requirements.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Notepad, create a text file with the following data:
	
	        ID,Desc,Field3
	        Line1,Description 1  ,Field3-1
	        Line2,"Description 2  ",Field3-2
	
	2. Save the file as c:\test.txt.
	
	3. In Visual Basic, create a new project and add a reference for Microsoft DAO
	  3.5 Object Library. In Access, open the Northwind.MDB database.
	
	4. Create a new form with a CommandButton (Command1) and the following code:
	
	        Private Sub Command1_Click ()
	        Dim db As Database
	          Set db = CurrentDB                               ' Access only
	          Set db = DBEngine(0).OpenDatabase("biblio.mdb")  ' Visual Basic
	          db.Execute "SELECT * INTO TestImport FROM [test#txt] IN '' " _
	                     "'text;database=c:\;FMT=Delimited;HDR=Yes'"
	          db.Close
	        End Sub
	
	5. Run the project/form and click the CommandButton to import the data.
	
	6. Examine the contents of the TestImport table, and note that the Desc column
	  has the trailing spaces truncated for both records.
	
	Notes:
	
	1. The symptoms are also present when using Access' File|Get External Data menu
	  command and via the TransferText macro action and the TransferText method of
	  the DoCmd object, all of which use the Text IISAM driver.
	
	2. The symptoms probably also apply to previous versions of Jet but have not
	  been tested with them.
	
	3. In Visual Basic, you can use the VISDATA sample project to examine the
	  contents of the table.
	
	REFERENCES
	==========
	
	Visual Basic and Access help topic: IN CLAUSE
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	Additional query words: delimited csv
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbAccess97Search kbVBASearch kbZNotKeyword3
	Version           : WINDOWS:5.0,97
	Issue type        : kbprb
	
	=============================================================================
	
