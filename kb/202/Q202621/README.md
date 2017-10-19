---
layout: page
title: "Q202621: FIX: SQL PassThrough May Return Incorrect String"
permalink: /kb/202/Q202621/
---

## Q202621: FIX: SQL PassThrough May Return Incorrect String

	Article: Q202621
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.51,4.0,5.0,6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbGrpDSVBDB kbDSupport
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	- The DAO SDK, version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DbSQLPassThrough constant in Data Access Objects (DAO) version
	3.51, if the text is exactly 256 characters long, the last character is
	truncated and replaced with a "0" character. The same behavior also occurs if
	the text is exactly 511, 766, or 1,021 characters (and so on).
	
	CAUSE
	=====
	
	This error occurs because of UNICODE conversion problems that are located in the
	DAO/Jet SQLPassThrough engine.
	
	
	RESOLUTION
	==========
	
	You can use one of the following workarounds:
	
	- Upgrade to DAO 3.6/Jet 4.0.
	- Use ODBCDirect to perform the query.
	- Use Remote Data Objects (RDO) to perform the query.
	- Use ActiveX Data Objects (ADO) to perform the query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in DAO 3.6/Jet 4.0. To use DAO 3.6 in your application,
	select the DAO 3.6 reference instead of the DAO 3.51 reference.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the SQL script below to create a SQL Server table in the PUBS database.
	
	  /*** Object:  Table dbo.tblTest ***/ 
	  CREATE TABLE dbo.tblTest (
	  Test text NOT NULL
	  )
	  GO 
	
	  insert into tblTest (Test) VALUES (SPACE(255))
	  insert into tblTest (Test) VALUES (SPACE(256))
	
	2. Create a Visual Basic 6.0 Standard EXE project. Form1 is created by default.
	
	3. Add a Command button to Form1.
	
	4. Add a reference to the Microsoft DAO 3.51 Object Library.
	
	5. Insert the following code in the Command1_Click event:
	
	      Dim DB As Database
	      Dim WS As Workspace
	      Dim RS As Recordset
	      Dim ssql As String, ConnectString As String
	
	      ConnectString = "ODBC;DRIVER={SQL SERVER};SERVER=<your SQL Server>;" & _
	                      "DATABASE=pubs;UID=sa;PWD=;"
	      
	      Set WS = Workspaces(0)
	      Set DB = WS.OpenDatabase("", dbDriverPrompt, False, ConnectString)
	      
	      ssql = "Select * from tblTest"
	      
	      Set RS = DB.OpenRecordset(ssql, dbOpenSnapshot, dbSQLPassThrough)
	      
	      If RS.RecordCount > 0 Then
	          Do Until RS.EOF
	              Debug.Print Right(RS("Test"), 10) & ":" & Len(RS("Test")) & _
	              ":" & Asc(Right(RS("Test"), 1))
	              
	              'Notice that any item of text that is 256, 511, 766, 1,021...
	              'returns character 0 in the last character, and the
	              'actual last character is lost.
	              
	              RS.MoveNext
	          Loop
	      End If
	          
	      RS.Close
	      DB.Close
	      WS.Close
	      
	      Set RS = Nothing
	      Set DB = Nothing
	      Set WS = Nothing
	
	6. Modify the connection string to point to your SQL Server.
	
	7. Notice that when you get the data back, it is truncated to the first
	  character.
	
	Additional query words: GetChunk AppendChunk ODBCDirect Direct SQLPassthrough
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbGrpDSVBDB kbDSupport 
	Component         : dao
	Technology        : kbVBSearch kbAudDeveloper kbDAOsearch kbZNotKeyword6 kbSDKDAOSearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKSearch kbVB400Search kbVB400 kbSDKDAO351 kbVB600SP3 kbVB600SP4 kbVB600SP5
	Version           : :3.51,4.0,5.0,6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
