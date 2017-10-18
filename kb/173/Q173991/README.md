---
layout: page
title: "Q173991: BUG: Error Disassociating Resultset from rdoConnection"
permalink: kb/173/Q173991/
---

## Q173991: BUG: Error Disassociating Resultset from rdoConnection

	Article: Q173991
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbRDO kbVBp kbVBp500 kbVBp500bug kbVBp600 kbVBp600bug kbOSWin95 kbOSWin98 k
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to disassociate a Resultset based on a parameterized rdoQuery object
	by setting the Resultset's ActiveConnection property to Nothing will result in
	an error:
	
	  Run-Time Error '40070':
	  This property or method is not supported when using the currently selected
	  cursor library.
	
	CAUSE
	=====
	
	This problem occurs when the Resultset is based on a parameterized rdoQuery
	object. It also occurs using the UserConnection object with the same
	circumstances.
	
	RESOLUTION
	==========
	
	The only workaround is to not use a parameterized rdoQuery object to create a
	Resultset.
	
	You can set the Resultset ActiveConnection property to Nothing if:
	
	- The Resultset is based on a SQL Select statement or a non-parameter rdoQuery,
	
	-and-
	
	- the CursorDriver is rdUseClientBatch, the type is rdOpenStatic, and the l
	  ocktype is rdConcurBatch.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Click References on the Project menu, and check Microsoft Remote Data Object
	  2.0.
	
	3. Add a Command Button to Form1.
	
	4. Add the following code to the General Declarations of Form1:
	
	        Private Sub Command1_Click()
	           Dim Rs As rdoResultset
	           Dim Cn As rdoConnection
	           Dim strConnect As String
	           Dim Query1 As rdoQuery
	
	           strConnect = "Driver={SQL Server};Server=MyServer;" & _
	           "Database=pubs;Uid=sa;Pwd="
	           rdoEnvironments(0).CursorDriver = rdUseClientBatch
	           Set Cn = rdoEnvironments(0).OpenConnection(dsName:="", _
	           Prompt:=rdDriverNoPrompt, ReadOnly:=False, Connect:=strConnect)
	
	           'To run without error, uncomment the next line and comment the
	           'following 2 lines.
	           'Set Query1 = Cn.CreateQuery("Query1", _
	             "SELECT au_id, au_lname, au_fname FROM authors")
	           Set Query1 = Cn.CreateQuery("Query1", _
	             "SELECT au_id, au_lname, au_fname FROM authors WHERE au_id = ?")
	           Cn.rdoQueries("Query1").rdoParameters(0) = "238-95-7766"
	
	           Set Rs = Cn.rdoQueries("Query1").OpenResultset(rdOpenStatic, _
	             rdConcurBatch)
	           Set Rs.ActiveConnection = Nothing       ' This causes the error
	           Rs.MoveLast
	           Rs.MoveFirst
	             Do Until Rs.EOF
	             Debug.Print Rs(1)
	             Rs.MoveNext
	           Loop
	           Cn.Close
	        End Sub
	
	5. Press the F5 key to run the project. Click Command1. You will receive the
	  run-time error '40070' when setting the ActiveConnection to Nothing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbRDO kbVBp kbVBp500 kbVBp500bug kbVBp600 kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVBDB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
