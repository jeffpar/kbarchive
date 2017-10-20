---
layout: page
title: "Q182954: PRB: rdConcurRowver Availability Incorrect in Books Online"
permalink: /kb/182/Q182954/
---

## Q182954: PRB: rdConcurRowver Availability Incorrect in Books Online

{% raw %}

	Article: Q182954
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
	
	Books Online indicates that rdConcurRowVer can be used for a table that has only
	an ID or a timestamp. rdConcurRowVer changes to rdConcurValues when opening a
	server-side cursor on a table that has only a timestamp or only an ID.
	
	CAUSE
	=====
	
	The locktype argument specifies the type of locking used to support concurrency.
	If a locktype is not supported, it is changed at run-time. rdConcurRowVer
	locktype is only supported on a data source that has a primary key and a
	timestamp.
	
	RESOLUTION
	==========
	
	If you want to use rdConcurRowVer for a server-side cursor, the table must have
	a primary key and a timestamp.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a standard exe in Visual Basic. Form1 is created by default. Under
	  Project References, select Microsoft Remote Date Object 2.0.
	
	2. Place two CommandButtons on the form and paste the following code in the
	  form:
	
	         Option Explicit
	         Dim en As rdoEnvironment
	         Dim rs As rdoResultset
	         Dim cn As rdoConnection
	         Dim sqlstr As String
	
	         Private Sub Command1_Click()
	            sqlstr = "select * from tablename"
	             Set rs = cn.OpenResultset(sqlstr, rdOpenKeyset, _
	                rdConcurRowVer)
	         End Sub
	
	         Private Sub Command2_Click()
	            If Not (rs Is Nothing) Then
	               rs.Close
	            End If
	            cn.Close
	            Unload Me
	         End Sub
	
	         Private Sub Form_Load()
	           Set en = rdoEnvironments(0)
	           en.CursorDriver = rdUseServer
	           Set cn = en.OpenConnection(dsName:="datasourcename", _
	             Prompt:=rdDriverNoPrompt, _
	             Connect:="uid=sa;pwd=;database=PUBS;")
	           Command1.Caption = "resultset"
	           Command2.Caption = "quit"
	         End Sub
	
	3. Replace the datasourcename and the table name above.
	
	4. The table name should be changed to different tables, such as primary key and
	  timestamp, to try out the various combinations (just primary key, just
	  timestamp, just id, id and timestamp, and none of the above).
	
	5. Run the form and execute the resultset click button. Pause the execution.
	
	6. Select "add watch" from the debug window. Create a watch for rs.
	
	7. When the watch window appears, click the plus sign (+) and look at locktype.
	  Note that the only time locktype shows rdConcurRowVer is when the table has a
	  timestamp and a primary key.
	
	REFERENCES
	==========
	
	"Hitchhikers Guide to Visual Basic & SQLServer" - Fifth Edition pp 430-435
	and pp 370-372
	
	Visual Basic 5.0 Enterprise Edition Help files and Books Online under "Choosing
	an RDO Cursor Type"
	
	Additional query words: kbRDO kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
