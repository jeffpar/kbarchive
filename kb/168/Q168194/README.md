---
layout: page
title: "Q168194: PRB: DAO Recordset Name Property Is Limited to 256 Characters"
permalink: /kb/168/Q168194/
---

## Q168194: PRB: DAO Recordset Name Property Is Limited to 256 Characters

{% raw %}

	Article: Q168194
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Name property of a DAO Recordset object is limited to 256 characters. It
	only reports the first 256 characters of the SQL statement used to create the
	new Recordset. If the SQL statement is longer than 256 characters, and you
	refresh the Data Control in the code later on, you will receive one of the
	following errors:
	
	  "Run-time error '3061': Too few parameters. Expected 1"
	
	-or-
	
	  "Run-time error '3075': Syntax error in string in query expression 'xxxx'"
	
	CAUSE
	=====
	
	When you set the Data Control's Recordset property to an existing Recordset, it
	obtains its RecordSource property from the DAO Recordset's Name property, which
	allows a maximum length of 256 characters.
	
	RESOLUTION
	==========
	
	Store the SQL statement into a string variable. Before refreshing the Data
	Control, set its RecordSource Property to this variable. For example:
	
	     Data1.RecordSource = SQLStr
	     Data1.Refresh
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Data Control(Data1) and a CommandButton (Command1) to Form1.
	
	3. In the Click event of Command1, place the following code:
	
	        Private Sub Command1_Click()
	          Dim DB As Database, RS As Recordset
	          Dim SQLStr As String
	
	          Set DB = DBEngine.Workspaces(0).OpenDatabase("Biblio.MDB")
	
	          'This SQL Statement causes Run-time error 3075.
	          SQLStr = "Select PubID, Name, [Company Name], Address, " _
	           & "City, State, PubID, Name, [Company Name], Address, City, " _
	           & "State, PubID, Name, [Company Name], Address, City, State, " _
	           & "PubID, Name, [Company Name], Address, City, State " _
	           & "from Publishers Where PubID = 2 and State = 'MA'"
	
	          'This SQL Statement causes Run-time error 3061.
	          'SQLStr = "Select PubID, Name, [Company Name], Address, City, " _
	          ' & "State, PubID, Name, [Company Name], Address, City, State, " _
	          ' & "PubID, Name, [Company Name], Address, City, State, " _
	          ' & "PubID, Name, [Company Name], Address, City, State, " _
	          ' & "PubID from Publishers Where PubID = 2 and State = 'MA'"
	
	          Set RS = DB.OpenRecordset(SQLStr, dbOpenDynaset)
	          Set Data1.Recordset = RS
	          Debug.Print RS.Name
	          Debug.Print Data1.RecordSource
	          Data1.Refresh
	
	        End Sub
	
	4. Start the program by pressing the F5 key.
	
	5. Click the Command1 button to execute the code and note that you receive one
	  of the above errors.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400 kbDAO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
