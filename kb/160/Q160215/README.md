---
layout: page
title: "Q160215: HOWTO: Obtain the Host IP Address Using Windows Sockets"
permalink: /kb/160/Q160215/
---

## Q160215: HOWTO: Obtain the Host IP Address Using Windows Sockets

{% raw %}

	Article: Q160215
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to obtain the host IP address of the local machine
	by using the GetHostByName API of the Windows Sockets dll, Wsock32.dll. To
	obtain the host IP address, you must use GetHostByName in conjunction with
	GetHostName.
	
	MORE INFORMATION
	================
	
	GetHostName returns the standard host name for the local machine. You can use
	GetHostByName to resolve this name and return a pointer to the HOSTENT
	structure. This structure contains the host address information.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a CommandButton, Command1, on Form1.
	
	3. Place the following code in the General Declarations section of Form1:
	
	     Private Const WS_VERSION_REQD = &H101
	     Private Const WS_VERSION_MAJOR = WS_VERSION_REQD \ &H100 And &HFF&
	     Private Const WS_VERSION_MINOR = WS_VERSION_REQD And &HFF&
	     Private Const MIN_SOCKETS_REQD = 1
	     Private Const SOCKET_ERROR = -1
	     Private Const WSADescription_Len = 256
	     Private Const WSASYS_Status_Len = 128
	
	     Private Type HOSTENT
	         hName As Long
	         hAliases As Long
	         hAddrType As Integer
	         hLength As Integer
	         hAddrList As Long
	     End Type
	
	     Private Type WSADATA
	         wversion As Integer
	         wHighVersion As Integer
	         szDescription(0 To WSADescription_Len) As Byte
	         szSystemStatus(0 To WSASYS_Status_Len) As Byte
	         iMaxSockets As Integer
	         iMaxUdpDg As Integer
	         lpszVendorInfo As Long
	     End Type
	
	     Private Declare Function WSAGetLastError Lib "WSOCK32.DLL" () As Long
	     Private Declare Function WSAStartup Lib "WSOCK32.DLL" (ByVal _
	     wVersionRequired as Integer, lpWSAData As WSADATA) As Long
	     Private Declare Function WSACleanup Lib "WSOCK32.DLL" () As Long
	     
	     Private Declare Function gethostname Lib "WSOCK32.DLL" (ByVal hostname$,_
	     ByVal HostLen as Long) as long
	     Private Declare Function gethostbyname Lib "WSOCK32.DLL" (ByVal _
	     hostname$) As Long
	     Private Declare Sub RtlMoveMemory Lib "KERNEL32" (hpvDest As Any, ByVal_
	     hpvSource&, ByVal cbCopy&)
	
	     Function hibyte(ByVal wParam As Integer)
	
	         hibyte = wParam \ &H100 And &HFF&
	
	     End Function
	
	     Function lobyte(ByVal wParam As Integer)
	
	         lobyte = wParam And &HFF&
	
	     End Function
	
	     Sub SocketsInitialize()
	     Dim WSAD As WSADATA
	     Dim iReturn As Integer
	     Dim sLowByte As String, sHighByte As String, sMsg As String
	
	         iReturn = WSAStartup(WS_VERSION_REQD, WSAD)
	
	         If iReturn <> 0 Then
	             MsgBox "Winsock.dll is not responding."
	             End
	         End If
	
	         If lobyte(WSAD.wversion) <WS_VERSION_MAJOR Or (lobyte(WSAD.wversion) = _
	             WS_VERSION_MAJOR And hibyte(WSAD.wversion) < WS_VERSION_MINOR) Then
	
	             sHighByte = Trim$(Str$(hibyte(WSAD.wversion)))
	             sLowByte = Trim$(Str$(lobyte(WSAD.wversion)))
	             sMsg = "Windows Sockets version " & sLowByte & "." & sHighByte
	             sMsg = sMsg & " is not supported by winsock.dll "
	             MsgBox sMsg
	             End
	         End If
	
	         'iMaxSockets is not used in winsock 2. So the following check is only
	         'necessary for winsock 1. If winsock 2 is requested,
	         'the following check can be skipped.
	
	         If WSAD.iMaxSockets < MIN_SOCKETS_REQD Then
	             sMsg = "This application requires a minimum of "
	             sMsg = sMsg & Trim$(Str$(MIN_SOCKETS_REQD)) & " supported sockets."
	             MsgBox sMsg
	             End
	         End If
	
	     End Sub
	
	     Sub SocketsCleanup()
	     Dim lReturn As Long
	
	         lReturn = WSACleanup()
	
	         If lReturn <> 0 Then
	             MsgBox "Socket error " & Trim$(Str$(lReturn)) & " occurred in Cleanup "
	             End
	         End If
	
	     End Sub
	
	     Sub Form_Load()
	
	         SocketsInitialize
	
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	
	         SocketsCleanup
	
	     End Sub
	
	     Private Sub Command1_click()
	     Dim hostname As String * 256
	     Dim hostent_addr As Long
	     Dim host As HOSTENT
	     Dim hostip_addr As Long
	     Dim temp_ip_address() As Byte
	     Dim i As Integer
	     Dim ip_address As String
	
	         If gethostname(hostname, 256) = SOCKET_ERROR Then
	             MsgBox "Windows Sockets error " & Str(WSAGetLastError())
	             Exit Sub
	         Else
	             hostname = Trim$(hostname)
	         End If
	
	         hostent_addr = gethostbyname(hostname)
	
	         If hostent_addr = 0 Then
	             MsgBox "Winsock.dll is not responding."
	             Exit Sub
	         End If
	
	         RtlMoveMemory host, hostent_addr, LenB(host)
	         RtlMoveMemory hostip_addr, host.hAddrList, 4
	
	         MsgBox hostname
	
	         'get all of the IP address if machine is  multi-homed
	
	         Do
	             ReDim temp_ip_address(1 To host.hLength)
	             RtlMoveMemory temp_ip_address(1), hostip_addr, host.hLength
	
	             For i = 1 To host.hLength
	                 ip_address = ip_address & temp_ip_address(i) & "."
	             Next
	             ip_address = Mid$(ip_address, 1, Len(ip_address) - 1)
	
	             MsgBox ip_address
	
	             ip_address = ""
	             host.hAddrList = host.hAddrList + LenB(host.hAddrList)
	             RtlMoveMemory hostip_addr, host.hAddrList, 4
	          Loop While (hostip_addr <> 0)
	
	     End Sub
	
	4. Press the F5 key to run the project.
	
	5. Click Command1 to obtain the host information.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q154512 SAMPLE: WINSOCK.EXE: Getting HostAddress Using Windows Sockets
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
