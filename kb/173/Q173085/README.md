---
layout: page
title: "Q173085: HOWTO: Create a Process for Reading and Writing to a Pipe"
permalink: kb/173/Q173085/
---

## Q173085: HOWTO: Create a Process for Reading and Writing to a Pipe

	Article: Q173085
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This example illustrates a Visual Basic application starting another process
	with the purpose of redirecting that process's standard IO handles. The Visual
	Basic application redirects the created process's standard output handle to an
	anonymous pipe, then proceeds to read the output through the pipe. This sample
	just redirects STDOUT of the new process. To redirect other handles (STDIN and
	STDERR), create a pipe for each handle for which redirection is desired. The
	Visual Basic application would read from the read ends of the pipes for the
	redirected STDOUT and STDERR. If STDIN redirection was desired, the Visual Basic
	application would write to the write end of the appropriate pipe. An example
	follows:
	
	     'A pipe for redirection of STDOUT
	     CreatePipe(hReadPipe1, hWritePipe1, sa, 0)
	
	     'A pipe for redirection of STDERR
	     CreatePipe(hReadPipe2, hWritePipe2, sa, 0)
	
	     'A pipe for redirection of STDIN
	     CreatePipe(hReadPipe3, hWritePipe3, sa, 0)
	
	     'Preparing to start the process with redirected handles
	     start.hStdOutput = hWritePipe1
	     start.hStdError = hWritePipe2
	     start.hStdInput = hReadPipe3
	
	     'Reading output from the started process's STDOUT
	     ReadFile(hReadPipe1, mybuff1, 100, bytesread, ByVal 0&)
	
	     'Reading output from the started process's STDERR
	     ReadFile(hReadPipe2, mybuff2, 100, bytesread, ByVal 0&)
	
	     'Writing to the started process's STDIN
	     WriteFile(hWritePipe3, mybuff3, 100, byteswritten, ByVal 0&)
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function CreatePipe Lib "kernel32" ( _
	            phReadPipe As Long, _
	            phWritePipe As Long, _
	            lpPipeAttributes As Any, _
	            ByVal nSize As Long) As Long
	
	        Private Declare Function ReadFile Lib "kernel32" ( _
	            ByVal hFile As Long, _
	            ByVal lpBuffer As String, _
	            ByVal nNumberOfBytesToRead As Long, _
	            lpNumberOfBytesRead As Long, _
	            byval lpOverlapped As Any) As Long
	
	        Private Type SECURITY_ATTRIBUTES
	            nLength As Long
	            lpSecurityDescriptor As Long
	            bInheritHandle As Long
	        End Type
	
	        Private Type STARTUPINFO
	           cb As Long
	           lpReserved As Long
	           lpDesktop As Long
	           lpTitle As Long
	           dwX As Long
	           dwY As Long
	           dwXSize As Long
	           dwYSize As Long
	           dwXCountChars As Long
	           dwYCountChars As Long
	           dwFillAttribute As Long
	           dwFlags As Long
	           wShowWindow As Integer
	           cbReserved2 As Integer
	           lpReserved2 As Long
	           hStdInput As Long
	           hStdOutput As Long
	           hStdError As Long
	        End Type
	
	        Private Type PROCESS_INFORMATION
	           hProcess As Long
	           hThread As Long
	           dwProcessID As Long
	           dwThreadID As Long
	        End Type
	
	        Private Declare Function CreateProcessA Lib "kernel32" (ByVal _
	           lpApplicationName As Long, ByVal lpCommandLine As String, _
	           lpProcessAttributes As Any, lpThreadAttributes As Any, _
	           ByVal bInheritHandles As Long, ByVal dwCreationFlags As Long, _
	           ByVal lpEnvironment As Long, ByVal lpCurrentDirectory As Long, _
	           lpStartupInfo As Any, lpProcessInformation As Any) As Long
	
	        Private Declare Function CloseHandle Lib "kernel32" (ByVal _
	           hObject As Long) As Long
	
	        Private Const NORMAL_PRIORITY_CLASS = &H20&
	        Private Const STARTF_USESTDHANDLES = &H100&
	
	        Private Sub ExecCmd(cmdline$)
	            Dim proc As PROCESS_INFORMATION, ret As Long, bSuccess As Long
	            Dim start As STARTUPINFO
	            Dim sa As SECURITY_ATTRIBUTES, hReadPipe As Long, hWritePipe _
	            As Long
	            Dim bytesread As Long, mybuff As String
	            Dim i As Integer
	
	            mybuff = String(256, Chr$(65))
	
	            sa.nLength = Len(sa)
	            sa.bInheritHandle = 1&
	            sa.lpSecurityDescriptor = 0&
	
	            ret = CreatePipe(hReadPipe, hWritePipe, sa, 0)
	            If ret = 0 Then
	                MsgBox "CreatePipe failed. Error: " & Err.LastDllError
	                Exit Sub
	            End If
	
	         start.cb = Len(start)
	         start.dwFlags = STARTF_USESTDHANDLES
	         start.hStdOutput = hWritePipe
	
	         ' Start the shelled application:
	         ret& = CreateProcessA(0&, cmdline$, sa, sa, 1&, _
	         NORMAL_PRIORITY_CLASS, 0&, 0&, start, proc)
	         If ret <> 1 Then
	             MsgBox "CreateProcess failed. Error: " & Err.LastDllError
	         End If
	
	         bSuccess = ReadFile(hReadPipe, mybuff, 100, bytesread, 0&)
	         If bSuccess = 1 Then
	             List1.AddItem Left(mybuff, bytesread)
	         Else
	             MsgBox "ReadFile failed. Error: " & Err.LastDllError
	         End If
	
	            ret& = CloseHandle(proc.hProcess)
	            ret& = CloseHandle(proc.hThread)
	            ret& = CloseHandle(hReadPipe)
	            ret& = CloseHandle(hWritePipe)
	        End Sub
	
	3. Add a CommandButton (Command1) to Form1.
	
	4. Add the following code to the Command1_Click event:
	
	        Private Sub Command1_Click()
	                ExecCmd ("C:\Console\Debug\console.exe")
	        End Sub
	
	Additional query words: kbInetdev kbInternet kbVBp400 kbVBp500 kbVBp600 kbdsi kbDSupport kbVBp
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
