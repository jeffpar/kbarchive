---
layout: page
title: "Q242993: BUG: Retrieved Data May Display as Nonalphanumeric Using ODBC"
permalink: /kb/242/Q242993/
---

## Q242993: BUG: Retrieved Data May Display as Nonalphanumeric Using ODBC

	Article: Q242993
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.1 SP2,3.7
	Operating System(s): 
	Keyword(s): kbOSWinNT400bug kbOSWin2000bug kbODBC kbSQLServ kbVBp600bug kbGrpDSVBDB kbMDAC210SP2bug
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	- Microsoft Data Access Components version 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The display of the second and subsequent SQL Server text columns retrieved using
	the SQL Server ODBC Driver version 3.70.0690 with Data Access Objects (DAO) or
	with Remote Data Objects (RDO) may appear as nonalphanumeric characters.
	
	This behavior occurs in Windows 9x, Windows NT 4.0 and Windows 2000 RC2 with the
	SQL Server ODBC driver, version 3.70.0690 or later using Data Access Object
	(DAO) or Remote Data Objects (RDO). This behavior does not affect the data
	stored on the server.
	
	RESOLUTION
	==========
	
	There are two ways to work around to this behavior:
	
	- Reverse the order of the columns when you retrieve the data. For example, if
	  your record has three columns, retrieve the third column first, then the
	  second column, and finish with the first column.
	
	  For example, if the table contains 3 columns, the last two of which are Text
	  columns, access the third column first in assignment or print statements.
	  Instead of using this:
	
	  debug.print rs(0).Value
	  debug.print rs(1).Value
	  debug.print rs(2).Value
	
	  Use this:
	
	  debug.print rs(2).Value
	  debug.print rs(1).Value
	  debug.print rs(0).Value
	
	  -or-
	
	- Use the SQL Server version 3.70.0623 or earlier driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This section shows you how to create a sample project that demonstrates this
	behavior using DAO. The steps assume that you can connect and write to a SQL
	Server database using the SQL Server ODBC driver.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Make a reference to the DAO 3.6 Object Library.
	
	3. Add a command button named Command1 to Form1.
	
	4. Copy the following code into the Form1 Code window. Make the appropriate
	  changes to connect to your SQL Server database:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Dim TestConn As DAO.Connection
	     Dim TheCursor As DAO.Recordset
	     Dim sData1 As String
	     Dim sData2 As String
	     
	     ' Connect to SQL database
	     DBEngine.DefaultType = dbUseODBC
	     DBEngine.Workspaces(0).DefaultCursorDriver = -1
	     Set TestConn = DBEngine.Workspaces(0).OpenConnection("", _
	                    dbDriverNoPrompt, _
	                    False, _
	                    "ODBC;DSN=<DSN>;UID=<User Name>;PWD=<Password>")
	
	     ' Create a table and enter data into the table
	     On Error Resume Next
	     TestConn.Execute "DROP TABLE MyTable"
	     
	     On Error GoTo 0
	     TestConn.Execute "CREATE TABLE MyTable (" _
	        + " id int unique, Field1 text NULL , " _
	        + " Field2 text null)"
	     TestConn.Execute "INSERT INTO MyTable (id, Field1, Field2) " _
	        + " VALUES (1, '" & "apple" & "', '" & "banana" & "')"
	
	     ' Select data from the newly inserted record into a Recordset
	        Set TheCursor = TestConn.OpenRecordset("SELECT * From MyTable " _
	                       + " WHERE ID = 1", _
	                       dbOpenDynaset, _
	                       dbExecDirect, _
	                       dbReadOnly)
	          
	     sData1 = TheCursor("Field1")
	     sData2 = TheCursor("Field2")
	
	     ' Test to check if data output is the same as the table data
	     If sData1 <> "apple" Or sData2 <> "banana" Then
	        MsgBox "Test failed.  Data1=" & sData1 & ", Data2=" & sData2
	     Else
	        MsgBox "Test succeeded."
	     End If
	  End Sub
	
	5. Run the project and click the Command1 command button. A message box appears.
	
	RESULT: The second item displayed in the message box displays incorrectly.
	
	Use the SQL Server Enterprise Manager to view the contents of the table named
	MyTable. Note that the correct data is stored in the record.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinNT400bug kbOSWin2000bug kbODBC kbSQLServ kbVBp600bug kbGrpDSVBDB kbMDAC210SP2bug 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210SP2 kbODBCSQLServ370
	Version           : WINDOWS:2.1 SP2,3.7
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
