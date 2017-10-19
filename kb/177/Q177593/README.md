---
layout: page
title: "Q177593: PRB: Reuse of rdoQuery Object Causes &quot;40006&quot; Unexpected Error"
permalink: /kb/177/Q177593/
---

## Q177593: PRB: Reuse of rdoQuery Object Causes &quot;40006&quot; Unexpected Error

	Article: Q177593
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
	
	In Visual Basic 5.0, when trying to reuse an rdoQuery object by setting a new
	SQL statement to the .SQL property without closing the corresponding resultset,
	the following error may result:
	
	  Run-time error '40006':
	  An unexpected error occurred.
	
	CAUSE
	=====
	
	Because the resultset is tied to the rdoQuery object that was used to create it,
	the corresponding resultset must be closed before resetting the rdoQuery.SQL
	property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	SQL Server and Pubs sample database is used here.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select References, and then place a check next to
	  Microsoft Remote Data Object 2.0.
	
	3. Add a CommandButton to Form1, Command1 is created by default.
	
	4. Paste the following code into the code window of Form1:
	
	        Private Sub Command1_Click()
	
	           Dim cn As New rdoConnection
	           Dim qd As New rdoQuery
	           Dim rs As rdoResultset
	
	           cn.Connect = "Driver={SQL Server};Server=MyServer;UID=sa;PWD=;" _
	           & "Database=pubs;"
	
	           cn.EstablishConnection
	
	           Set qd.ActiveConnection = cn
	
	           qd.SQL = "Select title_id, title From Titles"
	
	           Set rs = qd.OpenResultset(rdOpenForwardOnly, rdConcurReadOnly, _
	           rdExecDirect)
	
	           Debug.Print rs(0)
	
	           ' *** Uncomment rs.close line to avoid 40006 error
	           'rs.Close
	           ' ***
	
	           qd.SQL = "Select au_id, au_lname From Authors"
	           Set rs = qd.OpenResultset(rdOpenForwardOnly, rdConcurReadOnly)
	
	           Debug.Print rs(0)
	
	        End Sub
	
	5. Note that you must change your Server, UID, and PWD parameters in the connect
	  string.
	
	6. Start the program or press the F5 key.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdse kbDSupport kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
