---
layout: page
title: "Q183987: PRB: SendData Method Generates Error 40006"
permalink: /kb/183/Q183987/
---

## Q183987: PRB: SendData Method Generates Error 40006

{% raw %}

	Article: Q183987
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbAPI kbSDKPlatform kbVBp500 kbWinsock kbGrpDSVB kbGrpDSNet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call the SendData method in the WinSock control before the socket has
	been connected, you will receive the Microsoft Visual Basic Error:
	
	  Run-time error: 40006
	
	  "Wrong protocol or connection state for the requested transaction or request."
	
	CAUSE
	=====
	
	The code is trying to call the SendData method before the port has actually been
	connected. The Connect method in Visual Basic is asynchronous and is more like a
	request to connect to the Winsock port.
	
	RESOLUTION
	==========
	
	The code must wait until the Connect event is fired before attempting to call
	the SendData or GetData methods. The Connect event is a signal that the connect
	request has been accepted and the connection is established.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce and Work Around Behavior
	-------------------------------------------
	
	1. Create a new project in Visual Basic 5.0.
	
	2. From the Projects menu, choose Components. Make sure that Microsoft Winsock
	  Control 5.0 is checked, and then click the OK button.
	
	3. Add a Winsock Control to the form and leave it named Winsock1.
	
	4. Add a CommandButton named Command1.
	
	5. Add the following code to the form:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          Winsock1.SendData "Hello World."
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Enabled = False
	           Winsock1.Connect InputBox$("Enter Server name:"), 7
	           Command1_Click
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           Winsock1.Close
	        End Sub
	
	        Private Sub Winsock1_Connect()
	           Command1.Enabled = True
	        End Sub
	
	        Private Sub Winsock1_DataArrival(ByVal bytesTotal As Long)
	           Dim temp As String
	           temp = String(bytesTotal, Chr$(0))
	           Winsock1.GetData temp, vbString, bytesTotal
	           MsgBox temp
	        End Sub
	
	6. Execute the program. You should get error 40006 after entering a valid server
	  name in the input box. When it fails, click on END.
	
	7. Remove the line Command1_click from the Form_Load() sub, and run the program
	  again. You should get a message box that says "Hello World."
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbAPI kbSDKPlatform kbVBp500 kbWinsock kbGrpDSVB kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
