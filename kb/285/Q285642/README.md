---
layout: page
title: "Q285642: BUG: Using Add-In to Change Name of UserControl May Cause AV"
permalink: kb/285/Q285642/
---

## Q285642: BUG: Using Add-In to Change Name of UserControl May Cause AV

	Article: Q285642
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbCtrlCreate kbVBp kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an add-in to change the name of a UserControl, an access violation
	(AV) occurs. The error message is similar to the following:
	
	  VB6.EXE - Application Error
	  The instruction at "0x004075a9" referenced memory at "0x0000000c". The memory
	  could not be "read".
	
	Modifying the name of Projects, Modules, and Forms with an add-in does not cause
	an Access Violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This appears to be an issue only when you load a project from a file and then
	try to change the name of a UserControl in that project. The error message does
	not occur if you create a new ActiveX Control Project and then change the name
	of the UserControl.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic add-in project.
	
	2. Open the design window for the form frmAddin and replace the current code for
	  the click event of the OKButton with the following:
	
	  Dim oUserCtl As VBComponent
	  Dim oProj As VBProject
	
	  VBInstance.VBProjects.AddFromFile VBInstance.ActiveVBProject.FileName, True
	  Set oProj = VBInstance.VBProjects.Item("Project1")
	  Set oUserCtl = oProj.VBComponents("Usercontrol1")
	  ' the following line causes the Access Violation:
	  oUserCtl.Name = "CoolName"
	  Unload Me
	
	3. Compile the add-in DLL.
	
	4. Start a new ActiveX Control project in Visual Basic.
	
	5. On the File menu, choose Save Project, and then save the project files to a
	  folder.
	
	6. If it is not already loaded, load the add-in by using Add-In Manager. The
	  name of the add-in should be My Addin.
	
	7. On the Add-Ins menu, select My Addin.
	
	8. Click OK, and note that an access violation occurs.
	
	Additional query words: addin User ctl ctrl
	
	======================================================================
	Keywords          : kbCtrl kbCtrlCreate kbVBp kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
