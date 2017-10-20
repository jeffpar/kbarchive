---
layout: page
title: "Q237688: HOWTO: Using getsockopt() and setsockopt() in Visual Basic"
permalink: /kb/237/Q237688/
---

## Q237688: HOWTO: Using getsockopt() and setsockopt() in Visual Basic

{% raw %}

	Article: Q237688
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbCtrl kbSDKPlatform kbSDKWin32 kbVBp kbVBp500 kbWinsock kbDSupport kbG
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use the Windows Sockets (Winsock) getsockopt
	and setsockopt functions in Visual Basic to read and set options on a socket. A
	specific parameter that is valid for the socket's protocol type can be read or
	set by passing a socket handle to these functions along with an option level and
	option name. Either a socket obtained by way of the Winsock Socket function or
	even the Winsock Control's socket handle (exposed by way of the SocketHandle
	property) can be used (as shown here).
	
	MORE INFORMATION
	================
	
	As a general rule, when calling C functions in Visual Basic, the relevant
	constants, structures (types), and functional prototypes must be redefined or
	declared. This is also the case with the Winsock API. This example shows how to
	set up the functions and constants, read all the available socket options, and
	then set the two relevant socket options for a specific protocol.
	
	The sample application contains two buttons, Command1 and Command2, which read
	and set values, respectively. The sample also contains a Winsock Control,
	Winsock1, to supply a socket handle. Please note that the Winsock Control must
	be in a bind state to be able to set the options on the socket. In other words,
	the Winsock1.SocketHandle property must have a value greater than zero. That is
	handled in the Form_Load event.
	
	Some socket options require structures to be passed to get or set the information
	for a socket. SO_LINGER is one such option and is illustrated in the sample code
	that follows.
	
	If an option is not supported for a specific socket or type of socket, the error
	10042 (WSAENOPROTOOPT) is returned.
	
	  Option Explicit
	
	  ' Error returned by Winsock API.
	  Const SOCKET_ERROR = -1
	
	  ' Level number for (get/set)sockopt() to apply to socket itself.
	  Const SOL_SOCKET = 65535      ' Options for socket level.
	  Const IPPROTO_TCP = 6         ' Protocol constant for TCP.
	
	  ' option flags per socket
	  Const SO_DEBUG = &H1&         ' Turn on debugging info recording
	  Const SO_ACCEPTCONN = &H2&    ' Socket has had listen() - READ-ONLY.
	  Const SO_REUSEADDR = &H4&     ' Allow local address reuse.
	  Const SO_KEEPALIVE = &H8&     ' Keep connections alive.
	  Const SO_DONTROUTE = &H10&    ' Just use interface addresses.
	  Const SO_BROADCAST = &H20&    ' Permit sending of broadcast msgs.
	  Const SO_USELOOPBACK = &H40&  ' Bypass hardware when possible.
	  Const SO_LINGER = &H80&       ' Linger on close if data present.
	  Const SO_OOBINLINE = &H100&   ' Leave received OOB data in line.
	
	  Const SO_DONTLINGER = Not SO_LINGER
	  Const SO_EXCLUSIVEADDRUSE = Not SO_REUSEADDR ' Disallow local address reuse.
	
	  ' Additional options.
	  Const SO_SNDBUF = &H1001&     ' Send buffer size.
	  Const SO_RCVBUF = &H1002&     ' Receive buffer size.
	  Const SO_ERROR = &H1007&      ' Get error status and clear.
	  Const SO_TYPE = &H1008&       ' Get socket type - READ-ONLY.
	
	  ' TCP Options
	  Const TCP_NODELAY = &H1&      ' Turn off Nagel Algorithm.
	
	  ' linger structure
	  Private Type LINGER_STRUCT
	    l_onoff As Integer          ' Is linger on or off?
	    l_linger As Integer         ' Linger timeout in seconds.
	  End Type
	   
	  ' Winsock API declares
	  Private Declare Function setsockopt Lib "wsock32.dll" (ByVal s As Long, ByVal level As Long, ByVal optname As Long, optval As Any, ByVal optlen As Long) As Long
	  Private Declare Function getsockopt Lib "wsock32.dll" (ByVal s As Long, ByVal level As Long, ByVal optname As Long, optval As Any, optlen As Long) As Long
	
	  Private Sub Command1_Click()
	    ' Read all the options and present in a message box.
	    Dim socket As Long
	    
	    socket = Winsock1.SocketHandle
	    
	    If socket = 0 Then
	      MsgBox "No Socket"
	    Else
	      MsgBox "Socket Options:" & vbCrLf & _
	             "    SO_DEBUG: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_DEBUG)) & vbCrLf & _
	             "    SO_ACCEPTCONN: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_ACCEPTCONN)) & vbCrLf & _
	             "    SO_REUSEADDR: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_REUSEADDR)) & vbCrLf & _
	             "    SO_KEEPALIVE: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_KEEPALIVE)) & vbCrLf & _
	             "    SO_DONTROUTE: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_DONTROUTE)) & vbCrLf & _
	             "    SO_BROADCAST: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_BROADCAST)) & vbCrLf & _
	             "    SO_USELOOPBACK: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_USELOOPBACK)) & vbCrLf & _
	             "    SO_LINGER: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_LINGER)) & vbCrLf & _
	             "    SO_OOBINLINE: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_OOBINLINE)) & vbCrLf & _
	             "    SO_DONTLINGER: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_DONTLINGER)) & vbCrLf & _
	             "    SO_EXCLUSIVEADDRUSE: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_EXCLUSIVEADDRUSE)) & vbCrLf & _
	             "    SO_SNDBUF: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_SNDBUF)) & vbCrLf & _
	             "    SO_RCVBUF: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_RCVBUF)) & vbCrLf & _
	             "    SO_ERROR: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_ERROR)) & vbCrLf & _
	             "    SO_TYPE: " & CStr(GetSocketOption(socket, SOL_SOCKET, SO_TYPE)) & vbCrLf & vbCrLf & _
	             "TCP Options:" & vbCrLf & _
	             "    TCP_NODELAY: " & CStr(GetSocketOption(socket, IPPROTO_TCP, TCP_NODELAY))
	      End If
	  End Sub
	  Private Sub Command2_Click()
	    Dim lResult As Long     ' Results of 1st option.
	    Dim lResult2 As Long    ' Results of 2nd option.
	    Dim linger As LINGER_STRUCT
	    
	    If (Winsock1.Protocol = sckTCPProtocol) Then
	      ' Change two options valid for TCP Sockets.
	      lResult = setsockopt(Winsock1.SocketHandle, IPPROTO_TCP, TCP_NODELAY, 1, 4)
	      If (lResult = SOCKET_ERROR) Then
	        MsgBox "Error setting TCP_NODELAY option: " & CStr(Err.LastDllError)
	      End If
	      
	      ' Set up the linger structure.
	      linger.l_onoff = 1
	      linger.l_linger = 5
	      lResult2 = setsockopt(Winsock1.SocketHandle, SOL_SOCKET, SO_LINGER, linger, LenB(linger))
	      If (lResult2 = SOCKET_ERROR) Then
	        MsgBox "Error setting SO_LINGER option: " & CStr(Err.LastDllError)
	      End If
	    Else
	      ' Change two options valid for UDP sockets.
	      lResult = setsockopt(Winsock1.SocketHandle, SOL_SOCKET, SO_REUSEADDR, 1, 4)
	      If (lResult = SOCKET_ERROR) Then
	        MsgBox "Error setting SO_REUSEADDR option: " & CStr(Err.LastDllError)
	      End If
	
	      lResult2 = setsockopt(Winsock1.SocketHandle, SOL_SOCKET, SO_BROADCAST, 0, 4)
	      If (lResult2 = SOCKET_ERROR) Then
	        MsgBox "Error setting SO_BROADCAST option: " & CStr(Err.LastDllError)
	      End If
	    End If
	    
	    If (lResult = 0) And (lResult2 = 0) Then
	      MsgBox "Options Set"
	    End If
	  End Sub
	  Public Function GetSocketOption(lSocket As Long, lLevel As Long, lOption As Long) As Long
	    Dim lResult As Long       ' Result of API call.
	    Dim lBuffer As Long       ' Buffer to get value into.
	    Dim lBufferLen As Long    ' len of buffer.
	    Dim linger As LINGER_STRUCT
	    
	    ' Linger requires a structure so we will get that option differently.
	    If (lOption <> SO_LINGER) And (lOption <> SO_DONTLINGER) Then
	      lBufferLen = LenB(lBuffer)
	      lResult = getsockopt(lSocket, lLevel, lOption, lBuffer, lBufferLen)
	    Else
	      lBufferLen = LenB(linger)
	      lResult = getsockopt(lSocket, lLevel, lOption, linger, lBufferLen)
	      lBuffer = linger.l_onoff
	    End If
	    
	    If (lResult = SOCKET_ERROR) Then
	      GetSocketOption = Err.LastDllError
	    Else
	      GetSocketOption = lBuffer
	    End If
	  End Function
	  Private Sub Form_Load()
	    Winsock1.Bind 8377      ' Set up socket enough to get nonzero socket. handle
	  End Sub
	
	REFERENCES
	==========
	
	- Platform SDK documentation for Windows Sockets Version 2 API
	
	- Visual Basic documentation for Visual Basic and the Winsock Control
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q110219 LONG: How to Call Windows API from VB 3.0--General Guidelines
	
	  Q106553 HOWTO: Write C DLLs and Call Them from Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbCtrl kbSDKPlatform kbSDKWin32 kbVBp kbVBp500 kbWinsock kbDSupport kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbWin32sSearch kbWin32API
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
