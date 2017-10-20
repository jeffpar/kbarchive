---
layout: page
title: "Q222527: HOWTO: Launch ActiveSync from a Visual Basic CE 6.0 Application"
permalink: /kb/222/Q222527/
---

## Q222527: HOWTO: Launch ActiveSync from a Visual Basic CE 6.0 Application

{% raw %}

	Article: Q222527
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft Windows CE version 2.0 for the Handheld PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under the Windows CE Toolkit for Visual Basic 6.0, you can now call the
	CreateProcess API to launch a process on a Handheld PC device running Windows CE
	2.0. This article demonstrates how to launch the ActiveSync program using the
	CreateProcess API.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	NOTE: This code works for Windows CE 2.0 only.
	
	1. Start a new Windows CE HPC Project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. Place a command button and a label on Form1.
	
	3. Paste the following code into the code module of Form1:
	
	  Option Explicit
	
	  Public Declare Function CreateProcess Lib "coredll.DLL" _
	      Alias "CreateProcessW" _
	      (ByVal lpApplicationName As String, _
	       ByVal lpCommandLine As String, _
	       ByVal lpProcessAttributes As Long, _
	       ByVal lpThreadAttributes As Long, _
	       ByVal bInheritHandles As Long, _
	       ByVal dwCreationFlags As Long, _
	       ByVal lpEnvironment As Long, _
	       ByVal lpCurrentDirectory As String, _
	       ByVal lpStartupInfo As Long, _
	       ByVal lpProcessInformation As Long) As Long
	
	  Private Sub Command1_Click()
	      Dim ret
	      ret = CreateProcess("windows\repllog.exe", "/remote", _
	                          0, 0, False, 0, 0, "", 0, 0)
	      If ret = 1 Then
	          Label1.Caption = "Success"
	      Else
	          Label1.Caption = "Failure"
	      End If
	  End Sub
	
	4. Run the project on the H/PC device.
	
	5. Disconnect the device from the desktop.
	
	6. Click Command1 and notice that the ActiveSync program starts.
	
	REFERENCES
	==========
	
	Windows CE Toolkit for Visual Basic 6.0 Online Help
	Visual Basic 6.0 API Text Viewer (winceapi.txt)
	
	Additional query words: vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCE200HPC kbWinCETK100VB600
	Version           : :1.0,2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
