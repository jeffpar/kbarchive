---
layout: page
title: "Q250476: PRB: VBCE: Process Won't End When MsgBox is in Terminate Event"
permalink: kb/250/Q250476/
---

## Q250476: PRB: VBCE: Process Won't End When MsgBox is in Terminate Event

	Article: Q250476
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a project is executed for the second time from the development environment,
	the following error can occur:
	
	  The file \Project1.vb is locked by another process and can not be copied.
	  (ErrorCode=0x80030020)
	
	This occurs when the application is run on the remote device.
	
	CAUSE
	=====
	
	A message box that is executed in the Terminate event of a form is not visible
	on the remote device. Although the application appears to have terminated, the
	process is still in memory because the message box has not been dismissed.
	
	RESOLUTION
	==========
	
	Kill the process for the application by following these steps:
	
	1. Launch the Process Viewer from the Windows CE menu in the development
	  environment. The Windows CE Remote Process Viewer appears.
	
	2. Locate and select the pvbload.exe file in the process list.
	
	3. Click the Terminate Process button on the toolbar and wait for the
	  pvbload.exe file to disappear from the list.
	
	MORE INFORMATION
	================
	
	This behavior only occurs in the Windows CE Platform.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. In the Project Properties dialog box, make sure that the target to run on is
	  the default device.
	
	3. Add the following code in Form1's code module:
	
	  Private Sub Form_Terminate()
	      MsgBox "Terminate"
	  End Sub
	
	4. Press the F5 key to run the program.
	
	5. Close Form1 on the remote device.
	
	6. Press F5 to run the program again. The error message described in the
	  "Symptoms" section appears.
	
	Additional query words: wince vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
