---
layout: page
title: "Q154512: SAMPLE: Winsock.exe Getting HostAddress Using Windows Sockets"
permalink: /kb/154/Q154512/
---

## Q154512: SAMPLE: Winsock.exe Getting HostAddress Using Windows Sockets

{% raw %}

	Article: Q154512
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbVBp400 kbVBp500 kbWinsock
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to get the HostAddress of a machine using Windows
	Sockets. The TCP/IP network protocol is shipped with all Windows operating
	systems and is becoming increasingly more important with its Internet
	compatibility. There is an API set for Windows Sockets that can work with TCP/IP
	and help to return information such as the HostName or the IP Address of a
	machine. This is obviously reliant on the presence of the relevant DNS or WINS
	servers and the TCP/IP protocol being installed. Below is a sample showing how
	to extract the machine HostAddress.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Winsock.exe
	  (http://download.microsoft.com/download/vb50ent/Sample45/1/W9XNT4/EN-US/Winsock.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	NOTE: This code requires at least version 1.1 of Windows Sockets.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a CommandButton on the form.
	
	3. Add the following code to the Form1 code window:
	
	        Option Explicit
	
	        Private Const WSADescription_Len = 256
	        Private Const WSASYS_Status_Len = 128
	        Private Const SOCKET_ERROR As Long = -1
	
	        Private Type WSADATA
	           wversion As Integer
	           wHighVersion As Integer
	           szDescription(0 To WSADescription_Len) As Byte
	           szSystemStatus(0 To WSASYS_Status_Len) As Byte
	           iMaxSockets As Integer
	           iMaxUdpDg As Integer
	           lpszVendorInfo As Long
	        End Type
	
	           Private Declare Function gethostname Lib "WSOCK32.DLL" (ByVal hostname$, _
	     ByVal HostLen As Integer) As Long
	
	        Private Declare Function WSAGetLastError Lib "WSOCK32.DLL" _
	           () As Long
	        Private Declare Function WSAStartup Lib "WSOCK32.DLL" (ByVal _
	           wVersionRequired as Integer, lpWSAData As WSADATA) As Long
	        Private Declare Function WSACleanup Lib "WSOCK32.DLL" () As Long
	
	        Sub Form_Load()
	          Call SocketsInitialize
	        End Sub
	
	        Private Sub Command1_click()
	          Dim hostname$, HostLen&
	          HostLen& = 256
	          hostname$ = Space$(HostLen&)
	          If gethostname(hostname$, HostLen&) = SOCKET_ERROR Then
	              MsgBox "Windows Sockets error" & Str(WSAGetLastError())
	          Else
	              hostname$ = Trim$(hostname$)
	              hostname$ = Left$(hostname$, Len(hostname$) - 1)
	              MsgBox "Host name  = " & hostname$
	          End If
	          SocketsCleanup
	        End Sub
	
	        Sub SocketsInitialize()
	          Const WS_VERSION_REQD As Integer = &H101
	          Const WS_VERSION_MAJOR = WS_VERSION_REQD \ &H100 And &HFF&
	          Const WS_VERSION_MINOR = WS_VERSION_REQD And &HFF&
	          Const MIN_SOCKETS_REQD = 1
	          Dim WSAD As WSADATA
	          Dim iReturn As Integer
	          Dim sLowByte As String, sHighByte As String, sMsg As String
	          iReturn = WSAStartup(WS_VERSION_REQD, WSAD)
	          If iReturn <> 0 Then
	              MsgBox "Winsock.dll is not responding."
	              End
	          End If
	          If lobyte(WSAD.wversion) < WS_VERSION_MAJOR Or (lobyte _
	            (WSAD.wversion) = WS_VERSION_MAJOR And hibyte(WSAD.wversion) _
	            < WS_VERSION_MINOR) Then
	            sHighByte = Trim$(Str$(hibyte(WSAD.wversion)))
	            sLowByte = Trim$(Str$(lobyte(WSAD.wversion)))
	            sMsg = "Windows Sockets version " & sLowByte & "." & sHighByte
	            sMsg = sMsg & " is not supported by winsock.dll "
	            MsgBox sMsg:
	            End
	       End If
	       If WSAD.iMaxSockets < MIN_SOCKETS_REQD Then
	         sMsg = "This application requires a minimum of "
	         sMsg = sMsg & Trim$(Str$(MIN_SOCKETS_REQD)) & _
	         " supported sockets."
	         MsgBox sMsg
	         End
	       End If
	        End Sub
	
	        Function hibyte(ByVal wParam As Integer)
	           hibyte = wParam \ &H100 And &HFF&
	        End Function
	
	        Function lobyte(ByVal wParam As Integer)
	           lobyte = wParam And &HFF&
	        End Function
	
	        Sub SocketsCleanup()
	          Dim lReturn As Long
	          lReturn = WSACleanup()
	          If lReturn <> 0 Then
	            MsgBox "Socket error " & Trim$(Str$(lReturn)) & _
	     " occurred in Cleanup"
	            End
	          End If
	        End Sub
	
	4. Press the F5 key to run the project. The Hostname should be printed on the
	  form.
	
	Additional query words: vb5rel kbintluk
	
	======================================================================
	Keywords          : kbfile kbsample kbVBp400 kbVBp500 kbWinsock 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
