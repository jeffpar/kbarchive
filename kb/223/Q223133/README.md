---
layout: page
title: "Q223133: FIX: Private Enum Statements Cause an Application Error"
permalink: /kb/223/Q223133/
---

## Q223133: FIX: Private Enum Statements Cause an Application Error

	Article: Q223133
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrlCreate kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-created ActiveX control contains several private Enum statements. When
	this user control is added to a Visual Basic project and the project containing
	the usercontrol is run, an application error occurs that terminates Visual
	Basic.
	
	RESOLUTION
	==========
	
	You can work around this behavior by declaring your Enum statements as Public
	rather than Private.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This section demonstrates how to create a project that reproduces the bug
	behavior. The section assumes you are familiar with creating an ActiveX control
	and adding it to a Standard EXE project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the File menu, click Add Project to add a new ActiveX Control project to
	  the project group. UserControl1 is created by default.
	
	3. Paste the following code into the General Declarations section of
	  UserControl1:
	
	  Option Explicit
	  Private Enum Test1
	     Var1
	  End Enum
	
	  Private Enum Test2
	     Var2
	  End Enum
	
	  Private Enum Test3
	     Var3
	  End Enum
	
	  Private Enum Test4
	     Var4
	  End Enum
	
	4. Close all the Windows associated with the UserControl. Add a UserControl1
	  control to Form1.
	
	5. On the Run menu, select Start, or press the F5 key to start the program. The
	  following error message is displayed:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrlCreate kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
