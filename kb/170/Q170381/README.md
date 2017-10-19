---
layout: page
title: "Q170381: PRB: Table Name Can't Include &quot;Call&quot; in Parameterized SQL"
permalink: /kb/170/Q170381/
---

## Q170381: PRB: Table Name Can't Include &quot;Call&quot; in Parameterized SQL

	Article: Q170381
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use CreateQuery to execute a parameterized action query to insert or
	update records in SQL Server, if the SQL Statement involves a table whose name
	includes the Keyword "Call," the following error will be displayed:
	
	  "Run-time error '40041':
	  object collection: Couldn't find item indicated by text"
	
	RESOLUTION
	==========
	
	Change the Table Name to something else that does not have the word "Call" in
	it. For example, changing the Table Name "TestCallTable" to "TestCalTable"
	solves the problem.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the Table in SQL Server:
	
	1. Open the SQL Server 6.5 ISQL utility and change the default database to Pubs.
	
	2. Paste the following code into the Query window and click the Execute Query
	  button, or press CTRL+E to execute the Transact-SQL code:
	
	         CREATE TABLE dbo.TestCallTable (
	        F1 int NOT NULL
	            CONSTRAINT UPKCL_F1ind PRIMARY KEY CLUSTERED,
	        F2 varchar (4) NULL ,
	        F3 varchar (8) NULL
	         )
	         GO
	
	3. The following confirmation message appears:
	
	  "This command did not return data, and it did not return any rows"
	
	  which indicates that the Transact-SQL code created the stored procedure
	  correctly.
	
	Create the Visual Basic Code:
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. Under the Project\References menu, Select Microsoft Remote Data Object 2.0.
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Insert the following code into the Click event of Command1:
	
	        Private Sub Command1_Click()
	
	          Dim en As rdoEnvironment
	          Dim cn As New rdoConnection
	          Dim Qd As New rdoQuery
	
	          Set en = rdoEngine.rdoEnvironments(0)
	          With cn
	            .Connect = "uid=sa;pwd=;database=Pubs;dsn=Jtest;"
	            .CursorDriver = rdUseClientBatch
	            .EstablishConnection Prompt:=rdDriverNoPrompt
	          End With
	          Set Qd.ActiveConnection = cn
	          With Qd
	            .SQL = "Insert into TestCallTable Values(?,?,?)"
	            .rdoParameters(0) = 1
	            .rdoParameters(1) = "A"
	            .rdoParameters(2) = "A Test"
	            .Execute
	          End With
	
	        End Sub
	
	5. Press the F5 key to run the program.
	
	6. Click on Command1. You will receive 'error 40041: object couldn't find item
	  indicated by text.' on following line of code:
	
	        .rdoParameters(0) = 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
