---
layout: page
title: "Q172082: HOWTO: Handle RDO 2.0 Asynchronous Processing WithEvents"
permalink: /kb/172/Q172082/
---

## Q172082: HOWTO: Handle RDO 2.0 Asynchronous Processing WithEvents

{% raw %}

	Article: Q172082
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	RDO 2.0 gives you the ability to handle asynchronous processing more elegantly
	than RDO 1.0. Because Visual Basic allows objects to be dimensioned WithEvents,
	you can use the events of the object as if it were a visual control, such as a
	textbox, rather than constantly referring to properties such as StillExecuting.
	
	MORE INFORMATION
	================
	
	This project is an example of dimensioning object's WithEvents using the events
	of RDO 2.0's rdoConnection object. Be sure to change the connect string and
	query string to correctly connect to and query your database.
	
	The sample establishes an asynchronous connection to the database and runs an
	asynchronous query. When the asynchronous calls are made, the CommandButton on
	the form is disabled. The cbton is then re-enabled in the rdoConnection's
	QueryComplete and Connect event. This code is more elegant than using a timer to
	monitor the StillExecuting property repeatedly.
	
	In the code below, note that the rdoConnection object variable MyConn is treated
	almost like a visual control. From the code window, the MyConn object variable
	is available from the dropdown list of available objects.
	
	Step-by-Step Example
	--------------------
	
	1. Begin by opening a new project and adding a reference to the Microsoft Remote
	  Data Object 2.0. To add a reference, select References from the Project menu.
	
	2. Place a CommandButton on the form and set its Name property to
	  cmdOpenResultset.
	
	3. Add the following code to the form. Be sure to modify the gstrConnect
	  constant accordingly to ensure that RDO will connect to your database:
	
	        Const gstrConnect As String = "DRIVER={SQL Server};" & _
	                                      "SERVER=YourServer;" & _
	                                      "DATABASE=pubs;" & _
	                                      "UID=sa;" & _
	                                      "PWD=;"
	        Const gstrSQL As String = "SELECT * FROM Authors"
	
	        Dim WithEvents MyConn As rdoConnection
	        Dim MyRS As rdoResultset
	
	        Private Sub Form_Load()
	            Set MyConn = New rdoConnection
	            MyConn.Connect = gstrConnect
	            MyConn.CursorDriver = rdUseOdbc
	            MyConn.EstablishConnection rdDriverNoPrompt, _
	                                       False, _
	                                       rdAsyncEnable
	            cmdOpenResultset.Enabled = False
	            Caption = "Opening Connection..."
	        End Sub
	
	        Private Sub cmdOpenResultset_Click()
	            Set MyRS = MyConn.OpenResultset(gstrSQL, _
	                                            rdOpenStatic, _
	                                            rdConcurReadOnly, _
	                                            rdExecDirect + rdAsyncEnable)
	            cmdOpenResultset.Enabled = False
	            Caption = "Running Query..."
	        End Sub
	
	        Private Sub MyConn_Connect(ByVal ErrorOccurred As Boolean)
	            If ErrorOccurred Then
	                Caption = "Error Occurred!"
	            Else
	                Caption = "Connection Established!"
	                cmdOpenResultset.Enabled = True
	            End If
	        End Sub
	
	        Private Sub MyConn_QueryComplete(ByVal Query As RDO.rdoQuery, _
	                                         ByVal ErrorOccurred As Boolean)
	            IF ErrorOccured Then
	                Caption = "Error Occurred!"
	            Else
	                Caption = "Query Complete!"
	                cmdOpenResultset.Enabled = True
	            End IF
	        End Sub
	
	4. Run the project.
	
	REFERENCES
	==========
	
	For more information on RDO 2.0's new functionality or on dimensioning objects
	WithEvents, please refer to the Visual Basic Help files or to Books Online.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	
	Contributions by David Sceppa, Microsoft Corporation
	
	Additional query words: WithEvents kbdse kbDSupport kbVBp kbVBp500 kbVBp600 KbVS97 kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
