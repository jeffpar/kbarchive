---
layout: page
title: "Q177096: BUG: Focus Disappears After Minimizing VB Form with UserControl"
permalink: /kb/177/Q177096/
---

## Q177096: BUG: Focus Disappears After Minimizing VB Form with UserControl

	Article: Q177096
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a form containing a UserControl is minimized in a Visual Basic application,
	focus does not shift to another application. The expected behavior is for the
	next application in the task order to receive the focus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Click Add UserControl on the Project menu.
	
	3. Close the UserControl designer window.
	
	4. Add the UserControl to Form1.
	
	5. From the File menu, chose Make Project1.exe.
	
	6. Start another application.
	
	7. Run the exe that you created in step 5.
	
	8. Minimize the Visual Basic Application.
	
	  NOTE: Focus does not shift to the application started in step 6 as expected.
	
	Additional query words: focus active inactive titlebar kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport KBCONTROL KBCTRLCREATE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
