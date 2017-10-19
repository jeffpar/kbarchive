---
layout: page
title: "Q223068: FIX: RDO InfoMessage Event Behavior Different in VB6 and VB5"
permalink: /kb/223/Q223068/
---

## Q223068: FIX: RDO InfoMessage Event Behavior Different in VB6 and VB5

	Article: Q223068
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbRDO kbVBp600bug kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 23-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using RDO with Visual Basic 6.0, it is possible to declare the RDOEngine
	object WithEvents so that you can trap informational messages that are returned
	from the underlying ODBC driver. These messages will be raised in the
	RDOEngine_InfoMessage event.
	
	When using RDO in a Visual Basic 6.0 application, you may see additional
	informational messages being raised through the RDOEngine_InfoMessage event
	under various circumstances. In these cases this event is being fired
	incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The following code reproduces this problem. This code assumes that you are using
	SQL Server as your database. You will need to modify the connection string to
	point to your SQL Server.
	
	1. Create a new Visual Basic 6.0 Project. Form1 is created by default. Set a
	  reference to the Microsoft Remote Data Object 2.0 library.
	
	2. Add a CommandButton to the default form.
	
	3. Place the following code in the default form:
	
	  Dim WithEvents rEngine As rdoEngine
	  Dim cn As rdoConnection
	  Const CONNECTSTR = "Driver={SQL Server};Server=(local);database=pubs;uid=sa;pwd="
	
	  Private Sub Command1_Click()
	      
	      Set Query = New rdoQuery
	      Query.SQL = "Begin transaction" & vbCrLf & "Rollback transaction"
	      Set Query.ActiveConnection = cn
	      Query.Prepared = False
	      Query.RowsetSize = 1
	      Query.Execute               '*** This line causes the informational message ***
	
	  End Sub
	
	  Private Sub Form_Load()
	      
	      Set rEngine = RDO.rdoEngine
	      Dim Query As rdoQuery
	      Set cn = New rdoConnection
	      cn.Connect = CONNECTSTR
	      cn.EstablishConnection rdDriverNoPrompt
	      
	  End Sub
	
	  Private Sub rEngine_InfoMessage()
	      
	      Dim myerr As rdoError
	      For Each myerr In rdoErrors
	              Debug.Print myerr.Number & " -- " & myerr.Description
	              
	      Next
	
	  End Sub
	
	REFERENCES
	==========
	
	Visual Basic 6.0 Online Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbRDO kbVBp600bug kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
