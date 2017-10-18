---
layout: page
title: "Q190447: FIX: RDO BatchUpdate Causes Visual Basic 5.0 to Crash"
permalink: kb/190/Q190447/
---

## Q190447: FIX: RDO BatchUpdate Causes Visual Basic 5.0 to Crash

	Article: Q190447
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
	Last Modified: 27-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an RDO Resultset BatchUpdate method against a Microsoft SQL Server
	database when updating a Resultset with a large number of columns and long
	column names, may cause Visual Basic 5.0 to crash with an Access Violation.
	
	CAUSE
	=====
	
	The BatchUpdate method generates a series of SQL statements in chunks to send
	the updates to the backend database. The contents of each chunk is affected by
	the following factors:
	
	- The number of columns and rows involved.
	
	- The length of the column names.
	
	If the generated statement is too long, it will be truncated when stored in the
	query buffer because of its limited buffer size.
	
	RESOLUTION
	==========
	
	There are three possible workarounds for this problem:
	
	1. Use shorter or longer column names.
	
	2. Use fewer rows per batch using the BatchSize property.
	
	3. Change the order of the columns when building the table.
	
	Applying any of the workarounds changes the contents of each chunk based on the
	ordinal position or order of the columns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The following sample code reproduces this behavior. It uses a DSN-Less
	connection to build a SQL table with 36 columns and then adds one row. It
	assumes that you are familiar with RDO and SQL Server databases.
	
	Note that the table column names are prepared in such a way that the problem
	occurs.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic 5.0 project, and add a reference to "Microsoft
	  Remote Data Objects 2.0."
	
	2. Add one CommandButton (Command1) to the default form , Form1.
	
	3. Copy the following code and paste it in the Command1 Click event:
	
	        Private Sub Command1_Click ()
	           Dim cn As New rdoConnection
	           Dim strConnect  As String
	           Dim rs As rdoResultset
	           Dim c As rdoColumn
	           Dim e As rdoError
	           Dim sqlstr As String
	           Dim i As Integer
	
	           On Error GoTo ErrorHandler
	           strConnect = "DRIVER={sql server};" & _
	                        "SERVER=<servername>;DATABASE=<database>;" & _
	                        "UID=<UserID>;PWD=<password>"
	
	           cn.Connect = strConnect
	           cn.CursorDriver = rdUseClientBatch
	           cn.EstablishConnection
	
	        'Use this line if the table exists
	        'cn.Execute "DROP TABLE tblTest", rdExecDirect
	
	        'This line builds a table
	        cn.Execute "CREATE TABLE tblTest (id INT PRIMARY KEY," & _
	                "Test_Co1 CHAR(8),Test_Column_Nu2 CHAR(15)," & _
	                "Test_Colum3 CHAR(11),Test_Colu4 CHAR(10)," & _
	                "Test_Column5 CHAR(12), Test_Colum6 CHAR(11), " & _
	                "Test_Column_Num7 CHAR(16)," & _
	                "Test_Column_Number8 CHAR(19), " & _
	                "Test_Colum9 CHAR(11),Test_Colu10 CHAR(11)," & _
	                "Test_Colu11 CHAR(11),Test_Column_N12 CHAR(15)," & _
	                "Test_Column_13 CHAR(14),Test_Colu14 CHAR(11)," & _
	                "Test_Colu15 CHAR(11),Test_Colu16 CHAR(11)," & _
	                "Test_Colu17 CHAR(11),Test_Colu18 CHAR(18)," & _
	                "Test_19 CHAR(7),Test_20 CHAR(7)," & _
	                "Test_21 CHAR(7),Test_Colu22 CHAR(11)," & _
	                "Test_Column_23 CHAR(14), Test_Column24 CHAR(13)," & _
	                "Test_Column_Nu25 CHAR(16),Test_Column_Nu26 CHAR(16)," & _
	                "Test_27 CHAR(7),Test_Col28 CHAR(10)," & _
	                "Test_C29 CHAR(8),Test_Colu30 CHAR(11)," & _
	                "Test_Colum31 CHAR(12),Test_Column_Num32 CHAR(17)," & _
	                "Test_C33 CHAR(8),Test_Column_34 CHAR(14)," & _
	                "Test_Column_35 CHAR(14))", rdExecDirect
	
	           Set rs = cn.OpenResultset("Select * from tblTest", _
	                    rdOpenKeyset, rdConcurBatch)
	           i = 1
	           rs.AddNew
	           rs!id = 1
	           For i = 1 To 35
	             rs(i) = "String1"  'Enter any string data
	           Next
	           rs.Update
	           rs.BatchUpdate        'At this line Dr. Watson error occur
	
	           Set rs = Nothing
	           Set cn = Nothing
	
	           MsgBox "Finished!"
	
	           Exit Sub
	
	        ErrorHandler:
	        ' Display the error number and description from the rdoErrors
	        For Each e In rdoErrors
	           MsgBox e.Number & e.Description
	        Next e
	
	        End Sub
	
	4. Modify the connection string to reflect your server name, database name, user
	  id, and user password.
	
	5. Save the project, and press the F5 key to run it. At this point, Visual Basic
	  5.0 crashes and a Dr. Watson error occurs.
	
	6. Modify the table structure using shorter or longer column names. Use the
	  following code which uses shorter field names:
	
	        cn.Execute "CREATE TABLE tblTest (id INT PRIMARY KEY," & _
	                   "Test1 CHAR(8), Test2 CHAR(15)," & _
	                   "Test3 CHAR(11), Test4 CHAR(10), " & _
	                   "Test5 CHAR(12), Test6 CHAR(11), " & _
	                   "Test7 CHAR(16), Test8 CHAR(19), " & _
	                   "Test9 CHAR(11), Test10 CHAR(11), " & _
	                   "Test11 CHAR(11), Test12 CHAR(15), " & _
	                   "Test13 CHAR(14), Test14 CHAR(11), " & _
	                   "Test15 CHAR(11), Test16 CHAR(11), " & _
	                   "Test17 CHAR(11), Test18 CHAR(18), " & _
	                   "Test19 CHAR(7), Test20 CHAR(7), " & _
	                   "Test21 CHAR(7), Test22 CHAR(11), " & _
	                   "Test23 CHAR(14), Test24 CHAR(13), " & _
	                   "Test25 CHAR(16), Test26 CHAR(16), " & _
	                   "Test27 CHAR(7), Test28 CHAR(10), " & _
	                   "Test29 CHAR(8), Test30 CHAR(11), " & _
	                   "Test31 CHAR(12), Test32 CHAR(17), " & _
	                   "Test33 CHAR(8), Test34 CHAR(14), " & _
	                   "Test35 CHAR(14))", rdExecDirect
	
	7. Run the project and notice that the project runs. This time the "Finished"
	  message appears on the screen.
	
	Additional query words: kbVBp500 kbVBp500bug kbVBp600fix kbRDO200bug kbGrpVBDB kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
