---
layout: page
title: "Q275004: HOWTO: Transfer a Bitmap to a PocketPC Using the Winsock Control"
permalink: /kb/275/Q275004/
---

## Q275004: HOWTO: Transfer a Bitmap to a PocketPC Using the Winsock Control

	Article: Q275004
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to transfer a bitmap to a PocketPC device by using
	the Winsock control.
	
	MORE INFORMATION
	================
	
	Step by Step Example
	--------------------
	
	To transfer a bitmap, follow these steps:
	
	1. Create a desktop Microsoft Visual Basic (VB) Standard EXE application. To do
	  this, follow these steps:
	
	  a. In Visual Basic, create a new Standard EXE project.
	
	  b. On the Project menu, click Components and select the Microsoft Winsock
	     control.
	
	  c. Place three command buttons, two Winsock controls, and two labels on
	     Form1. The placement of the controls is unimportant.
	
	  d. Paste the following code in Form1:
	
	  Option Explicit
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
	
	  Private Declare Function WSAStartup Lib "WSOCK32.DLL" ( _
	      ByVal wVersionRequired As Long, _
	      lpWSAData As WSADATA) As Long
	     
	  Private Declare Function WSACleanup Lib "WSOCK32.DLL" () As Long
	
	  Private Declare Function gethostname Lib "WSOCK32.DLL" ( _
	      ByVal hostname As String, _
	      ByVal HostLen As Long) As Long
	     
	  Private Declare Function gethostbyname Lib "WSOCK32.DLL" ( _
	      ByVal hostname As String) As Long
	     
	  Private Declare Sub RtlMoveMemory Lib "KERNEL32" ( _
	      hpvDest As Any, _
	      ByVal hpvSource As Long, _
	      ByVal cbCopy As Long)
	
	  Private Function hibyte(ByVal wParam As Integer)
	      hibyte = wParam \ &H100 And &HFF&
	  End Function
	
	  Private Function lobyte(ByVal wParam As Integer)
	      lobyte = wParam And &HFF&
	  End Function
	
	  Private Sub Form_Load()
	      Label1.Move 120, 120, 2535, 255
	      Label2.Move 1920, 600, 2535, 255
	      Command1.Move 120, 600, 1575, 475
	      Command2.Move 120, 1200, 1575, 475
	      Command3.Move 120, 1800, 1575, 475
	      Form1.Height = 2850
	      Form1.Width = 4080
	      Label1.Caption = "Host IP: " & GetHostIP
	      Label2.Caption = GetWinsockState
	      SocketsInitialize
	      Command1.Caption = "Listen"
	      Command2.Caption = "Send Data"
	      Command3.Caption = "Close Connections"
	      Command2.Enabled = False
	      Command3.Enabled = False
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      SocketsCleanup
	  End Sub
	
	  Private Sub Command1_Click()
	      Winsock1.Protocol = sckTCPProtocol
	      Winsock1.LocalPort = 5149
	      Winsock1.RemotePort = 5150
	      Winsock1.Listen
	      Label2.Caption = GetWinsockState
	      Command1.Enabled = False
	      MsgBox "Go hit ""Connect"" button on device"
	  End Sub
	
	  Private Sub Command2_Click()
	      Dim sFileName As String
	      Dim lOffset As Long
	      Dim bTemp As Byte
	      Dim bFileData() As Byte
	      Dim lLength As Long
	      
	      'NOTE: BMP must be 256 color or less.
	      sFileName = "d:\mnu.bmp"
	      
	      Open sFileName For Binary Access Read As #1
	      ReDim bFileData(FileLen(sFileName))
	      lLength = FileLen(sFileName) + 1
	      
	      For lOffset = 1 To lLength
	          If Not lOffset = lLength Then
	              Get #1, lOffset, bTemp
	              bFileData(lOffset - 1) = bTemp
	          Else
	              bFileData(lOffset - 1) = CByte(26)
	          End If
	      Next lOffset
	      
	      Close #1
	      
	      Winsock2.SendData bFileData()
	      
	      Command2.Enabled = False
	      Command3.Enabled = True
	  End Sub
	
	  Private Sub Command3_Click()
	      Winsock1.Close
	      Winsock2.Close
	      Label2.Caption = GetWinsockState
	      Command1.Enabled = True
	      Command2.Enabled = False
	      Command3.Enabled = False
	  End Sub
	
	  Private Sub Winsock1_ConnectionRequest(ByVal requestID As Long)
	      Winsock2.Accept requestID
	      Command2.Enabled = True
	      Label2.Caption = "Listening: Connected"
	  End Sub
	
	  Private Sub SocketsInitialize()
	      Dim WSAD As WSADATA
	      Dim iReturn As Integer
	      Dim sLowByte As String, sHighByte As String, sMsg As String
	      
	      iReturn = WSAStartup(WS_VERSION_REQD, WSAD)
	      
	      If iReturn <> 0 Then
	          MsgBox "Winsock.dll is not responding."
	          End
	      End If
	
	      If lobyte(WSAD.wversion) < WS_VERSION_MAJOR Or _
	          (lobyte(WSAD.wversion) = _
	          WS_VERSION_MAJOR And hibyte(WSAD.wversion) < WS_VERSION_MINOR) Then
	          sHighByte = Trim$(Str$(hibyte(WSAD.wversion)))
	          sLowByte = Trim$(Str$(lobyte(WSAD.wversion)))
	          sMsg = "Windows Sockets version " & sLowByte & "." & sHighByte
	          sMsg = sMsg & " is not supported by winsock.dll "
	          MsgBox sMsg
	          End
	      End If
	
	      'iMaxSockets is not used in Winsock 2, so the following check is only
	      'necessary for Winsock 1. If Winsock 2 is requested,
	      'the following check can be skipped.
	
	      If WSAD.iMaxSockets < MIN_SOCKETS_REQD Then
	          sMsg = "This application requires a minimum of "
	          sMsg = sMsg & Trim$(Str$(MIN_SOCKETS_REQD)) & " supported sockets."
	          MsgBox sMsg
	          End
	      End If
	
	  End Sub
	
	  Private Function GetWinsockState() As String
	      Select Case Winsock1.State
	          Case 0 'sckClosed
	              GetWinsockState = "Closed"
	          Case 1 'sckOpen
	              GetWinsockState = "Open"
	          Case 2 'sckListening
	              GetWinsockState = "Listening"
	          Case 3 'sckConnectionPending
	              GetWinsockState = "Connection pending"
	          Case 4 'sckResolvingHost
	              GetWinsockState = "Resolving host"
	          Case 5 'sckHostResolved
	              GetWinsockState = "Host resolved"
	          Case 6 'sckConnecting
	              GetWinsockState = "Connecting"
	          Case 7 'sckConnected
	              GetWinsockState = "Connected"
	          Case 8 'sckClosing
	              GetWinsockState = "Peer is closing the connection"
	          Case 9 'sckError
	              GetWinsockState = "Error"
	      End Select
	  End Function
	
	  Private Function GetHostIP() As String
	      Dim sHostName As String * 256
	      Dim lHostEnt_Addr As Long
	      Dim Host As HOSTENT
	      Dim lHostIP_Addr As Long
	      Dim bTempIP_Addr() As Byte
	      Dim i As Integer
	      Dim sIP_Addr As String
	      
	      If gethostname(sHostName, 256) = SOCKET_ERROR Then
	          MsgBox "Windows Sockets error " & Str(WSAGetLastError())
	          Exit Function
	      Else
	          sHostName = Trim$(sHostName)
	      End If
	      
	      lHostEnt_Addr = gethostbyname(sHostName)
	      
	      If lHostEnt_Addr = 0 Then
	          MsgBox "Winsock.dll is not responding."
	          Exit Function
	      End If
	      
	      RtlMoveMemory Host, lHostEnt_Addr, LenB(Host)
	      RtlMoveMemory lHostIP_Addr, Host.hAddrList, 4
	      
	      'Get all of the IP addresses if the computer is multi-homed.
	      Do
	          ReDim bTempIP_Addr(1 To Host.hLength)
	          RtlMoveMemory bTempIP_Addr(1), lHostIP_Addr, Host.hLength
	          
	          For i = 1 To Host.hLength
	              sIP_Addr = sIP_Addr & bTempIP_Addr(i) & "."
	          Next
	          
	          sIP_Addr = Mid$(sIP_Addr, 1, Len(sIP_Addr) - 1)
	          GetHostIP = sIP_Addr
	          sIP_Addr = ""
	          Host.hAddrList = Host.hAddrList + LenB(Host.hAddrList)
	          RtlMoveMemory lHostIP_Addr, Host.hAddrList, 4
	      Loop While (lHostIP_Addr <> 0)
	
	  End Function
	
	  Private Sub SocketsCleanup()
	      Dim lReturn As Long
	      lReturn = WSACleanup()
	      If lReturn <> 0 Then
	          MsgBox "Socket error " & Trim$(Str$(lReturn)) & _
	                 " occurred in cleanup."
	          End
	      End If
	  End Sub
	
	2. Create an eMbedded Visual Basic (eVB) PocketPC application. To do this,
	  follow these steps:
	
	  a. Create a new PocketPC application in eVB.
	
	  b. On the Project menu, click Components and select the Microsoft CE Winsock
	     Control and the Microsoft CE Image Control.
	
	  c. Place two command buttons, one label, one image control, and one Winsock
	     control on Form1. The placement of the controls is unimportant.
	
	  d. Paste the following code in Form1:
	
	  Option Explicit
	
	  Dim inBytes() As Variant
	  Dim MyString As String
	  Dim bLast As Boolean
	  Dim bNotFirst As Boolean
	  Dim hFile As Long
	
	  Private Sub Command1_Click()
	      WaitCursor True
	      Label1.Caption = "Connecting...."
	      WinSock1.LocalPort = 5150
	      WinSock1.RemotePort = 5149
	      WinSock1.RemoteHost = "111.111.111.111" 'Put your IP address here
	      WinSock1.Connect
	      
	      Label1.Caption = "Connected"
	      Command1.Enabled = False
	      Command2.Enabled = True
	      WaitCursor False
	  End Sub
	
	  Private Sub Command2_Click()
	      WinSock1.Close
	      Command1.Enabled = True
	      Command2.Enabled = False
	  End Sub
	
	  Private Sub Form_Load()
	      Command1.Move 120, 120, 1335, 495
	      Command2.Move 120, 720, 1335, 495
	      Label1.Move 1560, 120, 1695, 255
	      ImageCtl1.Move 120, 1320, 2775, 1575
	      Command1.Caption = "Connect"
	      Command2.Caption = "Close Winsock"
	      Command2.Enabled = False
	      Label1.Caption = ""
	  End Sub
	
	  Private Sub WinSock1_DataArrival(ByVal bytesTotal As Long)
	      ReDim inBytes(bytesTotal)
	      
	      WinSock1.GetData inBytes, (vbByte + vbArray)
	      
	      If AscB(ChrB(inBytes(UBound(inBytes)))) = 26 Then
	          bLast = True
	      End If
	      
	      MakeString
	      WriteIt
	      
	      If bLast Then ImageCtl1.Picture = "\MyFile.bmp"
	  End Sub
	
	  Private Sub MakeString()
	      Dim x As Integer
	      Dim iEnd As Integer
	      
	      MyString = ""
	      
	      If Not bLast Then
	          iEnd = UBound(inBytes)
	      Else
	          iEnd = UBound(inBytes) - 1
	      End If
	      
	      For x = LBound(inBytes) To iEnd
	          MyString = MyString & ChrB(inBytes(x))
	      Next
	  End Sub
	
	  Private Function WriteIt() As Boolean
	      Dim retVal As Long, lWritten As Long
	      
	      If Not bNotFirst Then
	          hFile = CreateFile("MyFile.bmp", GENERIC_READ + GENERIC_WRITE, _
	                             0, 0, CREATE_ALWAYS, 0, 0)
	          bNotFirst = True
	      End If
	      
	      If hFile <> -1 Then
	          retVal = WriteFile(hFile, MyString, LenB(MyString), lWritten, 0)
	          If bLast Then retVal = CloseHandle(hFile)
	      End If
	  End Function
	
	  Private Sub Form_OKClick()
	      App.End
	  End Sub
	
	  e. On the Project menu, click Add Module and add a new module to the project.
	
	  f. Paste the following code in Module1:
	
	  Option Explicit
	
	  Public Declare Function CreateFile Lib "Coredll" Alias "CreateFileW" ( _
	      ByVal lpFileName As String, _
	      ByVal dwDesiredAccess As Long, _
	      ByVal dwShareMode As Long, _
	      lpSecurityAttributes As Long, _
	      ByVal dwCreationDisposition As Long, _
	      ByVal dwFlagsAndAttributes As Long, _
	      ByVal hTemplateFile As Long) As Long
	
	  Public Declare Function ReadFile Lib "Coredll" ( _
	      ByVal hFile As Long, _
	      ByVal lpBuffer As String, _
	      ByVal nNumberOfBytesToRead As Long, _
	      lpNumberOfBytesRead As Long, _
	      ByVal lpOverlapped As Long) As Long
	
	  Public Declare Function WriteFile Lib "Coredll" ( _
	      ByVal hFile As Long, _
	      ByVal lpBuffer As String, _
	      ByVal nNumberOfBytesToWrite As Long, _
	      lpNumberOfBytesWritten As Long, _
	      ByVal lpOverlapped As Long) As Long
	
	  Public Declare Function CloseHandle Lib "Coredll" ( _
	      ByVal hObject As Long) As Long
	
	  Public Declare Function GetLastError Lib "Coredll" () As Long
	
	  Public Declare Function LoadCursor Lib "Coredll" _
	      Alias "LoadCursorW" ( _
	      ByVal hInstance As Long, _
	      ByVal lpCursorName As Long) As Long
	
	  Public Declare Function SetCursor Lib "Coredll" ( _
	      ByVal hCursor As Long) As Long
	      
	  Public Const READ_CONTROL = &H20000
	  Public Const READ_WRITE = 2
	  Public Const FILE_READ_DATA = (&H1)
	  Public Const FILE_READ_ATTRIBUTES = (&H80)
	  Public Const FILE_READ_EA = (&H8)
	  Public Const FILE_WRITE_ATTRIBUTES = (&H100)
	  Public Const FILE_WRITE_DATA = (&H2)
	  Public Const FILE_WRITE_EA = (&H10)
	  Public Const FILE_APPEND_DATA = (&H4)
	  Public Const SYNCHRONIZE = &H100000
	
	  Public Const CREATE_ALWAYS = 2
	  Public Const OPEN_EXISTING = 3
	  Public Const OPEN_ALWAYS = 4
	  Public Const STANDARD_RIGHTS_WRITE = &H20000
	  Public Const STANDARD_RIGHTS_READ = &H20000
	  Public Const GENERIC_READ = &H80000000
	  Public Const GENERIC_WRITE = &H40000000
	
	  Public Const IDC_WAIT = 32514
	
	  Public Function WaitCursor(bWait As Boolean) As Long
	      Dim hCursor As Long
	      
	      'Obtain the handle to the cursor.
	      If bWait Then
	          'Get handle to the wait cursor.
	          hCursor = LoadCursor(0, IDC_WAIT)
	      Else
	          'Restore default cursor.
	          hCursor = LoadCursor(0, 0)
	      End If
	      
	      'Set the cursor based on the cursor handle.
	      WaitCursor = SetCursor(hCursor)
	
	  End Function
	
	3. Test the samples. To do this, follow these steps:
	
	  a. Verify that the bitmap that the desktop VB application points to is a
	     valid 256 color bitmap, then run the desktop VB project.
	
	  b. Note the IP address that is displayed on Form1, and change the IP address
	     in the eVB code to match that IP address.
	
	  c. Run the eVB project, targeting the PocketPC device.
	
	  d. On the desktop VB application, click Listen.
	
	  e. On the eVB application, click Connect.
	
	  f. After the connection is established, click Send Data on the desktop VB
	     application.
	
	The bitmap is transferred to the device and displayed on the eVB form.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q160215 HOWTO: Obtain the Host IP Address Using Windows Sockets
	
	Additional query words: evb winsock binary
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
