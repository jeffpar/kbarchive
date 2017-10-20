---
layout: page
title: "Q179226: PRB: RDO: CommitTrans/RollBackTrans Closes Cursor Causing Error"
permalink: /kb/179/Q179226/
---

## Q179226: PRB: RDO: CommitTrans/RollBackTrans Closes Cursor Causing Error

{% raw %}

	Article: Q179226
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to perform any action on an rdoResultset object connected to a SQL
	Server database after committing or rolling back a transaction on the
	rdoResultset's rdoConnection object (or simply the act of committing or rolling
	back the transaction), will result in the following error:
	
	  40002
	  S1010:[Microsoft][ODBC SQL Server Driver]Function sequence error
	
	Similar errors can be expected with other servers.
	
	CAUSE
	=====
	
	Depending on the cursor type, the error above will be raised either on the
	CommitTrans or RollBackTrans or when any attempt is made to access a property or
	method of the rdoResultset object after the CommitTrans or RollBackTrans.
	
	This occurs because many servers, including SQL Server, default to closing or
	deleting cursors at the end of the transaction. Any action on the rdoResultset
	causes an action on the now-closed cursor, which causes the error. When using
	server-side keyset or dynamic cursors with SQL Server, RDO will erroneously call
	SQLExtendedFetch on the CommitTrans or RollBackTrans statement, raising this
	error.
	
	RESOLUTION
	==========
	
	While this error can be trapped and handled, the better solution is to change
	the connection option so that the cursors are not closed at the end of the
	transaction. This behavior can be changed for most servers. The code to do this
	with SQL Server follows. For other servers, please consult the ODBC driver and
	server documentation for the equivalent call.
	
	The following code works around the problem:
	
	1. Start a New Project.
	
	2. Add a command button to the default form.
	
	3. Add the following to the General Declaration section:
	
	        Option Explicit
	        'SQL Server specific connection options
	         Private Const SQL_PRESERVE_CURSORS As Long = 1204
	         Private Const SQL_PC_ON As Long = 1
	         Private Const SQL_PC_OFF As Long = 0
	
	         'Possible ODBC function returns
	         Private Const SQL_ERROR As Integer = -1
	         Private Const SQL_INVALID_HANDLE As Integer = -2
	         Private Const SQL_NO_DATA_FOUND As Integer = 100
	         Private Const SQL_SUCCESS As Integer = 0
	         Private Const SQL_SUCCESS_WITH_INFO As Integer = 1
	
	         Private Declare Function SQLSetConnectOption Lib "odbc32.dll" _
	            (ByVal hdbc As Long, ByVal fOption As Integer, pvParam As Any) _
	                As Integer
	
	         Private Declare Function SQLGetConnectOption Lib "odbc32.dll" _
	            (ByVal hdbc As Long, ByVal fOption As Integer, pvParam As Any) _
	                  As Integer
	
	4. Add the following code to the click event of the CommandButton: (The server
	  will need to be changed.)
	
	        Private Sub Command1_Click()
	         Dim intRet As Integer
	         Dim lngConnOption As Long
	         Dim Conn As rdoConnection
	         Dim Rslt As rdoResultset
	
	         'Make DSN-less connection. CHANGE SERVER UID PWD for your server
	          Set Conn = rdoEnvironments(0).OpenConnection(_
	              "", rdDriverComplete, False, _
	         "DRIVER={SQL Server};SERVER=hoohaa;DSN=;DATABASE=pubs;UID=sa;PWD=;")
	         'Getting connection option
	          intRet = SQLGetConnectOption(Conn.hdbc, SQL_PRESERVE_CURSORS, _
	             lngConnOption)
	          If SQL_SUCCESS <> intRet Then
	            MsgBox "SQLGetConnectOption Failed", "ERROR", vbCritical
	            Conn.Close
	           Exit Sub
	         End If
	         'display it
	         Select Case lngConnOption
	          Case SQL_PC_OFF
	             MsgBox "Cursor Behavior: Close", , "Connection Option Value"
	          Case SQL_PC_ON
	             MsgBox "Cursor Behavior: Maintain", , "Connection Option Value"
	          Case Else
	            MsgBox "ERROR: Unknown Connection Option", , _
	             "Connection Option Value", vbCritical
	         End Select
	         'uncomment the next 2 lines to stop error
	       'intRet = SQLSetConnectOption(Conn.hdbc, SQL_PRESERVE_CURSORS, ByVal _
	       'SQL_PC_ON)
	        If intRet <> SQL_SUCCESS Then
	         MsgBox "SQLSetConnectOption Failed", , "ERROR", vbCritical
	         Conn.Close
	         Exit Sub
	        End If
	        MsgBox "Connection Option Set to SQL_PC_ON", , _
	           "Connection Option Status"
	        Set Rslt = Conn.OpenResultset("select * from authors", _
	          rdOpenDynamic, rdConcurValues)
	        Conn.BeginTrans
	        Rslt.MoveFirst
	        Rslt.Edit
	        Rslt.rdoColumns("address").Value = "test"
	        Rslt.Update
	        'will error on this line if connection option not set
	        Conn.RollbackTrans
	        Rslt.MoveLast
	        Rslt.Close
	        Conn.Close
	       End Sub
	
	5. Run the project and note that the code fails as indicated.
	
	6. Uncomment the noted lines. Run the project again and note that the code does
	  not fail.
	
	STATUS
	======
	
	This behavior is not by design, but since a workaround exists, it will not be
	fixed.
	
	REFERENCES
	==========
	
	ODBC 2.0 Programmer's Guide and SDK Reference
	
	(c) Microsoft Corporation 1998. All Rights Reserved.
	Contributions by Troy Cambra, Microsoft Corporation
	
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
