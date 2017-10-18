---
layout: page
title: "Q223116: FIX: Public Type Statement Causes Application Error"
permalink: kb/223/Q223116/
---

## Q223116: FIX: Public Type Statement Causes Application Error

	Article: Q223116
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ActiveX control project with a public user-defined variable and event is
	created. When the ActiveX control is placed in a Standard EXE project and then
	run from the IDE, the event executes properly. When the Standard EXE project is
	run using the compiled ActiveX control, attempting to execute the event in the
	ActiveX control generates the following error message:
	
	  Run-time Error '-2147417848(80010108)':
	  Method 'ReDimUDT' of object 'UserControl1' failed
	
	RESOLUTION
	==========
	
	To prevent this behavior, declare variables of a user-defined type in ActiveX
	controls as Private variables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section illustrates how to create a sample project that demonstrates this
	bug behavior. It assumes you are familiar with creating ActiveX controls, adding
	ActiveX controls to a Standard EXE project, and compiling a project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the ActiveX Control:
	
	1. Start a new Visual Basic 6.0 ActiveX Control project. UserControl1 is created
	  by default.
	
	2. Add the following code to the General Declarations section of UserControl1:
	
	  Option Explicit
	
	  Public Type MyNewType
	     MyNewType As String
	  End Type
	
	  Private udtMyType() As MyNewType
	
	  Public Sub ReDimUDT()
	     ReDim Preserve udtMyType(0)
	     MsgBox "ReDIM UDT Event Executed."
	  End Sub
	
	3. On the File Menu, click Make Project1.ocx to create a compiled control.
	
	4. Save your project files for future reference.
	
	Create the Standard EXE test project:
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Components. Check the entry for the Project1 OCX
	  and click OK.
	
	3. Add a CommandButton and a UserControl1 to Form1.
	
	4. Copy the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     UserControl11.ReDimUDT
	  End Sub
	
	5. Run the program and click the CommandButton. The error message given earlier
	  is generated.
	
	REFERENCES
	==========
	
	Creating ActiveX Components in the Online Help.
	
	The Microsoft Visual Basic 6.0 Component Tools Guide, or the MSDN Web site below
	explains how to create ActiveX components:
	
	http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconcreatingolecomponents.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
