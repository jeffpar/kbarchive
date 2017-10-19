---
layout: page
title: "Q173619: PRB: Winsock Control Generates Error 10048 - Address in Use"
permalink: /kb/173/Q173619/
---

## Q173619: PRB: Winsock Control Generates Error 10048 - Address in Use

	Article: Q173619
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbAPI kbCtrl kbSDKPlatform kbVBp500 kbWinsock kbGrpDSVB kbGrpDSNet
	Last Modified: 28-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Winsock control will get an error after a Connect method is called if the
	same local port has been used within the past four minutes.
	
	CAUSE
	=====
	
	The Windows socket control does not have the ability to set the socket option
	SO_REUSEADDR. This option allows the socket to be bound to an address that is
	already in use.
	
	When you close the handle to a socket, some additional negotiation goes on
	between the client and the server. The socket will wait for up to two times the
	maximum time that windows would wait to receive an acknowledgement from the
	other end of the socket that closed the port. By default, this option is set to
	two minutes. Therefore, Windows may wait up to four minutes before the port is
	actually released.
	
	This makes that specific port unavailable until it is actually released.
	
	RESOLUTION
	==========
	
	The only workaround is to not use a specific local port. If you set the
	LocalPort property to Zero, Winsock will pick a random local port for you and
	use it until a Close method is called on the WinSock Control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Setting the LocalPort property of the socket to Zero, will cause Windows to pick
	a random port.
	
	To do this, place the following code just before the line that does the connect:
	
	     Winsock1.LocalPort = 0
	     Winsock1.Connect
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample demonstrates how to reproduce the issue and how to work
	around it. In the code "myserver" indicates any Windows 2000 or Windows NT
	Server running Simple TCP/IP Services, which includes an Echo server on Port 7.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the Windows Socket Control to Form1.
	
	3. Add the following code to the form:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	          Dim res As Long
	          Winsock1.LocalPort = 2500
	          Winsock1.RemoteHost = "myserver"
	          Winsock1.RemotePort = 7
	          Winsock1.Connect
	        End Sub
	
	        Private Sub Winsock1_Error(ByVal Number As Integer, _
	          Description As String, ByVal Scode As Long, _
	          ByVal Source As String, ByVal HelpFile As String, _
	          ByVal HelpContext As Long, CancelDisplay As Boolean)
	
	          MsgBox Description, vbOKOnly, "Winsock Error: " & Number
	          CancelDisplay = True
	        End Sub
	
	4. Run the program.
	
	5. Exit the program.
	
	6. Run the program again. Note that this causes a dialog box to appear with the
	  error message:
	
	  Address in use.
	
	  To correct the code, change the line:
	
	     Winsock1.LocalPort = 2500
	
	  to:
	
	     Winsock1.LocalPort = 0
	
	  and perform steps 4 through 6 several times. You should not get any errors.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbAPI kbCtrl kbSDKPlatform kbVBp500 kbWinsock kbGrpDSVB kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
