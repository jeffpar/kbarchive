---
layout: page
title: "Q177703: FIX: Access Violation with Public Enums in UserControl"
permalink: kb/177/Q177703/
---

## Q177703: FIX: Access Violation with Public Enums in UserControl

	Article: Q177703
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp kbVBp500bug kbVBp600fix kbVS97sp2 kbGrpDSVB kbDSupport kbControl
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When exiting a Visual Basic 5.0 ActiveX Control project in the design
	environment, an Access Violation error occurs and Visual Basic is terminated.
	
	CAUSE
	=====
	
	This problem can occur when declaring Public Enum in the UserControl module when
	running Visual Studio 97 Service Pack 2 (SP2.)
	
	
	RESOLUTION
	==========
	
	Move the Public Enums to a standard (.bas) module instead of the UserControl
	module.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: To reproduce the problem, you must have Visual Studio 97 Service Pack 2
	installed.
	
	1. Create a new ActiveX control project.
	
	2. Add another UserControl to the project so you have UserControl1 and
	  UserControl2.
	
	3. Place UserControl2 inside UserControl1.
	
	4. Add the following code to UserControl1:
	
	        Option Explicit
	
	        Public Enum BorderStyle_Type
	           None = 1
	           FixedSingle = 2
	        End Enum
	
	        Public Enum Appearance_Type
	           Flat = 1
	           ThreeDimensional = 2
	        End Enum
	
	5. Close the design windows of UserControl1 and UserControl2.
	
	6. Add a Standard EXE project so that you have a project group. Form1 is created
	  by default.
	
	7. Add UserControl1 to Form1.
	
	8. Optional: Save the project group.
	
	9. Exit Visual Basic to close the project group.
	
	  In Windows 2000, you receive the following error:
	
	  The instruction at "0x0fb20cc8" referenced memory at "0x00000010". The memory
	  could not be read.
	
	  In Windows NT 4.0, Service Pack 3 you receive the following error:
	
	  Access Violation in VB5.exe at 0x0fb25f69
	
	  In Windows 95, Windows 98, or Windows Me, you receive the following error:
	
	  VB5 caused an invalid page fault in module VBA5.DLL
	
	Additional query words: IPF GPF crash
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp kbVBp500bug kbVBp600fix kbVS97sp2 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
