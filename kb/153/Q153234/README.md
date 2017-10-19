---
layout: page
title: "Q153234: HOWTO: Call System-Stored Procedures on SQL Server from RDO"
permalink: /kb/153/Q153234/
---

## Q153234: HOWTO: Call System-Stored Procedures on SQL Server from RDO

	Article: Q153234
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to call system-stored procedures on SQL Server from
	RDO.
	
	SQL Server has a number of prewritten, stored procedures that are used to
	configure and administer the SQL server. All of these procedures have the prefix
	"sp_" that distinguishes them from user- or application-written stored
	procedures.
	
	In order to call these stored procedures from RDO, you must specify the correct
	database is which they reside, the master database. There are several ways to do
	this, but the most effective way is to explicitly reference the stored procedure
	in your call syntax. For example:
	
	     { ? = call master.dbo.sp_addlogin(?,?) }
	
	Another method to accomplish this behavior is to set the default database before
	creating and executing your stored procedure. The following example uses a
	prepared statement and assumes that "Pubs" is your default database:
	
	     <Object>.Execute "Use Master"  'rdoConnection object
	     Set <Object> = <Object>.CreatePreparedStatement("", strSQL)
	     <Object>.Execute               'rdoPreparedStatement object
	     <Object>.Execute "Use Pubs"    'rdoConnection object
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button, Command1, to Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	     Private Sub Command1_Click()
	       Dim en As rdoEnvironment
	       Dim cn As rdoConnection
	       Dim rs As rdoResultset
	
	       Dim strConnect As String
	       Dim strSQL As String
	
	       Set en = rdoEnvironments(0)
	       en.CursorDriver = rdUseOdbc
	
	       strConnect = "Driver={SQL Server}; Server=MyServer; " & _
	         "Database=pubs; Uid=sa; Pwd="
	       Set cn = en.OpenConnection(dsName:="", Prompt:=rdDriverNoPrompt, _
	         ReadOnly:=False, Connect:=strConnect)
	
	       Dim ps As rdoPreparedStatement
	
	       'Note: If you don't specify master, you will get this following error:
	       '"An invalid parameter was passed."
	
	       strSQL = "{ ? = call master.dbo.sp_addlogin(?,?) }"
	       Set ps = cn.CreatePreparedStatement("", strSQL)
	       ps.BindThreshold = 1024 'largest column that will be bound under ODBC.
	       Debug.Print ps.rdoParameters.Count
	       ps.rdoParameters(0).Direction = rdParamOutput
	       ps.rdoParameters(1).Direction = rdParamInput
	       ps.rdoParameters(2).Direction = rdParamInput
	
	       ps.rdoParameters(1) = "Edward"
	       ps.rdoParameters(2) = "Scissorhands"
	
	       ps.Execute
	       Debug.Print ps.rdoParameters(0).Value
	     End Sub
	
	4. Note that you need to change your DATABASE, UID, and PWD parameters in the
	  OpenConnection method.
	
	5. Start the program or press the F5 key.
	
	6. Click the Command1 button to execute the stored procedure and display the
	  parameter count and the output parameter in the debug window.
	
	REFERENCES
	==========
	
	Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press. ISBN:
	1-55615-906-4.
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
