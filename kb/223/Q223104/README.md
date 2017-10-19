---
layout: page
title: "Q223104: FIX: ParentControls.Count May Fail on Windows NT 4, SP4"
permalink: /kb/223/Q223104/
---

## Q223104: FIX: ParentControls.Count May Fail on Windows NT 4, SP4

	Article: Q223104
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVBp600bug kbOSWinNT400sp4 kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT Service Pack 4, if a Usercontrol accesses the
	ParentControls.Count property and there are 32 or more controls on the form,
	including the Usercontrol and any controls on the Usercontrol, the Visual Basic
	app might crash.
	
	NOTE: This bug does not occur on Windows NT 4.0 Service Pack 5 or on Windows 2000
	machines.
	
	CAUSE
	=====
	
	This is caused by an error in Visual Basic's heap allocation mechanism.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. Click Add Project on the File menu and add a new ActiveX Control project.
	  UserControl1 is created by default.
	
	3. Add a CommandButton to the UserControl.
	
	4. Place the following code in the Click event of the CommandButton:
	
	  MsgBox UserControl.ParentControls.Count
	
	5. Close the designer window for UserControl1.
	
	6. Place a UserControl1 control on Form1 of the Standard EXE Project.
	
	7. Add 30 TextBox controls to Form1 of the Standard EXE project.
	
	8. Press the F5 key to run the project.
	
	9. Click the CommandButton of the UserControl.
	
	After clicking the button in the last step, an Application Error occurs in
	VB6.exe.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q195009 Application Access Violation or Hang After Applying SP4
	
	
	Q219278 BUG: OLAP MDX Application Gives Application Error in VB IDE
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVBp600bug kbOSWinNT400sp4 kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
