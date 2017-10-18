---
layout: page
title: "Q171654: HOWTO: Attach a Console Window to Your Visual Basic Program"
permalink: kb/171/Q171654/
---

## Q171654: HOWTO: Attach a Console Window to Your Visual Basic Program

	Article: Q171654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates attaching a console window to your Visual Basic
	application, writing to it, and running another application in the console
	window.
	
	MORE INFORMATION
	================
	
	If a Visual Basic application is started from a console application, the
	operating system automatically detaches it from the console, preventing the
	Visual Basic application from interacting with it. This article does not provide
	a method to prevent this from happening, but does demonstrate creating a new
	console window that your application can interact with. It also demonstrates
	running a console application (batch file, in this case) from Visual Basic,
	which utilizes the created console.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Step-by-Step Example
	--------------------
	
	1. Use Notepad to create the following batch file:
	
	  DIR /W
	
	  and save it as C:\TEST.BAT
	
	2. In Visual Basic, create a new project with a form and a module.
	
	3. Type the following API declarations in the module:
	
	     Option Explicit
	
	     Declare Function AllocConsole Lib "kernel32" () As Long
	     Declare Function FreeConsole Lib "kernel32" () As Long
	     Declare Function CloseHandle Lib "kernel32" (ByVal hObject As Long) _
	             As Long
	     Declare Function GetStdHandle Lib "kernel32" (ByVal _
	             nStdHandle As Long) As Long
	     Declare Function WriteConsole Lib "kernel32" Alias "WriteConsoleA" _
	             (ByVal hConsoleOutput As Long, lpBuffer As Any, ByVal _
	             nNumberOfCharsToWrite As Long, lpNumberOfCharsWritten As Long, _
	             lpReserved As Any) As Long
	
	     Public Const STD_OUTPUT_HANDLE = -11&
	
	4. Add a CommandButton to the form and enter the following code:
	
	     Dim hConsole As Long
	
	     Private Sub Command1_Click()
	     Dim Result As Long, sOut As String, cWritten As Long
	       sOut = "Hi There" & vbCrLf
	       Result = WriteConsole(hConsole, ByVal sOut, Len(sOut), cWritten, _
	                             ByVal 0&)
	       Shell "C:\TEST.BAT"
	     End Sub
	
	     Private Sub Form_Load()
	       If AllocConsole() Then
	         hConsole = GetStdHandle(STD_OUTPUT_HANDLE)
	         If hConsole = 0 Then MsgBox "Couldn't allocate STDOUT"
	       Else
	         MsgBox "Couldn't allocate console"
	       End If
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	       CloseHandle hConsole
	       FreeConsole
	     End Sub
	
	5. Run the application. A blank console window will appear.
	
	6. Click the CommandButton. Both the text in sOut and the output from the batch
	  file will appear in the console.
	
	7. Close the form. The console window will terminate.
	
	NOTES:
	
	1. If you run another application in the console, it will run asynchronously
	  with your Visual Basic application. Output from the two applications can
	  become interspersed.
	
	2. If the console application hasn't terminated prior to your Visual Basic
	  application closing, the console window will remain open.
	
	3. If you close the console window, the Visual Basic EXE will terminate. If you
	  are in the Visual Basic development environment (IDE), closing the console
	  window will terminate the IDE and it may hang the console window. Use the
	  Task Manager to terminate the task.
	
	REFERENCES
	==========
	
	Microsoft Windows SDK.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBp400 kbAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
