---
layout: page
title: "Q223101: FIX: WriteProperties Event Executes at Wrong Time"
permalink: kb/223/Q223101/
---

## Q223101: FIX: WriteProperties Event Executes at Wrong Time

	Article: Q223101
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A UserControl in a project always executes the WriteProperties event prior to
	the Resize event. According to Key UserControl Events in the product
	documentation at the URL below, the WriteProperties event only executes when the
	design-time instance of the control is destroyed or when a property value for
	the control is changed:
	
	http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconwerenotinkansasanymore.htm
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section shows you how to create a sample project that demonstrates the bug
	behavior. The section assumes you are familiar with creating ActiveX controls
	and adding ActiveX controls to standard projects. If you are not familiar with
	these tasks, see the REFERENCES section below for more information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the File menu, add an ActiveX Control project to your Standard EXE
	  project. UserControl1 is created by default.
	
	3. Copy the following code to the Code Window of the UserControl:
	
	  Option Explicit
	
	  Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	     Debug.Print "read Properties"
	  End Sub
	
	  Private Sub UserControl_Resize()
	     Debug.Print "resize"
	  End Sub
	
	  Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	     Debug.Print "write Properties"
	  End Sub
	      
	
	4. Close all the windows associated with ActiveX Control project. The ActiveX
	  Control appears on the Toolbox.
	
	5. From the View menu, select Immediate Window.
	
	6. Add the ActiveX Control to Form1 of the Standard EXE project (this causes the
	  first resize event to fire.)
	
	7. From the Run menu, select Start, or press the F5 key to run the program.
	
	  The following appears in the Intermediate Window:
	
	  resize
	  write Properties
	  resize
	  read Properties
	
	  The expected behavior is for the Resize Event to fire first, followed by the
	  ReadProperties Event. The WriteProperties Event should not fire.
	
	REFERENCES
	==========
	
	A similar bug behavior is documented in the following article in the Microsoft
	Knowledge Base:
	
	Q223131 FIX: Inconsistent LostFocus Event Execution Between Versions
	
	For more information, see the following topics:
	
	- Programming With Objects in the Online Help or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconprogrammingwithobjects.htm
	
	- Creating ActiveX Components in the Online Help, or the Microsoft Visual Basic
	  6.0 Component Tools Guide, or the MSDN Web site at:
	
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbconcreatingolecomponents.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
