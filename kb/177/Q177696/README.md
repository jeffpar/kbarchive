---
layout: page
title: "Q177696: HOWTO: Use Named Pipes in a Visual Basic 32-bit Program"
permalink: /kb/177/Q177696/
---

## Q177696: HOWTO: Use Named Pipes in a Visual Basic 32-bit Program

{% raw %}

	Article: Q177696
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,3.5,3.51,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWin2000 kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVB kbDSu
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- the operating system: Microsoft Windows NT, versions 3.5, 3.51, 4.0 
	- the operating system: Microsoft Windows 98 
	- Microsoft Win32 Application Programming Interface (API) 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic can create applications that communicate to other processes by
	means of Named Pipes. The Named Pipe must be created on Windows 2000 or Windows
	NT; however, you can read from and write to that pipe from any 32-bit platform.
	
	This article demonstrates Client/Server communication using a Named Pipe in
	Visual Basic.
	
	MORE INFORMATION
	================
	
	In this article, the process creating the NamedPipe is called the server, and
	the process connecting to the named pipe is called the client.
	
	There are six steps to creating a named pipe server:
	
	1. Create a security token for the pipe to allow access to it (to make a Named
	  Pipe available to any process by creating a security token with a
	  Discretionary Access Control List (DACL) that has zero entries in it).
	
	2. Create the Named Pipe.
	
	3. Call ConnectNamedPipe to block until a client connects.
	
	4. Call ReadFile and/or WriteFile to communicate over the pipe.
	
	5. Call DisconnectNamedPipe when the process is finished using the pipe.
	
	6. Either CloseHandle on the named pipe, or go back to step 4.
	
	There are three steps to use a Named Pipe from the Named Pipe client:
	
	1. Call CreateFile to get a handle to the Named Pipe.
	
	2. Call ReadFile and/or WriteFile to communicate over the pipe.
	
	3. Call CloseHandle on the filehandle created in CreateFile.
	
	Alternatively, you could call CallNamedPipe, which performs a one-time
	transaction over the pipe. CallNamedPipe opens the pipe, writes to it, reads
	from it, then closes the pipe. This is what the client below does.
	
	The following sample demonstrates how to create a Named Pipe Server and Client.
	It implements only the most rudimentary functions necessary to do so, with a
	minimal amount of error checking. A fully-functional program should check the
	return values of the API's that are called, rather than assuming they were
	successful.
	
	Named Pipe Server
	-----------------
	
	1. Create a new project. Form1 is created by default.
	
	2. Add the following code to the form:
	
	     Option Explicit
	     Private Const szPipeName = "\\.\pipe\bigtest"
	     Private Const BUFFSIZE = 20000
	     Private BigBuffer(BUFFSIZE) As Byte, pSD As Long
	     Private sa As SECURITY_ATTRIBUTES
	     Private hPipe As Long
	
	     Private Sub Form_Click()
	        Dim i As Long, dwOpenMode As Long, dwPipeMode As Long
	        Dim res As Long, nCount As Long, cbnCount As Long
	        For i = 0 To BUFFSIZE - 1       'Fill an array of numbers
	           BigBuffer(i) = i Mod 256
	        Next i
	
	        'Create the NULL security token for the pipe
	        pSD = GlobalAlloc(GPTR, SECURITY_DESCRIPTOR_MIN_LENGTH)
	        res = InitializeSecurityDescriptor(pSD, SECURITY_DESCRIPTOR_REVISION)
	        res = SetSecurityDescriptorDacl(pSD, -1, 0, 0)
	        sa.nLength = LenB(sa)
	        sa.lpSecurityDescriptor = pSD
	        sa.bInheritHandle = True
	
	        'Create the Named Pipe
	        dwOpenMode = PIPE_ACCESS_DUPLEX Or FILE_FLAG_WRITE_THROUGH
	        dwPipeMode = PIPE_WAIT Or PIPE_TYPE_MESSAGE Or PIPE_READMODE_MESSAGE
	        hPipe = CreateNamedPipe(szPipeName, dwOpenMode, dwPipeMode, _
	                                10, 10000, 2000, 10000, sa)
	
	        Do  'Wait for a connection, block until a client connects
	           res = ConnectNamedPipe(hPipe, ByVal 0)
	
	           'Read/Write data over the pipe
	           cbnCount = 4
	
	           res = ReadFile(hPipe, nCount, LenB(nCount), cbnCount, ByVal 0)
	
	           If nCount <> 0 Then
	
	              If nCount > BUFFSIZE Then 'Client requested nCount bytes
	                 nCount = BUFFSIZE      'but only send up to 20000 bytes
	              End If
	              'Write the number of bytes requested
	              res = WriteFile(hPipe, BigBuffer(0), nCount, cbnCount, ByVal 0)
	              'Make sure the write is finished
	              res = FlushFileBuffers(hPipe)
	           End If
	
	           'Disconnect the NamedPipe
	           res = DisconnectNamedPipe(hPipe)
	        Loop Until nCount = 0
	
	        'Close the pipe handle
	        CloseHandle hPipe
	        GlobalFree (pSD)
	        End
	     End Sub
	
	3. Create a new module and add the following declarations:
	
	     Option Explicit
	
	     Public Const FILE_ATTRIBUTE_NORMAL = &H80
	     Public Const FILE_FLAG_NO_BUFFERING = &H20000000
	     Public Const FILE_FLAG_WRITE_THROUGH = &H80000000
	
	     Public Const PIPE_ACCESS_DUPLEX = &H3
	     Public Const PIPE_READMODE_MESSAGE = &H2
	     Public Const PIPE_TYPE_MESSAGE = &H4
	     Public Const PIPE_WAIT = &H0
	
	     Public Const INVALID_HANDLE_VALUE = -1
	
	     Public Const SECURITY_DESCRIPTOR_MIN_LENGTH = (20)
	     Public Const SECURITY_DESCRIPTOR_REVISION = (1)
	
	     Type SECURITY_ATTRIBUTES
	             nLength As Long
	             lpSecurityDescriptor As Long
	             bInheritHandle As Long
	     End Type
	
	     Public Const GMEM_FIXED = &H0
	     Public Const GMEM_ZEROINIT = &H40
	     Public Const GPTR = (GMEM_FIXED Or GMEM_ZEROINIT)
	
	     Declare Function GlobalAlloc Lib "kernel32" ( _
	        ByVal wFlags As Long, ByVal dwBytes As Long) As Long
	     Declare Function GlobalFree Lib "kernel32" (ByVal hMem As Long) As Long
	     Declare Function CreateNamedPipe Lib "kernel32" Alias _
	        "CreateNamedPipeA" ( _
	        ByVal lpName As String, _
	        ByVal dwOpenMode As Long, _
	        ByVal dwPipeMode As Long, _
	        ByVal nMaxInstances As Long, _
	        ByVal nOutBufferSize As Long, _
	        ByVal nInBufferSize As Long, _
	        ByVal nDefaultTimeOut As Long, _
	        lpSecurityAttributes As Any) As Long
	
	     Declare Function InitializeSecurityDescriptor Lib "advapi32.dll" ( _
	        ByVal pSecurityDescriptor As Long, _
	        ByVal dwRevision As Long) As Long
	
	     Declare Function SetSecurityDescriptorDacl Lib "advapi32.dll" ( _
	        ByVal pSecurityDescriptor As Long, _
	        ByVal bDaclPresent As Long, _
	        ByVal pDacl As Long, _
	        ByVal bDaclDefaulted As Long) As Long
	
	     Declare Function ConnectNamedPipe Lib "kernel32" ( _
	        ByVal hNamedPipe As Long, _
	        lpOverlapped As Any) As Long
	
	     Declare Function DisconnectNamedPipe Lib "kernel32" ( _
	        ByVal hNamedPipe As Long) As Long
	
	     Declare Function WriteFile Lib "kernel32" ( _
	        ByVal hFile As Long, _
	        lpBuffer As Any, _
	        ByVal nNumberOfBytesToWrite As Long, _
	        lpNumberOfBytesWritten As Long, _
	        lpOverlapped As Any) As Long
	
	     Declare Function ReadFile Lib "kernel32" ( _
	        ByVal hFile As Long, _
	        lpBuffer As Any, _
	        ByVal nNumberOfBytesToRead As Long, _
	        lpNumberOfBytesRead As Long, _
	        lpOverlapped As Any) As Long
	
	     Declare Function FlushFileBuffers Lib "kernel32" ( _
	        ByVal hFile As Long) As Long
	
	     Declare Function CloseHandle Lib "kernel32" ( _
	        ByVal hObject As Long) As Long
	
	4. Save the form.
	
	Named Pipe Client
	-----------------
	
	1. Create a new project. Form1 is created by default.
	
	2. Add the following controls to the form:
	
	  Type             Name               Caption/Default Value
	  ----             ----               ---------------------
	  TextBox          cbBytes            500
	  CommandButton    cmdCallNamedPipe   Call Named Pipe
	  TextBox          txtReceive
	
	3. Add the following code to the form:
	
	     Option Explicit
	     Private Const szPipeName = "\\.\pipe\bigtest", BUFFSIZE = 20000
	     Private Declare Function CallNamedPipe Lib "kernel32" Alias _
	        "CallNamedPipeA" ( _
	        ByVal lpNamedPipeName As String, _
	        lpInBuffer As Any, _
	        ByVal nInBufferSize As Long, _
	        lpOutBuffer As Any, _
	        ByVal nOutBufferSize As Long, _
	        lpBytesRead As Long, _
	        ByVal nTimeOut As Long) As Long
	
	     Private Sub cmdCallNamedPipe_Click()
	        Dim res As Long, myStr As String, i As Long, cbRead As Long
	        Dim numBytes As Long, bArray() As Byte, temp As String
	
	        numBytes = cbBytes.Text
	        If cbBytes.Text < 0 Then
	           MsgBox "Value must be at least 0.", vbOKOnly
	           Exit Sub
	        End If
	        If numBytes > BUFFSIZE Then
	           numBytes = BUFFSIZE
	        End If
	        ReDim bArray(numBytes)  'Build the return buffer
	
	        'Call CallNamedPipe to do the transaction all at once
	        res = CallNamedPipe(szPipeName, numBytes, LenB(numBytes), _
	           bArray(0), numBytes, _
	           cbRead, 30000) 'Wait up to 30 seconds for a response
	
	        If res > 0 Then
	           temp = Format(bArray(0), " 000")
	           For i = 1 To cbRead - 1
	              If (i Mod 16) = 0 Then temp = temp & vbCrLf
	              temp = temp & " " & Format(bArray(i), "000")
	           Next i
	           txtReceive.Text = temp
	        Else
	           MsgBox "Error number " & Err.LastDllError & _
	                  " attempting to call CallNamedPipe.", vbOKOnly
	        End If
	     End Sub
	
	4. Note that if the server is running on a machine other than where the client
	  is, you need to change the '.' in the variable szPipeName to the name of the
	  server machine.
	
	5. Save the form.
	
	To test the code above, first start the server and click anywhere on the form.
	The server application is now blocking and will appear to have hung, but it is
	actually waiting for the client to connect. Then start the client application
	and click the "Call Named Pipe." The client should send the value 500 to the
	server, which will respond with 500 bytes of data. You can set the value in the
	cbBytes text box from 0 to 20000 bytes. To stop the server, simply send 0 (Zero)
	from the client. The client might receive error 233 (ERROR_PIPE_NOT_CONNECTED),
	but this is normal.
	
	Another improvement to the sample might include the use of IO Completion Ports
	and/or Non-Blocking Reads and Writes using Overlapped IO. You can find more
	information on these subjects in the Microsoft Platform SDK.
	
	REFERENCES
	==========
	
	There are several InterProcess Communication (IPC) Methods available in Windows
	2000, Windows NT and Windows 95 that allow one-way or two-way transfer of data
	between multiple processes. For a complete list of IPC Methods available on each
	platform, please see the following article in the Microsoft Knowledge Base:
	
	  Q95900 : Interprocess Communication on Windows NT, Windows 95, and Win32s
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbOSWin2000 kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVB kbDSupport 
	Technology        : kbOSWin2000 kbOSWin98 kbOSWin95 kbVBSearch kbAudDeveloper kbOSWinME kbOSWinSearch kbOSWinNT350 kbOSWinNT400 kbOSWinNT351 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbWin32sSearch kbWin32API kbOSWinNTSearch
	Version           : :2000,3.5,3.51,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
