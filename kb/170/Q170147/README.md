---
layout: page
title: "Q170147: HOWTO: Retrieve Identity Column After Insert Using RDO"
permalink: kb/170/Q170147/
---

## Q170147: HOWTO: Retrieve Identity Column After Insert Using RDO

	Article: Q170147
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server Identity columns automatically increment their value when a new
	record is added to the table, which makes them very useful for a unique primary
	key. When using RDO, you may want to know what the new value of the Identity
	column is after inserting a new record with the RDO Addnew/Update methods, or
	with a SQL INSERT statement.
	
	SQL Server maintains an environment variable named @@IDENTITY that stores the
	value of the last Identity column added. This environment variable can be
	queried several different ways from RDO.
	
	MORE INFORMATION
	================
	
	The following two code examples demonstrate how the value of the Identity column
	is retrieved from the SQL Server Pubs database using RDO, after a new record is
	inserted. For testing purpose, a temporary table, IColTest, is created in Pubs
	database with one Identity column and one VarChar column.
	
	To create a temporary table and index in SQL Server, select Pubs database, then
	place the following Create Table T-SQL in the SQL window of ISQL/W and execute
	it.
	
	     Create Table IColTest
	             (Id_Col int Identity, F2 VarChar(30) Null)
	     Create Unique Index IIndex on IColTest(Id_Col)
	
	Example One
	-----------
	
	This example uses a stored procedure to insert a row by taking parameters passed
	from RDO, and then returns the value of @@IDENTITY in a OUTPUT parameter.
	
	Task One: Create the Stored Procedure
	
	To create this stored procedure, place the following Create Procedure T-SQL in
	the SQL window of ISQL/W and execute it:
	
	     Create Procedure MyInsert
	         @FieldVal Varchar(30), @id Int OUTPUT AS
	         Insert Into IColTest (F2) Values(@FieldVal)
	         Select @id = @@Identity
	
	Task Two: Create the VB Code
	
	1. Start a new project in Visual Basic and choose "Standard EXE". Form1 is
	  created by default.
	
	2. Add a CommandButton to Form1, Command1 by default.
	
	3. Paste the following code into the code window of Form1:
	
	        Private Sub Command1_Click()
	           Dim cn As New rdoConnection
	           Dim qy As New rdoQuery
	           Dim strConnect As String
	
	           strConnect = "Driver={SQL Server}; Server=MyServer; _
	                         Database=Pubs; Uid=sa; Pwd="
	           With cn
	             .Connect = strConnect
	             .LoginTimeout = 5
	             .EstablishConnection rdDriverNoPrompt, True
	           End With
	           With qy
	             Set .ActiveConnection = cn
	             .SQL = "{Call MyInsert(?, ?)}"
	           End With
	           qy(0).Direction = rdParamInput
	           qy(1).Direction = rdParamOutput
	           qy(0) = "RainBow"
	           qy.Execute
	
	           Debug.Print qy(1)
	        End Sub
	
	  In Visual Basic 5.0 and higher, you can also use the User Connection Designer
	  (CQD) to create rdoQuery objects in your project. The CQD takes your SQL
	  query and permits you to specify the data types for each parameter. It then
	  inserts appropriate code in your application to expose these procedures very
	  much like methods off the rdoQuery object.
	
	4. Note that you must change your SERVER, UID, and PWD parameters in the connect
	  string.
	
	5. Start the program or press the F5 key.
	
	6. Click Command1 button to insert a row and display value of @@IDENTITY in the
	  debug window.
	
	Example Two
	-----------
	
	You can also do a Select @@IDENTITY with an OpenResultset after inserting a row
	without creating a stored procedure on the SQL server.
	
	1. Add another CommandButton to Form1, Command2 by default.
	
	2. Paste the following code into the code window of Form1:
	
	        Private Sub Command2_Click()
	            Dim cn As New rdoConnection
	            Dim rs As rdoResultset
	            Dim strConnect as string
	
	            strConnect = "Driver={SQL Server}; Server=MyServer; _
	                         Database=Pubs; Uid=sa; Pwd="
	            With cn
	               .Connect = strConnect
	               .LoginTimeout = 5
	               .EstablishConnection rdDriverNoPrompt, True
	            End With
	
	            Set rs = cn.OpenResultset _
	        ("SET NOCOUNT ON _
	               INSERT INTO IColTest(F2) VALUES('Balloon') _
	               SELECT @@IDENTITY _
	               SET NOCOUNT OFF")
	             Debug.Print rs(0)
	             rs.Close
	             cn.Close
	         End Sub
	
	3. Note that you must change your SERVER, UID, and PWD parameters in the Connect
	  method.
	
	4. Start the program or press the F5 key.
	
	5. Click the Command2 button to insert a row to table IColTest and display value
	  of @@IDENTITY in the debug window.
	
	REFERENCES
	==========
	
	For additional information of User Connection Designer, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q166281 : HOWTO: Create and Implement a UserConnection
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Adrian Chiang, Microsoft Corporation
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
