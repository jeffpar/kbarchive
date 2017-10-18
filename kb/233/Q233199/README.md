---
layout: page
title: "Q233199: BUG: Duplicate Control Boxes on MDI Form"
permalink: kb/233/Q233199/
---

## Q233199: BUG: Duplicate Control Boxes on MDI Form

	Article: Q233199
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have user controls on MDI child forms, the MDI form will sometimes
	display duplicate control boxes when you close it. This problem only occurs when
	the focus is on the user control when the child form is closed.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem:
	
	1. Mark the user control's focus property as False so that it does not receive
	  focus.
	
	2. Add at least one control that is not a user control on your child form. Set
	  the focus to this control right before the child form is closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click Add MDI Form to add MDIForm1 to the project.
	
	3. Set Form1's MDIChild property to True.
	
	4. On the Project menu, click Project1 Properties. On the General tab, change
	  the StartUp Object to MDIForm1 and click OK.
	
	5. On the Project menu, click Add User Control to add a UserControl to the
	  project. Usercontrol1 is created by default.
	
	6. Close UserControl1's design window so that it can be sited on a form. Add a
	  UserControl11 to Form1.
	
	7. Add the following code to the General Declarations section of MDIForm1:
	
	  Private Sub MDIForm_DblClick()
	     Dim frm As Form1
	     Set frm = New Form1
	     frm.Show
	  End Sub
	
	8. Press the F5 key to run the project. Double-click the MDIForm three times to
	  instantiate three instances of Form1. Minimize two of the child forms and
	  maximize one. Click the Close button "x" in the control box to close the
	  first child window. Click it again to close the second child form. A
	  duplicate set of control boxes will be added to the title bar.
	
	Steps to Work Around the Behavior
	---------------------------------
	
	1. Add a TextBox control to Form1.
	
	2. Add following code to the General Declarations section of Form1:
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	     Text1.SetFocus
	  End Sub
	
	3. Repeat the procedure from step 8 above. The duplicate control boxes do not
	  appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
