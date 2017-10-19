---
layout: page
title: "Q260018: BUG: Winsock Control Run-Time Error 10054 in DataArrival for UDP"
permalink: /kb/260/Q260018/
---

## Q260018: BUG: Winsock Control Run-Time Error 10054 in DataArrival for UDP

	Article: Q260018
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbCtrl kbIP kbOSWin2000 kbSDKPlatform kbSDKWin32 kbVBp500 kbVBp600 kbWi
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A run-time error occurs when you use network communications on a Windows
	2000-based computer with a Winsock Control that uses User Datagram Protocol
	(UDP), and the Protocol property of the control is set as sckUDPProtocol.
	
	If a SendData request is sent to a RemoteHost that is not listening on the
	RemotePort, the DataArrival event fires and indicates that 1 byte of data is
	available. When you call the GetData method to retrieve that data, the following
	Microsoft Visual Basic run-time error occurs:
	
	  '10054' - "The connection is reset by remote side".
	
	Normally, you can capture the error by using the Error event of the Winsock
	Control. However, even when the Error event is present for the control, the
	Error event never fires and a run-time error message box displays.
	
	CAUSE
	=====
	
	When a UDP packet is sent to a remote computer and that computer is not
	listening on the port specified, the Internet Control Message Protocol (ICMP)
	reports this as an ICMP Port Unreachable error, which is then translated to the
	Windows 2000 Winsock control as error 10054.
	
	The Winsock Control incorrectly handles the error, causing it to pass to the
	Visual Basic run-time where the error is subsequently caught and displayed.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Microsoft Visual Basic Standard Error
	Handling mechanism to catch the error. This workaround is illustrated in the
	following code snippet:
	
	  Private Sub Winsock1_DataArrival(ByVal bytesTotal As Long)
	     Dim szData As String
	
	     On Error Resume Next
	     Winsock1.GetData szData
	     If Err Then 
	        ' handle the error here
	     End if
	  End Sub
	
	Use the On Error method around the GetData method of the Winsock Control to
	capture the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project.
	
	2. Add the Winsock Control to the project.
	
	3. Place a Winsock Control on the form.
	
	4. Add the following code in the Load event of the form:
	
	  Private Sub Form_Load()
	    Winsock1.Protocol = sckUDPProtocol
	    Winsock1.RemoteHost = "localhost"
	    Winsock1.RemotePort = 8377	' pick port that is not listening
	    Winsock1.SendData "Hello World!"
	  End Sub
	
	  Private Sub Winsock1_DataArrival(ByVal bytesTotal As Long)
	    Dim szData As String
	    Winsock1.GetData szData       ' error occurs here.
	  End Sub
	
	  Private Sub Winsock1_Error(ByVal Number As Integer, Description As String, ByVal Scode As Long, ByVal Source As String, ByVal HelpFile As String, ByVal HelpContext As Long, CancelDisplay As Boolean)
	    CancelDisplay = True
	    MsgBox "Error"
	  End Sub
	
	If you run this code on a Windows 2000-based computer, the Winsock1_Error handler
	is never called even though a Winsock Control error occurred.
	
	The Visual Basic error handler is able to trap and handle the error if you use
	the work around described in the "Resolution" section.
	
	NOTE: The run-time error does not occur if you run the same code on a Microsoft
	Windows 98-based computer or a Microsoft Windows NT-based computer.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q245442 INFO: Winsock Ignores ICMP Port Unreachable Control Messages
	
	  Q244751 PRB: Winsock Control does not Fire Error Event in all Cases
	
	  Q263823 WinSock Recvfrom() Now Returns WSAECONNRESET Instead of Blocking or
	  Timing Out
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbCtrl kbIP kbOSWin2000 kbSDKPlatform kbSDKWin32 kbVBp500 kbVBp600 kbWinsock kbDSupport kbGrpDSNet 
	Technology        : kbOSWin2000 kbVBSearch kbAudDeveloper kbOSWinSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
