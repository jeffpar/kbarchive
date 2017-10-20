---
layout: page
title: "Q182929: PRB: Stored Procedures with a Return Statement Can Cause Errors"
permalink: /kb/182/Q182929/
---

## Q182929: PRB: Stored Procedures with a Return Statement Can Cause Errors

{% raw %}

	Article: Q182929
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbGrpDSVBDB
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling more than one OpenResultSet statement synchronously on the same
	connection can generate the error:
	
	  Run-time error '40002':
	  S1000 [Microsoft][ODBC SQL Server Driver] Connection is busy with
	  results for another hstmt.
	
	RESOLUTION
	==========
	
	There are four possible workarounds for this issue:
	
	- use rduseClientBatch and check the ResultSet's RowCount property prior to
	  executing the next OpenResultSet statement.
	
	- remove the RETURN(0) statement from the Stored Procedure.
	
	- set NOCOUNT to ON as the first line of the Stored Procedure.
	
	- trap the error(s) and drop and re-establish the connection prior to issuing
	  any more OpenResultSet statements.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If any additional OpenResultSet calls are made on the same Connection Object it
	results in the error:
	
	  Run-time error '40002':
	  S1000: [Microsoft][ODBC SQL Server Driver]Connection is busy with
	  results for another hstmt
	
	The problem can also occur under ADO where the error is:
	
	  Run-time error: '-2147217900 (80040e14)'
	  [Microsoft][ODBC SQL Server Driver][SQL Server] Cannot open a cursor on
	  a stored procedure that has anything other than a single select
	  statement in it.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following SQL Server script on SQL Server (make sure it is run from
	  the Pubs database):
	
	        if exists (select * from sysobjects
	        where id = object_id('dbo.test') and sysstat & 0xf = 4)
	           drop procedure dbo.test
	        GO
	
	        CREATE PROCEDURE test AS
	           select * from authors
	           return(0)
	        GO
	    
	
	2. Start the Enterprise edition Visual Basic 5.0. Create a Standard EXE Project.
	  Form1 is created by default.
	
	3. Add a Project reference to "Microsoft Remote Data Objects 2.0."
	
	4. Add the following code to the default form's Load Method:
	
	        Dim en As rdoEnvironment
	        Dim cn As rdoConnection
	        Dim rs1 As rdoResultset
	        Dim rs2 As rdoResultset
	        Dim sql As String
	
	        Set en = rdoEngine.rdoEnvironments(0)
	        en.CursorDriver = rdUseOdbc
	
	        Set cn = en.OpenConnection( _
	        dsName:="", _
	        Prompt:=rdDriverNoPrompt, _
	        Connect:="DRIVER={SQL SERVER};" _
	        & "SERVER=<server_name>;UID=<user_id>;PWD=<pwd>;DATABASE=<db_name>")
	
	        sql = "Exec test"
	        Set rs1 = cn.OpenResultset(sql, rdOpenStatic, rdConcurRowVer)
	        Set rs2 = cn.OpenResultset(sql, rdOpenStatic, rdConcurRowVer)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
