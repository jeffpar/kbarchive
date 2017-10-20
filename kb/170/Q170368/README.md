---
layout: page
title: "Q170368: PRB: &quot;Invalid Cursor Position&quot; Using UserConnection to GetChunk"
permalink: /kb/170/Q170368/
---

## Q170368: PRB: &quot;Invalid Cursor Position&quot; Using UserConnection to GetChunk

{% raw %}

	Article: Q170368
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the UserConnection Designer to establish a connection and retrieve
	an RDO result set, you will encounter the following error:
	
	  "Run-Time error '40002'
	  S1109:[Microsoft][ODBC SQL Server Driver] Invalid Cursor Position"
	
	if the RDO result set includes a BLOB (Binary Large Object) column and you do not
	change any default values.
	
	This error occurs at the GetChunk method.
	
	CAUSE
	=====
	
	Due to the ODBC limitation, GetChunk fails when you use a Forward only cursor
	with Rowset Size > 1. Using UserConnection Designer, the default cursor is
	Forward only, and Rowset Size is 500. This causes "Invalid Cursor Position"
	error.
	
	RESOLUTION
	==========
	
	To get BLOB data using a Forward-only cursor, you can:
	
	- Set the Rowset Size to 1 on the Advanced tab of UserConnection Queryset
	  object Properties page.
	
	  -and-
	
	- Set Cursor Library to "Use server-side cursors" or "Use None" on the
	  Miscellaneous tab of UserConnection object Properties page.
	
	You could also open a Keyset type resultset in code by setting the CursorType
	property of your RdoQuery object before executing the query, such as the
	following:
	
	     Dim cn As New UserConnection1
	     Dim rs as rdoResultset
	
	     cn.EstablishConnection                            'establish connection
	     cn.rdoQueries("Query1").CursorType = rdOpenKeyset 'define cursortype
	     cn.Query1                                         'execute the query
	     Set rs = cn.LastQueryResults
	
	MORE INFORMATION
	================
	
	The following example uses pub_info table in Pubs database, because pub_info has
	a TEXT column, pr_info.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Task One: Create the UserConnection
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. On the Project menu, click Components, click the Designer tab, and then place
	  a check next to Microsoft UserConnection.
	
	3. On the Project menu, click Add ActiveX Designer, and then click Microsoft
	  UserConnection. This will bring up a dialog titled UserConnection1
	  Properties.
	
	4. On the Connection tab, select either a DSN or DSN-less connection and fill in
	  the appropriate information. If you select DSN-less, make sure you specify a
	  database in the Other ODBC Attributes area with database=Pubs. On the
	  Authentication tab, fill in your username and password, and place a check
	  next to Save Connection Information for Design Time.
	
	5. Click OK to save this information, and return to the Designer window.
	
	6. Insert a new Query by right-clicking on UserConnection1 and choosing Insert
	  Query or by clicking on the Insert Query toolbar icon.
	
	7. From the Source of Query, choose Based on User-Defined SQL. Then type the
	  following SQL into the TextBox:
	
	  Select pub_id, pr_info From pub_info
	
	8. Click OK to save this information.
	
	Task Two: Build the Visual Basic Code
	
	1. Add a CommandButton, Command1, to Form1.
	
	2. Add a TextBox, Text1, to Form1. Set the MultiLine property to True;
	  ScrollBars property to 3 - Both.
	
	3. In the Command1_Click() event, paste the following code:
	
	        Private Sub Command1_Click()
	           Dim cn As New UserConnection1
	           Dim rs As rdoResultset
	           Dim ColSize As Long
	           With cn
	              .EstablishConnection       'Establish connection
	
	      ' **** Un-comment the following line to change default cursor to Keyset
	      '       .rdoQueries("Query1").CursorType = rdOpenKeyset
	      ' ****
	              .Query1
	           End With
	
	           Set rs = cn.LastQueryResults
	           If rs!pr_Info.ChunkRequired Then
	              ColSize = rs!pr_info.ColumnSize
	              Text1.Text = rs!pr_info.GetChunk(ColSize)
	           Else
	              Text1.Text = rs!pr_info
	           End If
	
	           rs.Close
	           cn.Close
	        End Sub
	
	4. Start the program or press the F5 key.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q166281 : HOWTO: Create and Implement a UserConnection
	
	  Q153238 : HOWTO: Use GetChunk and AppendChunk Methods of RDO Object
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Adrian Chiang, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdse kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
