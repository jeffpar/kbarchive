---
layout: page
title: "Q150767: HOWTO: Redirect Standard I/O of a Console App Using Batch File"
permalink: kb/150/Q150767/
---

## Q150767: HOWTO: Redirect Standard I/O of a Console App Using Batch File

	Article: Q150767
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A 32-bit Visual Basic application launches another Win32 process by using either
	the Visual Basic Shell command or the CreateProcess Win32 API. If the new
	process is a console application that reads its input from the standard input
	(STDIN) or writes its results to the standard output (STDOUT), you can redirect
	its input and output from the parent Visual Basic application. This article
	describes how to use a batch file (.BAT) to redirect the standard input and
	output of the spawned console process. To build the sample code in this article,
	you need the 32-bit edition of Visual Basic and any development tools, such as
	Visual C++ version 2.0 and above, that build Win32 console applications.
	
	MORE INFORMATION
	================
	
	After the parent Visual Basic application spawns the child console process, the
	parent Visual Basic application provides input to the child's STDIN and receives
	the output from the child's STDOUT. By using a batch file, the parent Visual
	Basic application provides the child's STDIN through a disk file and collects
	the child's STDOUT through another disk file.
	
	Step-by-Step Example
	--------------------
	
	1. Create a console application, CONSOL.EXE, that expects an integer as its
	  STDIN and sends a text string out as its STDOUT, using the following C code:
	
	        #include <stdio.h>
	
	        void main(void)
	        {
	              int i;
	              scanf("%d", &i);
	              printf("\nSTDIn is %d!\n", i);
	        }
	
	2. Create a batch file, named REDIRECT.BAT, that contains only the following
	  command line:
	
	  type stdin.txt | consol.exe > stdout.txt
	
	3. Create a new text file using Notepad or any text editor. Enter an integer and
	  press the ENTER key. Save the file as "stdin.txt."
	
	4. Start a new project in Visual Basic. Form1 is created by default.
	
	5. Add the following code to the General Declarations section of Form1:
	
	        Private Declare Function OpenProcess Lib "kernel32.dll" (ByVal _
	           dwAccess As Long, ByVal fInherit As Integer, ByVal hObject _
	           As Long) As Long
	
	        Private Declare Function CloseHandle Lib "kernel32" (ByVal _
	           hObject As Long) As Long
	
	        Private Declare Function WaitForSingleObject Lib "kernel32" (ByVal _
	         hHandle As Long, ByVal dwMilliseconds As Long) As Long
	
	        Const SYNCHRONIZE = &H100000
	        Const NORMAL_PRIORITY_CLASS = &H20&
	        Const INFINITE = -1&
	
	6. Add the following code to the Form1_Click event:
	
	        ProcessID& = Shell("test.bat", vbNormalFocus)
	        ProcessHandle& = OpenProcess(SYNCHRONIZE, True, ProcessID&)
	        WaitForSingleObject ProcessHandle&, -1&
	        CloseHandle ProcessHandle&
	
	7. Save Form1 and Project1 to the same directory as REDIRECT.BAT and CONSOL.EXE.
	  Press the F5 key to run the program. Click Form1. A console window is
	  displayed briefly and closes itself. The STDOUT.TXT file is then created in
	  the same directory.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
