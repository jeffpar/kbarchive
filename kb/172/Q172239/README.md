---
layout: page
title: "Q172239: BUG: OpenResultset Doesn't Fire QueryComplete in Class Module"
permalink: /kb/172/Q172239/
---

## Q172239: BUG: OpenResultset Doesn't Fire QueryComplete in Class Module

	Article: Q172239
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
	
	Program code in the QueryComplete event procedure of a rdoConnection object will
	not execute if you use the OpenResultset method to execute a query in a class
	module.
	
	RESOLUTION
	==========
	
	The resolution to this problem is to call DoEvents function after opening the
	resultset. For example:
	
	     Set rs = cn.OpenResultset("select * from Authors", _
	         rdOpenKeyset, rdConcurValues)
	     DoEvents
	
	If you use the OpenResultset method with the rdAsyncEnable option, you need to
	use the following code to workaround the problem:
	
	     Set rs = cn.OpenResultset("select * from Authors", _
	         rdOpenKeyset, rdConcurValues, rdAsyncEnable)
	     While rs.StillExecuting
	         DoEvents
	     Wend
	     DoEvents
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. Add a new Class Module (Class1) to the project.
	
	3. Insert the following code into the General Declarations section of Class1 and
	  replace ServerName with appropriate SQL server name:
	
	        Private WithEvents cn As rdoConnection
	
	        Private Sub cn_QueryComplete(ByVal Query As RDO.rdoQuery, _
	                                    ByVal ErrorOccurred As Boolean)
	          MsgBox "Query Done --> From QueryComplete Event."
	        End Sub
	
	        Public Sub QueryCompleteTest()
	          Dim rs As rdoResultset
	          Set cn = New rdoConnection
	          With cn
	             .Connect = "UID=sa;PWD=;database=pubs;" _
	                 & "Server=ServerName;" _
	                 & "driver={SQL Server};DSN='';"
	             .QueryTimeout = 5
	             .CursorDriver = rdUseClientBatch
	             .EstablishConnection rdDriverNoPrompt
	          End With
	          Set rs = cn.OpenResultset( _
	             "select * from Authors", _
	             rdOpenKeyset, rdConcurValues)
	          'DoEvents
	        End Sub
	
	4. Add a CommandButton (Command1) to Form1.
	
	5. Insert the following code into the Click event of Command1:
	
	        Private Sub Command1_Click()
	          Dim ClsQuery As New Class1
	          ClsQuery.QueryCompleteTest
	        End Sub
	
	6. Select Project\References, and check Microsoft Remote Data Object 2.0.
	
	7. Press the F5 key to run the program.
	
	8. Click on Command1. Note that the QueryComplete event is not triggered and no
	  message box appears on screen.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400 kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
