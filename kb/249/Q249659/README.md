---
layout: page
title: "Q249659: BUG: Invalid Page Fault Using Scripting Run-Time on Windows 95"
permalink: /kb/249/Q249659/
---

## Q249659: BUG: Invalid Page Fault Using Scripting Run-Time on Windows 95

	Article: Q249659
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get an invalid page fault error message when you close your application
	if you have accessed certain properties of the Microsoft Scripting Run-Time
	Objects in your code. The details of the error message start as follows:
	
	  [AppName] caused an invalid page fault in module SCRRUN.DLL at 0137:6b801185.
	
	[AppName] is the name of the executable. So, if you are running the compiled EXE,
	[AppName] is the name of your EXE, and if you run the project from the IDE,
	[AppName] is the Visual Basic executable, either VB5.exe or VB6.exe. The memory
	address and offset at the end of the message may vary.
	
	CAUSE
	=====
	
	The error message occurs if you have version 5.x of the Scrrun.dll file and your
	operating system is Microsoft Windows 95. The error does not occur on Microsoft
	Windows 98, Windows Me, Microsoft Windows NT and Windows 2000-based computers,
	or with version 4.x of the Scrrun.dll file.
	
	RESOLUTION
	==========
	
	This bug was corrected in Windows Script 5.5. To download this update, please
	see the following page on the Microsoft Developer Network (MSDN):
	
	  http://msdn.microsoft.com/scripting
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure that you have version 5.x of the Scrrun.dll file installed.
	
	2. Start a new Standard EXE Project in Visual Basic. Form1 is created by
	  default.
	
	3. From the Project menu, choose References, and select "Microsoft Scripting
	  Run-time" in the References dialog box. Click OK.
	
	4. Add the following code to the Declarations Section of Form1:
	
	  Private Sub Form_Click()
	   Dim fso As FileSystemObject
	   Dim d As Drive
	
	   Set fso = New FileSystemObject
	   Set d = fso.GetDrive("C:")
	   MsgBox d.AvailableSpace
	   Set fso = Nothing
	   Set d = Nothing
	  End Sub
	
	5. From the File menu, click Make Project1.exe to compile the executable.
	
	6. Run the compiled executable. Click on the form and the message box displays.
	  Click OK in the message box and then close the form.
	
	Result: The Invalid Page Fault occurs.
	
	Additional query words: crash ipf gpf
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
