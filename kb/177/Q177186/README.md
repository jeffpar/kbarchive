---
layout: page
title: "Q177186: PRB: Error 40069 Update Resultset Returned from Stored Procedure"
permalink: /kb/177/Q177186/
---

## Q177186: PRB: Error 40069 Update Resultset Returned from Stored Procedure

{% raw %}

	Article: Q177186
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
	
	When you are updating a recordset returned from a stored procedure using
	ClientBatch cursor driver, and you do not specify the source table and the key
	column, the following errors occur:
	
	  Run-time error '40069':
	
	  Client Cursor: 39 - One of the modified columns has no source table defined
	
	CAUSE
	=====
	
	When you perform a SELECT query or a join to build the resultset using a stored
	procedure, the source table and key column information is not filled in. This
	occurs because the ODBC layers cannot parse the SQL query to point back to the
	table and key column from where the chosen column draws its data.
	
	RESOLUTION
	==========
	
	You have to provide SourceTable and KeyColumn properties in code in order to
	update resultsets returned from the stored procedure using ClientBatch cursor
	driver.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In addition to steps to reproduce the errors, the following sample code
	demonstrates how to update resultsets returned from a stored procedure
	successfully using Client Batch cursor driver. The stored procedure, GetInfo, is
	created in SQL Server Pubs database, which retrieves information from the
	Authors table.
	
	Command1 updates the resultset returned from the stored procedure without the
	SourceTable and KeyColumn information; therefore, errors occur. Command2
	demonstrates how a successful update is done by providing the source table and
	key column information.
	
	Step 1: Create the Stored Procedure
	-----------------------------------
	
	1. Open the SQL Server 6.5 ISQL utility and change the default database to Pubs.
	
	2. Paste the following code in the Query window:
	
	        CREATE PROCEDURE GetInfo
	        AS
	        Select au_id, au_lname From Authors
	
	3. Click Execute Query or press the CTRL+E keys to execute the Transact-SQL
	  code.
	
	4. The following confirmation message appears:
	
	  "This command did not return data, and it did not return any rows"
	
	  This indicates that the Transact-SQL code created the stored procedure
	  correctly.
	
	Step 2: Create the Visual Basic Code
	------------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select References, and then place a check next to
	  Microsoft Remote Data Object 2.0.
	
	3. Add 2 CommandButtons, Command1, and Command2, to Form1.
	
	4. Paste the following code in the General Declarations section of Form1:
	
	        Dim cn As New rdoConnection
	
	        Private Sub Command1_Click()
	
	           Dim qy As New rdoQuery
	           Dim rs As rdoResultset
	
	           With qy
	              Set .ActiveConnection = cn
	              .SQL = "{Call GetInfo}"
	           End With
	           Set rs = qy.OpenResultset(rdOpenKeyset, rdConcurRowVer)
	           rs.Edit
	           rs!au_lname = "Weeks"
	           rs.Update
	           Debug.Print rs!au_lname
	           rs.Close
	           qy.Close
	
	        End Sub
	
	        Private Sub Command2_Click()
	
	           Dim qy As New rdoQuery
	           Dim rs As rdoResultset
	
	           With qy
	              Set .ActiveConnection = cn
	              .SQL = "{Call GetInfo}"
	           End With
	           Set rs = qy.OpenResultset(rdOpenKeyset, rdConcurRowVer)
	           rs("au_id").SourceTable = "Authors"
	           rs("au_lname").SourceTable = "Authors"
	           rs("au_id").KeyColumn = True
	
	           rs.Edit
	           rs!au_lname = "Weeks"
	           rs.Update
	           Debug.Print rs!au_lname
	           rs.Close
	           qy.Close
	
	        End Sub
	
	        Private Sub Form_Load()
	
	           Dim strConnect As String
	           Dim strSQL As String
	
	           strConnect = "Driver={SQL Server}; _
	           Server=MyServer;Database=Pubs;Uid=sa;Pwd="
	           With cn
	              .CursorDriver = rdUseClientBatch
	              .Connect = strConnect
	              .EstablishConnection rdDriverNoPrompt
	           End With
	
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           cn.Close
	        End Sub
	
	5. Note that you should change your Server, Uid, and Pwd parameters in the RDO
	  connection string.
	
	6. Start the program or press the F5 key.
	
	REFERENCES
	==========
	
	"Hitchhiker's Guide to Visual Basic and SQL Server," Microsoft Press. ISBN:
	1-57231-567-9
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
