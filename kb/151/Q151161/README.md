---
layout: page
title: "Q151161: PRB: Case Sensitivity Problem With RDO"
permalink: /kb/151/Q151161/
---

## Q151161: PRB: Case Sensitivity Problem With RDO

{% raw %}

	Article: Q151161
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
	
	SYMPTOMS
	========
	
	If multiple SQL statements that only differ in letter cases are used against a
	case sensitive SQL Server through RDO, only the first SQL statement is used by
	RDO to request data from the SQL Server.
	
	RESOLUTION
	==========
	
	In the code below, you expect rs1 to contain 0 rows and rs2 to contain 1 row.
	However, because the second SQL statement in the OpenResultSet method only
	differs in letter cases from the first, the second OpenResultSet method just
	sends the first select statement to the server and causes 0 rows to return. To
	work around this behavior, insert a space anywhere in the second select
	statement. For example, you can place a leading space at the beginning of the
	string:
	
	     sql2 = " select * from TestTable where Field2 = 'A001'"
	     Set rs2 = cn.OpenResultset(sql2)
	
	STATUS
	======
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install MS-SQL Server as case sensitive and create a table in PUBS database:
	
	     CREATE TABLE dbo.TestTable (
	       Field1 int IDENTITY (1,1)NOT NULL,
	       Field2 varchar (10))
	
	  use "INSERT INTO TestTable ( Field2 ) VALUES ('A001')" to add a record.
	
	2. Start a new project in the 32-bit edition of Visual Basic 4.0. Form1 is
	  created by default. Add a Command button, Command1, by default.
	
	3. In the Click event for Command1, place the following code:
	
	     Private Sub Command1_Click()
	       Dim cn As rdoConnection
	       Dim en As rdoEnvironment
	       Dim rs1 As rdoResultset, rs2 As rdoResultset
	       Dim cnstr As String, sql1 As String, sql2 As String
	
	       Set en = rdoEnvironments(0)
	       cnstr = "driver={sql server};server=jingsun;uid=sa;pwd=;database=pubs"
	       Set cn = en.OpenConnection(dsname:="", _
	         Prompt:=rdnoprompt, _
	         ReadOnly:=False, _
	         Connect:=cnstr)
	
	       sql1 = "select * from TestTable where Field2 = 'a001'"
	       sql2 = "select * from TestTable where Field2 = 'A001'"
	       Set rs1 = cn.OpenResultset(sql1)
	       Set rs2 = cn.OpenResultset(sql2)
	       ' You expect rs1 to return 0 rows and rs2 to return 1 row.
	       ' However, since the second SQL statement in the OpenResultSet method
	       ' only differs in case from the first one, the second OpenResultSet
	       ' method still sends the first SQL statement to the server and causes
	       ' 0 return rows.
	       If rs2.EOF Then
	          MsgBox "No rows returned"
	       Else
	         MsgBox rs2(0) & ", " & rs2(1)
	       End If
	       MsgBox cn.rdoPreparedStatements.Count
	       rs1.Close
	       rs2.Close
	       cn.Close
	     End Sub
	
	4. Ensure that you have an appropriate SQL Server name, User ID and password.
	  Press the F5 key to run the program, and click Command1. A message box
	  appears with "No rows returned", then another message box displays
	  cn.rdoPreparedStatements.Count, which is 1.
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
