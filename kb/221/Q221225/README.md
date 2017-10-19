---
layout: page
title: "Q221225: FIX: Calling Method in User Ctrl w/ParamArray Causes Fatal Excep"
permalink: /kb/221/Q221225/
---

## Q221225: FIX: Calling Method in User Ctrl w/ParamArray Causes Fatal Excep

	Article: Q221225
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbCtrlCreate kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS60
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If no parameter is passed, a fatal exception occurs in Visual Basic 6.0 when you
	compile a project that calls a method in a user control with a ParamArray
	parameter.
	
	RESOLUTION
	==========
	
	There is no workaround available for this problem. You must pass at least one
	parameter to avoid it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX control project.
	
	2. Add the following method:
	
	  Option Explicit
	
	  Public Function PassVararg (ParamArray t() As Variant) As Long
	  End Function
	
	3. Compile the user control.
	
	4. Start a new Standard EXE Project. Form1 is created by default.
	
	5. Make a reference to the user control that you just created.
	
	6. Place an instance of the user control on Form1.
	
	7. Change the name of the user control to Ocx1.
	
	8. In Form_Load event procedure, add the following code:
	
	  Dim k as Long
	  k = Ocx1.PassVararg
	
	9. Save the project.
	
	10. Compile the project.
	
	  RESULT: A fatal exception occurs. This problem only occurs in an ActiveX
	  control project. It does not happen in an ActiveX DLL project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbCtrlCreate kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
