---
layout: page
title: "Q193341: BUG: Circular Dependency Error With Embedded UserControls"
permalink: /kb/193/Q193341/
---

## Q193341: BUG: Circular Dependency Error With Embedded UserControls

	Article: Q193341
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a User Control acting as a container of another User Control, an
	error in the embedded control could generate an invalid "Circular dependencies
	between modules" error when the program is run.
	
	If you attempt to save the project, you may encounter another error while saving
	the container UserControl:
	
	  Error loading c:\windows\temp\vbXXXX.tmp. A control could not be loaded due
	  to load error. Continue?
	
	If you click Yes, an Invalid Page Fault may occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Add two new User Controls (UserControl2 and UserControl3) to the project.
	
	3. Close the design windows of UserControl2 and UserControl3.
	
	4. From the control toolbox, add an instance of UserControl2 and UserControl3 to
	  UserControl1.
	
	5. Close the design window of UserControl1.
	
	6. Paste the following code into UserControl2's code window:
	
	        Private Test As MyTest
	
	7. Press the F5 key to run the program. An error "Circular dependencies between
	  modules" occurs. The expected error message should read:
	
	  "User-defined type not defined".
	
	Additional query words: kbdss kbDSupport kbVBp kbCtrl kbVBp600bug kbCtrlCreate kbCompiler kberrmsg
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
