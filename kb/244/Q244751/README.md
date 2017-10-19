---
layout: page
title: "Q244751: PRB: Winsock Control does not Fire Error Event in all Cases"
permalink: /kb/244/Q244751/
---

## Q244751: PRB: Winsock Control does not Fire Error Event in all Cases

	Article: Q244751
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbCtrl kbSDKPlatform kbSDKWin32 kbVBp600 kbDSupport kbGrpDSNet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Winsock Control in Visual Basic, setting the LocalPort property
	to a port value that is already in use on the local computer raises a Visual
	Basic Run-time error when the Connect or Bind method is called. The Run-time
	error is as follows:
	
	  '10048' - "Address in use".
	
	Normally this could be captured using the Error Event of the Winsock Control, but
	even when the Error event is present for the control, the Error event is never
	fired and the Run-time error message box is displayed.
	
	RESOLUTION
	==========
	
	A valid workaround is to use Visual Basic's standard Error Handling mechanism to
	catch the error as illustrated in the following code snippet:
	
	  On Error Resume Next
	  Winsock1.Connect
	  If Err then 
	     ' handle the error here
	  End if
	
	Simply use the On Error method around the Connect or Bind method of the Winsock
	Control to capture this error.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	- Create a New Project.
	
	- Add the Winsock Control to the Project.
	
	- Place the Winsock Control on the Form.
	
	- Add the following code:
	
	  Private Sub Form_Load()
	    Winsock1.RemoteHost = "localhost"
	    Winsock1.RemotePort = 7	' connect to echo server from Simple TCP/IP Services available on NT
	    Winsock1.LocalPort = 80	' pick a port that is in use... 80 is IIS (http)  
	    Winsock1.Connect  ' this line of code will force the run-time error even the error event is included below
	  End Sub
	
	  Private Sub Winsock1_Error(ByVal Number As Integer, Description As String, ByVal Scode As Long, ByVal Source As String, ByVal HelpFile As String, ByVal HelpContext As Long, CancelDisplay As Boolean)
	    CancelDisplay = True
	    MsgBox "Error"
	  End Sub
	
	When this code is run the Winsock1_Error handler is never called even though a
	Winsock Control error has occurred. Using the work-around mentioned earlier
	causes Visual Basic's normal error handling to handle the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbCtrl kbSDKPlatform kbSDKWin32 kbVBp600 kbDSupport kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
